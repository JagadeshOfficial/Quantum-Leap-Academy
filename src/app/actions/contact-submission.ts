"use server";

import nodemailer from "nodemailer";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, message: "Missing required fields" };
  }

  // Create Transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // 1. Send Email to Admin
    await transporter.sendMail({
      from: `"Mathisi Contact Form" <${process.env.EMAIL_USER}>`,
      to: "akshjavahub@gmail.com",
      subject: `📩 New Contact Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #4F46E5;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #4F46E5;">
            ${message}
          </blockquote>
          <hr />
          <p style="font-size: 12px; color: #666;">Sent via Mathisi School Contact Page.</p>
        </div>
      `,
    });

    // 2. Send Confirmation Email to User
    await transporter.sendMail({
      from: `"Mathisi School" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `✅ We received your message, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #4F46E5;">Hi ${name},</h2>
          <p>Thank you for reaching out to us. We have received your query and will get back to you as soon as possible.</p>
          <p><strong>Your Message:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #ccc;">
            ${message}
          </blockquote>
          <br/>
          <p>Best Regards,</p>
          <p><strong>Mathisi School Team</strong></p>
        </div>
      `,
    });

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Email Error:", error);
    return { success: false, message: "Failed to send message. Please try again." };
  }
}
