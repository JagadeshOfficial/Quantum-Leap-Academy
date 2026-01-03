import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request: Request) {
    try {
        const { phone } = await request.json();

        if (!phone) {
            return NextResponse.json({ success: false, error: 'Phone number is required' }, { status: 400 });
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit OTP

        // SAVE OTP TO DATABASE
        try {
            const connection = await pool.getConnection();
            // Ensure table exists (Lazy init for dev convenience)
            await connection.query(`
                CREATE TABLE IF NOT EXISTS otps (
                  phone VARCHAR(20) PRIMARY KEY,
                  code VARCHAR(10) NOT NULL,
                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
                )
            `);
            await connection.execute(
                `INSERT INTO otps (phone, code) VALUES (?, ?) ON DUPLICATE KEY UPDATE code = ?`,
                [phone, otp, otp]
            );
            connection.release();
        } catch (dbErr) {
            console.error('DB OTP Save Error:', dbErr);
            // We continue sending SMS even if DB save fails, though verification will fail later.
        }

        // INTEGRATION: Send Real SMS using Fast2SMS (Indian Provider)
        const apiKey = process.env.FAST2SMS_API_KEY;

        if (apiKey) {
            // Use POST method via Node https for maximum reliability
            const https = require('https');

            const postData = JSON.stringify({
                "route": "q",
                "message": `Your Verification Code is: ${otp}`,
                "language": "english",
                "numbers": phone
            });

            const options = {
                hostname: 'www.fast2sms.com',
                port: 443,
                path: '/dev/bulkV2',
                method: 'POST',
                headers: {
                    'authorization': apiKey,
                    'Content-Type': 'application/json',
                    'Content-Length': postData.length
                }
            };

            await new Promise((resolve) => {
                const req = https.request(options, (res: any) => {
                    let data = '';
                    res.on('data', (chunk: any) => { data += chunk; });
                    res.on('end', () => {
                        try {
                            const result = JSON.parse(data);
                            if (result.return) {
                                console.log(`[SMS-SERVICE] OTP Sent to ${phone} via Fast2SMS (POST)`);
                                resolve({ success: true });
                            } else {
                                console.error('[SMS-SERVICE] Fast2SMS Error:', result);
                                // FALLBACK FOR DEV: If provider fails (e.g. need payment), allow proceeding by logging OTP.
                                console.log(`\n============== [DEV FALLBACK] ==============`);
                                console.log(`Provider failed. Use this OTP to verify: ${otp}`);
                                console.log(`============================================\n`);
                                resolve({ success: true, warning: 'Provider failed, check console for OTP' });
                            }
                        } catch (e) {
                            console.error('JSON Parse Error', e);
                            resolve({ success: false });
                        }
                    });
                });

                req.on('error', (e: any) => {
                    console.error('[SMS-SERVICE] HTTPS Request Error:', e);
                    // Also fallback on network error
                    console.log(`\n============== [DEV FALLBACK] ==============`);
                    console.log(`Network error. Use this OTP to verify: ${otp}`);
                    console.log(`============================================\n`);
                    resolve({ success: true, warning: 'Network error, check console for OTP' });
                });

                req.write(postData);
                req.end();
            });

            return NextResponse.json({ success: true, message: 'OTP generated (Check console if SMS failed)' });
        } else {
            console.warn('[SMS-SERVICE] No FAST2SMS_API_KEY found.');
            return NextResponse.json({
                success: false,
                error: 'SMS Service not configured.',
            }, { status: 500 });
        }

    } catch (error) {
        console.error('Error sending OTP:', error);
        return NextResponse.json({ success: false, error: 'Failed to send OTP' }, { status: 500 });
    }
}
