import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
    try {
        const connection = await pool.getConnection();
        try {
            await connection.query(`
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL UNIQUE,
          phone VARCHAR(20) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
            await connection.query(`
        CREATE TABLE IF NOT EXISTS otps (
          phone VARCHAR(20) PRIMARY KEY,
          code VARCHAR(10) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
      `);
            connection.release();
            return NextResponse.json({ success: true, message: 'Users table created successfully' });
        } catch (err) {
            connection.release();
            return NextResponse.json({ success: false, error: (err as any).message }, { status: 500 });
        }
    } catch (err) {
        return NextResponse.json({ success: false, error: 'Failed to connect to DB' }, { status: 500 });
    }
}
