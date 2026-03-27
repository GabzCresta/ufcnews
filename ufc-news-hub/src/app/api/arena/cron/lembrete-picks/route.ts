import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';

const RESEND_API_URL = 'https://api.resend.com/emails/batch';
const MAX_EMAILS = 100;
const BATCH_SIZE = 10;

interface ProximoEvento {
  id: string;
  nome: string;
  data_evento: Date;
  total_lutas: number;
}

interface UsuarioSemPick {
  id: string;
  username: string;
  email: string;
  display_name: string | null;
}

function formatarData(date: Date): string {
  const meses = [
    'Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
  ];
  const d = new Date(date);
  return `${d.getUTCDate()} de ${meses[d.getUTCMonth()]}, ${d.getUTCFullYear()}`;
}

function gerarEmailHtml(
  nome: string,
  eventoNome: string,
  eventoData: string,
  totalLutas: number,
  eventoId: string,
): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ufcnewshub.com';
  const link = `${baseUrl}/arena/evento/${eventoId}`;

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#0A0A0A;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0A0A;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#1A1A1A;border-radius:12px;overflow:hidden;">
        <tr>
          <td style="background:#D20A0A;padding:24px 32px;">
            <h1 style="margin:0;color:#FFFFFF;font-size:24px;font-family:'Bebas Neue',Arial,sans-serif;letter-spacing:1px;">
              UFC NEWS HUB ARENA
            </h1>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <p style="color:#E5E5E5;font-size:16px;margin:0 0 8px;">
              Fala, <strong style="color:#FFFFFF;">${nome}</strong>!
            </p>
            <p style="color:#A3A3A3;font-size:14px;margin:0 0 24px;">
              O <strong style="color:#FFFFFF;">${eventoNome}</strong> esta chegando e voce ainda nao fez suas previsoes!
            </p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0A0A;border-radius:8px;margin-bottom:24px;">
              <tr>
                <td style="padding:20px;">
                  <p style="color:#D20A0A;font-size:12px;text-transform:uppercase;letter-spacing:2px;margin:0 0 8px;">Evento</p>
                  <p style="color:#FFFFFF;font-size:18px;font-weight:bold;margin:0 0 16px;">${eventoNome}</p>
                  <p style="color:#D20A0A;font-size:12px;text-transform:uppercase;letter-spacing:2px;margin:0 0 8px;">Data</p>
                  <p style="color:#FFFFFF;font-size:16px;margin:0 0 16px;">${eventoData}</p>
                  <p style="color:#D20A0A;font-size:12px;text-transform:uppercase;letter-spacing:2px;margin:0 0 8px;">Lutas disponiveis</p>
                  <p style="color:#FFFFFF;font-size:16px;margin:0;">${totalLutas} lutas</p>
                </td>
              </tr>
            </table>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr><td align="center">
                <a href="${link}" style="display:inline-block;background:#D20A0A;color:#FFFFFF;text-decoration:none;padding:14px 40px;border-radius:8px;font-size:16px;font-weight:bold;letter-spacing:0.5px;">
                  Faca suas previsoes!
                </a>
              </td></tr>
            </table>
            <p style="color:#525252;font-size:12px;margin:24px 0 0;text-align:center;">
              Nao quer mais receber lembretes? Desative notificacoes no seu perfil da Arena.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();
}

async function enviarBatchResend(
  emails: Array<{ from: string; to: string; subject: string; html: string }>,
): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { success: false, error: 'RESEND_API_KEY not configured' };
  }

  const res = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emails),
  });

  if (!res.ok) {
    const body = await res.text();
    return { success: false, error: `Resend ${res.status}: ${body}` };
  }

  return { success: true };
}

export async function GET(request: NextRequest) {
  // ═══════════════════════════════════════════════════════════════
  // AUTH: CRON_SECRET or Vercel Cron user-agent
  // ═══════════════════════════════════════════════════════════════
  const authHeader = request.headers.get('authorization');
  const userAgent = request.headers.get('user-agent') || '';
  const cronSecret = process.env.CRON_SECRET;

  const isVercelCron = userAgent.includes('vercel-cron');
  const isValidToken = cronSecret && authHeader === `Bearer ${cronSecret}`;

  if (!isVercelCron && !isValidToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  console.log(`[LEMBRETE-PICKS] Iniciando - ${new Date().toISOString()}`);

  try {
    // ═══════════════════════════════════════════════════════════════
    // 1. Find next event within 7 days
    // ═══════════════════════════════════════════════════════════════
    const evento = await queryOne<ProximoEvento>(
      `SELECT e.id, e.nome, e.data_evento,
              COUNT(l.id)::int AS total_lutas
       FROM eventos e
       LEFT JOIN lutas l ON l.evento_id = e.id
       WHERE e.status = 'agendado'
         AND e.data_evento BETWEEN NOW() AND NOW() + INTERVAL '7 days'
       GROUP BY e.id, e.nome, e.data_evento
       ORDER BY e.data_evento ASC
       LIMIT 1`,
    );

    if (!evento) {
      console.log('[LEMBRETE-PICKS] Nenhum evento agendado nos proximos 7 dias');
      return NextResponse.json(
        { success: true, message: 'Nenhum evento proximo', notificados: 0 },
        { headers: { 'Cache-Control': 'no-store' } },
      );
    }

    if (evento.total_lutas === 0) {
      console.log(`[LEMBRETE-PICKS] Evento ${evento.nome} sem lutas cadastradas`);
      return NextResponse.json(
        { success: true, message: 'Evento sem lutas', evento: evento.nome, notificados: 0 },
        { headers: { 'Cache-Control': 'no-store' } },
      );
    }

    console.log(`[LEMBRETE-PICKS] Evento: ${evento.nome} (${evento.total_lutas} lutas)`);

    // ═══════════════════════════════════════════════════════════════
    // 2. Find users with notifications ON who have NO predictions
    // ═══════════════════════════════════════════════════════════════
    const usuarios = await query<UsuarioSemPick>(
      `SELECT u.id, u.username, u.email, u.display_name
       FROM usuarios_arena u
       WHERE u.email IS NOT NULL
         AND u.notificacoes_ativas = true
         AND NOT EXISTS (
           SELECT 1 FROM previsoes p
           WHERE p.usuario_id = u.id
             AND p.evento_id = $1
         )
       ORDER BY u.created_at ASC
       LIMIT $2`,
      [evento.id, MAX_EMAILS],
    );

    if (usuarios.length === 0) {
      console.log('[LEMBRETE-PICKS] Todos os usuarios ja fizeram previsoes (ou nenhum elegivel)');
      return NextResponse.json(
        { success: true, message: 'Nenhum usuario para notificar', evento: evento.nome, notificados: 0 },
        { headers: { 'Cache-Control': 'no-store' } },
      );
    }

    console.log(`[LEMBRETE-PICKS] ${usuarios.length} usuarios para notificar`);

    // ═══════════════════════════════════════════════════════════════
    // 3. Send emails in batches of 10
    // ═══════════════════════════════════════════════════════════════
    const eventoData = formatarData(evento.data_evento);
    const fromAddress = 'Arena <arena@ufcnewshub.com>';
    const subject = `${evento.nome} - Faca suas previsoes!`;

    let totalEnviados = 0;
    let totalErros = 0;

    for (let i = 0; i < usuarios.length; i += BATCH_SIZE) {
      const batch = usuarios.slice(i, i + BATCH_SIZE);

      const emails = batch.map((u) => ({
        from: fromAddress,
        to: u.email,
        subject,
        html: gerarEmailHtml(
          u.display_name || u.username,
          evento.nome,
          eventoData,
          evento.total_lutas,
          evento.id,
        ),
      }));

      const result = await enviarBatchResend(emails);

      if (result.success) {
        totalEnviados += batch.length;
        console.log(`[LEMBRETE-PICKS] Batch ${Math.floor(i / BATCH_SIZE) + 1} enviado (${batch.length} emails)`);
      } else {
        totalErros += batch.length;
        console.error(`[LEMBRETE-PICKS] Batch ${Math.floor(i / BATCH_SIZE) + 1} falhou: ${result.error}`);
      }
    }

    console.log(`[LEMBRETE-PICKS] Concluido: ${totalEnviados} enviados, ${totalErros} erros`);

    return NextResponse.json(
      {
        success: true,
        evento: evento.nome,
        notificados: totalEnviados,
        erros: totalErros,
      },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  } catch (error) {
    console.error('[LEMBRETE-PICKS] Erro:', error);
    return NextResponse.json(
      {
        error: 'Erro ao enviar lembretes',
        details: error instanceof Error ? error.message : 'Unknown',
      },
      { status: 500 },
    );
  }
}
