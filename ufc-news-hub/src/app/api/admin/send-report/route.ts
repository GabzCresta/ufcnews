import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { requireAdmin } from '@/lib/admin-sessions';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const body = await request.json() as { to: string; subject: string; text: string; html?: string };

    const { data, error } = await resend.emails.send({
      from: 'CRENAS <onboarding@resend.dev>',
      to: body.to,
      subject: body.subject,
      text: body.text,
      html: body.html,
    });

    if (error) {
      console.error('[Send Report] Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('[Send Report] Error:', error);
    return NextResponse.json({ error: 'Erro ao enviar email' }, { status: 500 });
  }
}
