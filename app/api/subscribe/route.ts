import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail } from '@/lib/email';

const schema = z.object({
  firstName: z.string().min(1).max(100),
  email: z.string().email(),
  whatsapp: z.string().optional(),
  interest: z.string().min(1),
  location: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // Format interest
    const interestMap = {
      oneforge: 'ONEFORGE',
      strategy: 'School of Strategy',
      both: 'Both ONEFORGE & School of Strategy'
    };
    const formattedInterest = interestMap[data.interest as keyof typeof interestMap] || data.interest;

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #f8f9fa; border-radius: 8px; padding: 30px;">
          <h2 style="color: #1a73e8; margin-top: 0;">New Update Subscriber</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0;"><strong>Name:</strong> ${data.firstName}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Email:</strong> ${data.email}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>WhatsApp:</strong> ${data.whatsapp || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Interest:</strong> ${formattedInterest}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Location:</strong> ${data.location || 'Not provided'}</td></tr>
          </table>
          <p style="color: #666; font-size: 14px; margin-top: 30px;">Received: ${new Date().toLocaleString()}</p>
        </div>
      </body>
      </html>
    `;

    const result = await sendEmail({
      from: 'ONEFORGE Updates <updates@your-domain.com>', // Use your verified domain
      to: process.env.WORK_EMAIL!,
      subject: `📧 New Subscriber: ${data.firstName}`,
      html,
      replyTo: data.email,
    });

    if (!result.success) {
      throw new Error('Failed to send email');
    }

    return NextResponse.json({ message: 'Subscription successful' }, { status: 200 });
    
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 400 }
    );
  }
}