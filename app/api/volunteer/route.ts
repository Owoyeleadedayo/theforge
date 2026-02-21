import { transporter } from "@/lib/email";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      whatsapp,
      location,
      areas,
      linkedin,
      reason,
    } = body;

    // Backend validation (never trust frontend)
    if (
      !fullName ||
      !email ||
      !whatsapp ||
      !location ||
      !Array.isArray(areas) ||
      areas.length === 0 ||
      !reason
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const formattedAreas = areas.join(", ");

    // Send email to admin
    await transporter.sendMail({
      from: `"Volunteer Application" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Volunteer Application - ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Volunteer Application</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Areas:</strong> ${formattedAreas}</p>
          <p><strong>LinkedIn:</strong> ${linkedin || "Not provided"}</p>

          <hr />
          <h3>Reason</h3>
          <p>${reason.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    // Send confirmation email to applicant
    await transporter.sendMail({
      from: `"ONEFORGE" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Volunteer Application Received ✅",
      html: `
        <h3>Hello ${fullName},</h3>
        <p>Thank you for volunteering with ONEFORGE.</p>
        <p>We appreciate your willingness to serve.</p>
        <p>Our team will review your application and reach out soon.</p>
      `,
    });

    return NextResponse.json({
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.error("Volunteer email error:", error);

    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}