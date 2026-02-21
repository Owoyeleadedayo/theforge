import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, email, whatsapp, interest, location } = body;

    if (!firstName || !email || !interest) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Updates" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Update Subscriber - ${firstName}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Subscription</h2>
          <p><strong>Name:</strong> ${firstName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp || "Not provided"}</p>
          <p><strong>Interest:</strong> ${interest}</p>
          <p><strong>Location:</strong> ${location || "Not provided"}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Subscription successful" });
  } catch (error) {
    console.error("Email error:", error);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}