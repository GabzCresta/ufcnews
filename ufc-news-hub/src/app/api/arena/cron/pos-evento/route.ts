import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';
import { processarEventoFinalizado } from '@/lib/arena/pontuacao';

// ═══════════════════════════════════════════════════════════
// Cron: Post-event finalization + summary email
// Runs Sunday 10h UTC via VPS cron
// ═══════════════════════════════════════════════════════════

interface LeaderboardRow {
  username: string;
  display_name: string | null;
  pontos_totais: number;
  acertos: number;
  total_lutas: number;
  card_perfeito: boolean;
}

interface EventoParaFinalizar {
  id: string;
  nome: string;
  total_lutas: number;
}

function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader === `Bearer ${cronSecret}`) {
    return true;
  }

  return false;
}

function buildEmailHtml(
  eventoNome: string,
  totalLutas: number,
  top5: LeaderboardRow[],
  totalParticipantes: number,
): string {
  const leaderboardRows = top5
    .map((row, i) => {
      const medal = i === 0 ? '&#127942;' : i === 1 ? '&#129352;' : i === 2 ? '&#129353;' : '';
      const cardPerfeito = row.card_perfeito ? ' &#11088;' : '';
      const displayName = row.display_name || row.username;
      return `
        <tr style="border-bottom: 1px solid #1a1a2e;">
          <td style="padding: 12px 16px; color: ${i < 3 ? '#D4AF37' : '#a0a0b0'}; font-weight: bold; font-size: 18px;">
            ${medal} ${i + 1}
          </td>
          <td style="padding: 12px 16px; color: #e0e0e0; font-size: 15px;">
            ${displayName}${cardPerfeito}
          </td>
          <td style="padding: 12px 16px; color: #D4AF37; font-weight: bold; text-align: right; font-size: 16px;">
            ${row.pontos_totais} pts
          </td>
          <td style="padding: 12px 16px; color: #a0a0b0; text-align: right; font-size: 14px;">
            ${row.acertos}/${row.total_lutas}
          </td>
        </tr>`;
    })
    .join('');

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin: 0; padding: 0; background-color: #050505; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">

    <!-- Header -->
    <div style="background: linear-gradient(135deg, #D20A0A 0%, #8B0000 100%); border-radius: 12px 12px 0 0; padding: 32px 24px; text-align: center;">
      <h1 style="margin: 0; color: #ffffff; font-size: 28px; letter-spacing: 2px; text-transform: uppercase;">
        UFC News Hub
      </h1>
      <p style="margin: 8px 0 0; color: rgba(255,255,255,0.85); font-size: 14px; letter-spacing: 1px;">
        ARENA - RESULTADO FINAL
      </p>
    </div>

    <!-- Event Info -->
    <div style="background-color: #0A0A0A; padding: 24px; border-left: 1px solid #1a1a2e; border-right: 1px solid #1a1a2e;">
      <h2 style="margin: 0 0 8px; color: #D20A0A; font-size: 22px; text-transform: uppercase;">
        ${eventoNome}
      </h2>
      <div style="display: flex; gap: 24px; margin-top: 16px;">
        <div style="background-color: #111118; border-radius: 8px; padding: 16px 20px; flex: 1; text-align: center;">
          <div style="color: #D4AF37; font-size: 28px; font-weight: bold;">${totalLutas}</div>
          <div style="color: #a0a0b0; font-size: 12px; text-transform: uppercase; margin-top: 4px;">Lutas</div>
        </div>
        <div style="background-color: #111118; border-radius: 8px; padding: 16px 20px; flex: 1; text-align: center;">
          <div style="color: #D4AF37; font-size: 28px; font-weight: bold;">${totalParticipantes}</div>
          <div style="color: #a0a0b0; font-size: 12px; text-transform: uppercase; margin-top: 4px;">Participantes</div>
        </div>
      </div>
    </div>

    <!-- Leaderboard -->
    <div style="background-color: #0A0A0A; padding: 0 24px 24px; border-left: 1px solid #1a1a2e; border-right: 1px solid #1a1a2e;">
      <h3 style="color: #D4AF37; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px; padding-top: 8px; border-top: 1px solid #1a1a2e;">
        Top 5 Ranking
      </h3>
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="border-bottom: 2px solid #D20A0A;">
            <th style="padding: 8px 16px; color: #a0a0b0; text-align: left; font-size: 11px; text-transform: uppercase;">#</th>
            <th style="padding: 8px 16px; color: #a0a0b0; text-align: left; font-size: 11px; text-transform: uppercase;">Usuario</th>
            <th style="padding: 8px 16px; color: #a0a0b0; text-align: right; font-size: 11px; text-transform: uppercase;">Pontos</th>
            <th style="padding: 8px 16px; color: #a0a0b0; text-align: right; font-size: 11px; text-transform: uppercase;">Acertos</th>
          </tr>
        </thead>
        <tbody>
          ${leaderboardRows || '<tr><td colspan="4" style="padding: 16px; color: #a0a0b0; text-align: center;">Nenhum participante</td></tr>'}
        </tbody>
      </table>
    </div>

    <!-- Footer -->
    <div style="background-color: #111118; border-radius: 0 0 12px 12px; padding: 16px 24px; text-align: center; border: 1px solid #1a1a2e; border-top: none;">
      <p style="margin: 0; color: #666; font-size: 12px;">
        Enviado automaticamente pelo UFC News Hub Arena
      </p>
    </div>

  </div>
</body>
</html>`;
}

async function sendSummaryEmail(
  eventoNome: string,
  totalLutas: number,
  top5: LeaderboardRow[],
  totalParticipantes: number,
): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('[POS-EVENTO] RESEND_API_KEY not configured, skipping email');
    return false;
  }

  const recipients = (process.env.CARD_MONITOR_EMAILS || 'paulocesarjnasr@gmail.com')
    .split(',')
    .map((e) => e.trim())
    .filter(Boolean);

  const html = buildEmailHtml(eventoNome, totalLutas, top5, totalParticipantes);

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'UFC News Hub <noreply@ufcnewshub.com>',
      to: recipients,
      subject: `Arena Resultado: ${eventoNome}`,
      html,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('[POS-EVENTO] Resend error:', error);
    return false;
  }

  return true;
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  console.log(`[POS-EVENTO] Iniciando - ${new Date().toISOString()}`);

  try {
    // ═══════════════════════════════════════════════════════════
    // Step 1: Find ao_vivo events where ALL fights are finalized
    // ═══════════════════════════════════════════════════════════
    const eventosParaFinalizar = await query<EventoParaFinalizar>(
      `SELECT e.id, e.nome, COUNT(l.id)::int as total_lutas
       FROM eventos e
       JOIN lutas l ON l.evento_id = e.id
       WHERE e.status = 'ao_vivo'
         AND NOT EXISTS (
           SELECT 1 FROM lutas l2
           WHERE l2.evento_id = e.id AND l2.status != 'finalizada'
         )
       GROUP BY e.id, e.nome`
    );

    if (eventosParaFinalizar.length === 0) {
      console.log('[POS-EVENTO] Nenhum evento ao_vivo para finalizar');
      return NextResponse.json(
        { success: true, message: 'Nenhum evento para finalizar', eventos: [] },
        { headers: { 'Cache-Control': 'no-store' } },
      );
    }

    const resultados = [];

    for (const evento of eventosParaFinalizar) {
      console.log(`[POS-EVENTO] Finalizando: ${evento.nome}`);

      // ═══════════════════════════════════════════════════════════
      // Step 2: Mark event as finalizado
      // ═══════════════════════════════════════════════════════════
      await query(
        `UPDATE eventos SET status = 'finalizado' WHERE id = $1`,
        [evento.id],
      );

      // ═══════════════════════════════════════════════════════════
      // Step 3: Final scoring pass
      // ═══════════════════════════════════════════════════════════
      const scoring = await processarEventoFinalizado(evento.id);
      console.log(
        `[POS-EVENTO] ${evento.nome}: ${scoring.previsoesProcessadas} previsoes, ` +
        `${scoring.pontosDistribuidos} pontos, ${scoring.conquistasDesbloqueadas} conquistas`,
      );

      // ═══════════════════════════════════════════════════════════
      // Step 4: Get top 5 leaderboard
      // ═══════════════════════════════════════════════════════════
      const top5 = await query<LeaderboardRow>(
        `SELECT u.username, u.display_name, ep.pontos_totais, ep.acertos,
                ep.total_lutas, COALESCE(ep.card_perfeito, false) as card_perfeito
         FROM evento_pontuacao ep
         JOIN usuarios_arena u ON u.id = ep.usuario_id
         WHERE ep.evento_id = $1
         ORDER BY ep.pontos_totais DESC
         LIMIT 5`,
        [evento.id],
      );

      const totalParticipantes = await queryOne<{ count: number }>(
        `SELECT COUNT(*)::int as count FROM evento_pontuacao WHERE evento_id = $1`,
        [evento.id],
      );

      const participantes = totalParticipantes?.count ?? 0;

      // ═══════════════════════════════════════════════════════════
      // Step 5: Send summary email
      // ═══════════════════════════════════════════════════════════
      const emailSent = await sendSummaryEmail(
        evento.nome,
        evento.total_lutas,
        top5,
        participantes,
      );

      console.log(`[POS-EVENTO] ${evento.nome}: email ${emailSent ? 'enviado' : 'falhou/skipped'}`);

      resultados.push({
        evento_id: evento.id,
        evento_nome: evento.nome,
        total_lutas: evento.total_lutas,
        participantes,
        top5: top5.map((r) => ({ username: r.username, pontos: r.pontos_totais })),
        scoring,
        email_sent: emailSent,
      });
    }

    return NextResponse.json(
      { success: true, eventos: resultados },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  } catch (error) {
    console.error('[POS-EVENTO] Erro:', error);
    return NextResponse.json(
      {
        error: 'Erro ao finalizar eventos',
        details: error instanceof Error ? error.message : 'Unknown',
      },
      { status: 500 },
    );
  }
}
