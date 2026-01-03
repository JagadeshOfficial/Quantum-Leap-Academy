import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { RowDataPacket } from 'mysql2';

export async function POST(request: Request) {
    try {
        const { name, email, phone, password, otp } = await request.json();

        // 1. Basic Validation
        if (!name || !email || !phone || !password || !otp) {
            return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 400 });
        }

        const connection = await pool.getConnection();

        try {
            // 2. OTP Verification (Database)
            const [otpRows] = await connection.execute<RowDataPacket[]>(
                'SELECT code FROM otps WHERE phone = ?',
                [phone]
            );

            const storedOtp = otpRows.length > 0 ? otpRows[0].code : null;

            if (!storedOtp || storedOtp !== otp) {
                connection.release();
                return NextResponse.json({ success: false, error: 'Invalid or expired OTP' }, { status: 400 });
            }

            // 3. Check if user exists
            const [existingUsers] = await connection.execute<RowDataPacket[]>(
                'SELECT * FROM users WHERE email = ? OR phone = ?',
                [email, phone]
            );

            if (existingUsers.length > 0) {
                connection.release();
                return NextResponse.json({ success: false, error: 'User already exists with this email or phone' }, { status: 409 });
            }

            // 4. Insert User
            await connection.execute(
                'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)',
                [name, email, phone, password]
            );

            // Optional: Delete OTP after successful registration
            await connection.execute('DELETE FROM otps WHERE phone = ?', [phone]);

            connection.release();

            return NextResponse.json({ success: true, message: 'Registration successful' });

        } catch (dbError) {
            connection.release();
            console.error('Database Error:', dbError);
            return NextResponse.json({ success: false, error: 'Database error occurred' }, { status: 500 });
        }

    } catch (error) {
        console.error('Registration Error:', error);
        return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
    }
}
