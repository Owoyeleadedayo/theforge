import { Resend } from "resend";

interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  from: string;
}

export async function sendEmail({
  to,
  subject,
  html,
  text,
  replyTo,
  from,
}: EmailOptions) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not defined");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      text:
        text ||
        html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim(),
      replyTo,
    });

    if (error) throw error;

    return { success: true, data };
  } catch (error) {
    console.error("Email send failed:", error);
    return { success: false, error };
  }
}
