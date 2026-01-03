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

        // INTEGRATION: Send Real SMS
        // Prioritize 2Factor.in if configured (Better Free Trial)
        const twoFactorKey = process.env.TWOFACTOR_API_KEY;
        const fast2smsKey = process.env.FAST2SMS_API_KEY;

        if (twoFactorKey) {
            const https = require('https');

            // Revert to SMS OTP (Message)
            // Endpoint: https://2factor.in/API/V1/{api_key}/SMS/${phone}/${otp}/OTP1
            const url = `https://2factor.in/API/V1/${twoFactorKey}/SMS/${phone}/${otp}/OTP1`;

            await new Promise((resolve) => {
                https.get(url, (res: any) => {
                    let data = '';
                    res.on('data', (chunk: any) => { data += chunk; });
                    res.on('end', () => {
                        try {
                            const result = JSON.parse(data);
                            if (result.Status === 'Success') {
                                console.log(`[SMS-SERVICE] OTP Sent to ${phone} via 2Factor`);
                                resolve({ success: true });
                            } else {
                                console.error('[SMS-SERVICE] 2Factor Error:', result);
                                // Fallback info
                                console.log(`\n============== [DEV FALLBACK] ==============`);
                                console.log(`SMS failed. Use this OTP: ${otp}`);
                                console.log(`============================================\n`);
                                resolve({ success: true });
                            }
                        } catch (e) {
                            console.error('JSON Parse Error', e);
                            resolve({ success: false });
                        }
                    });
                }).on('error', (e: any) => {
                    console.error('[SMS-SERVICE] Request Error:', e);
                    resolve({ success: false });
                });
            });
            return NextResponse.json({ success: true, message: 'OTP sent successfully' });

        } else if (fast2smsKey) {
            // Fast2SMS Logic (Existing)
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
                    'authorization': fast2smsKey,
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
                                console.log(`\n============== [DEV FALLBACK] ==============`);
                                console.log(`Provider failed. Use this OTP: ${otp}`);
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
                    console.log(`\n============== [DEV FALLBACK] ==============`);
                    console.log(`Network error. Use this OTP: ${otp}`);
                    console.log(`============================================\n`);
                    resolve({ success: true, warning: 'Network error, check console for OTP' });
                });
                req.write(postData);
                req.end();
            });
            return NextResponse.json({ success: true, message: 'OTP generated (Check console if SMS failed)' });

        } else {
            // NO KEY FOUND - DEV FALLBACK
            console.log(`\n============== [KEY MISSING - DEV MODE] ==============`);
            console.log(`No SMS API Key found. Use this OTP: ${otp}`);
            console.log(`======================================================\n`);
            return NextResponse.json({
                success: true,
                message: 'SMS Service not configured. Check console for OTP code.',
            });
        }
    } catch (error) {
        console.error('Error sending OTP:', error);
        return NextResponse.json({ success: false, error: 'Failed to send OTP' }, { status: 500 });
    }
}
