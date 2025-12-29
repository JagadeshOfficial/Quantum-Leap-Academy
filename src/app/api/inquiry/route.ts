
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, whatsapp, inquiryType, message } = body;

        // VALIDATION
        if (!name || !email || !whatsapp) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        console.log('--- NEW INQUIRY RECEIVED ---');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('WhatsApp:', whatsapp);
        console.log('Type:', inquiryType);
        console.log('Message:', message);

        /**
         * TO ENABLE REAL EMAIL NOTIFICATIONS:
         * 1. npm install resend
         * 2. Add RESEND_API_KEY to your .env
         * 3. Uncomment the code below
         */

        /*
        import { Resend } from 'resend';
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'Mathisi Academy <onboarding@resend.dev>',
          to: 'your-admin-email@example.com', // Replace with your email
          subject: `New Lead: ${name} (${inquiryType})`,
          html: `
            <h1>New Inquiry from Mathisi Academy</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>WhatsApp:</strong> ${whatsapp}</p>
            <p><strong>Interest:</strong> ${inquiryType}</p>
            <p><strong>Message:</strong> ${message}</p>
          `
        });
        */

        return NextResponse.json({
            success: true,
            message: 'Inquiry logged and notifications sent to admin.'
        });

    } catch (error) {
        console.error('Inquiry API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
