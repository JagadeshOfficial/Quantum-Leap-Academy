"use server";

import nodemailer from "nodemailer";

export async function submitCareerSession(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const domain = formData.get("domain") as string;

  if (!name || !email || !phone) {
    return { success: false, message: "Missing required fields" };
  }

  // Create Transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // e.g. 'akshjavahub@gmail.com'
      pass: process.env.EMAIL_PASS, // App Password
    },
  });

  try {
    // 1. Send Email to Admin
    await transporter.sendMail({
      from: `"Mathisi Career Portal" <${process.env.EMAIL_USER}>`,
      to: "akshjavahub@gmail.com",
      subject: `🚀 New Career Session Request: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #4F46E5;">New Session Booking</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Interested Domain:</strong> ${domain}</p>
          <hr />
          <p style="font-size: 12px; color: #666;">This lead was captured from the Mathisi Website.</p>
        </div>
      `,
    });

    // 2. Send Confirmation Email to Student
    await transporter.sendMail({
      from: `"Mathisi School" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `🎉 Session Booked! Your Career Roadmap Awaits`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #4F46E5;">Hi ${name},</h2>
          <p>Thanks for booking a career strategy session with us!</p>
          <p>Our expert counselors will review your profile and reach out to you shortly at <strong>${phone}</strong> to schedule your 1:1 slot.</p>
          <br/>
          <p>Best Regards,</p>
          <p><strong>Mathisi School Team</strong></p>
        </div>
      `,
    });

    // --- Persistence Logic ---
    try {
      const fs = require('fs/promises');
      const path = require('path');
      const dataFilePath = path.join(process.cwd(), 'src', 'data', 'leads.json');

      let currentData = [];
      try {
        const fileContent = await fs.readFile(dataFilePath, 'utf-8');
        currentData = JSON.parse(fileContent);
        if (!Array.isArray(currentData)) currentData = [];
      } catch (err) {
        // File might not exist or be empty, default to []
        currentData = [];
      }

      const newLead = {
        id: Date.now().toString(),
        name,
        email,
        phone,
        domain,
        source: "Career Counseling Popup",
        timestamp: new Date().toISOString()
      };

      currentData.push(newLead);
      await fs.writeFile(dataFilePath, JSON.stringify(currentData, null, 2));

    } catch (fsError) {
      console.error("Failed to save lead to disk:", fsError);
      // We don't block the response here, email might still persist
    }
    // -------------------------

    return { success: true, message: "Booking successful!" };
  } catch (error) {
    console.error("Email Error:", error);
    // Return success even if email fails in dev mode so UI updates (simulate success)
    // In prod, you'd handle this more strictly.
    return { success: false, message: "Failed to send email. Please try again." };
  }
}
