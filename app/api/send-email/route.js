import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { fullName, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMALSIAI_EMAIL_USER, 
        pass: process.env.SMALSIAI_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMALSIAI_EMAIL_USER}>`,
      to: email,
      subject: "Nauja žinutė iš Smalsiai.lt",
      html: `
        <h2>Nauja žinutė iš Smalsiai 📧</h2>
        <p><strong>Vardas:</strong> ${fullName}</p>
        <p><strong>El. paštas:</strong> ${email}</p>
        <p><strong>Telefonas:</strong> ${phone || "-"}</p>
        <p><strong>Žinutė:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
