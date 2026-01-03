import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, whatsapp, inquiryType, message, courseName } = body;

        // VALIDATION
        if (!name || !email || !whatsapp) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        console.log('--- NEW INQUIRY RECEIVED ---');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('WhatsApp:', whatsapp);
        console.log('Type:', inquiryType);
        console.log('Course:', courseName);
        console.log('Message:', message);

        // Check for environment variables
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.warn('SMTP credentials not found in environment variables. Skipped email sending.');
            return NextResponse.json({
                success: true,
                message: 'Inquiry logged (Email skipped due to missing config).'
            });
        }

        // Create Transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 1. Send Admin Notification
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: 'akshjavahub@gmail.com',
            subject: `New Inquiry: ${inquiryType} - ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #2563eb;">New Lead Received</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>WhatsApp:</strong> ${whatsapp}</p>
                    <p><strong>Type:</strong> ${inquiryType}</p>
                    <p><strong>Course:</strong> ${courseName || 'N/A'}</p>
                     <p><strong>Message:</strong> ${message || 'N/A'}</p>
                    <hr/>
                    <p style="font-size: 12px; color: #666;">This is an automated message from Mathisi.</p>
                </div>
            `,
        };

        // 2. Send User Confirmation
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: `We've received your inquiry - Mathisi`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #2563eb;">Thank You for Reaching Out!</h2>
                    <p>Hi ${name},</p>
                    <p>Thank you for your interest in <strong>${courseName || 'Mathisi'}</strong>. We have received your details.</p>
                    <p>Our admissions counselor will get in touch with you shortly to assist you further.</p>
                    <br/>
                    <p>Best Regards,</p>
                    <p><strong>Mathisi Team</strong></p>
                    <p><a href="https://www.mathisi.in" style="color: #2563eb;">www.mathisi.in</a></p>
                </div>
            `,
        };

        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions)
        ]);

        return NextResponse.json({
            success: true,
            message: 'Inquiry submitted and emails sent successfully.'
        });

    } catch (error) {
        console.error('Inquiry API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
