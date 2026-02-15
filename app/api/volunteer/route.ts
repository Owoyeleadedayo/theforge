import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail } from '@/lib/email';

const schema = z.object({
  fullName: z.string().min(1).max(100),
  email: z.string().email(),
  whatsapp: z.string().min(1).max(20),
  location: z.string().min(1).max(100),
  areas: z.array(z.string()).min(1),
  linkedin: z.string().optional(),
  reason: z.string().min(1).max(1000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    const formattedAreas = data.areas.join(', ');

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #f8f9fa; border-radius: 8px; padding: 30px;">
          <h2 style="color: #1a73e8; margin-top: 0;">🙏 New Volunteer Application</h2>
          
          <h3 style="color: #333; margin: 20px 0 10px;">Contact Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0;"><strong>Full Name:</strong> ${data.fullName}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Email:</strong> ${data.email}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>WhatsApp:</strong> ${data.whatsapp}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Location:</strong> ${data.location}</td></tr>
            ${data.linkedin ? `<tr><td style="padding: 8px 0;"><strong>LinkedIn:</strong> <a href="${data.linkedin}">View Profile</a></td></tr>` : ''}
          </table>
          
          <h3 style="color: #333; margin: 20px 0 10px;">Areas of Service</h3>
          <div style="background: white; padding: 15px; border-radius: 5px;">
            ${data.areas.map(area => `<span style="display: inline-block; background: #e3f2fd; padding: 5px 10px; border-radius: 15px; margin: 0 5px 5px 0;">${area}</span>`).join('')}
          </div>
          
          <h3 style="color: #333; margin: 20px 0 10px;">Why They Want to Volunteer</h3>
          <div style="background: white; padding: 15px; border-radius: 5px; font-style: italic;">
            "${data.reason}"
          </div>
          
          <p style="color: #666; font-size: 14px; margin-top: 30px;">Received: ${new Date().toLocaleString()}</p>
        </div>
      </body>
      </html>
    `;

    const result = await sendEmail({
      from: 'ONEFORGE Volunteer <volunteer@your-domain.com>', // Use your verified domain
      to: process.env.WORK_EMAIL!,
      subject: `🙏 Volunteer: ${data.fullName}`,
      html,
      replyTo: data.email,
    });

    if (!result.success) {
      throw new Error('Failed to send email');
    }

    return NextResponse.json({ message: 'Application submitted' }, { status: 200 });
    
  } catch (error) {
    console.error('Volunteer form error:', error);
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 400 }
    );
  }
}