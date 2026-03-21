import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import {
  ensureMonitorTable,
  getLatestSnapshot,
  saveSnapshot,
  saveMonitorLog,
  getMonitorLogs,
  compareCards,
  type ScrapedFight,
  type CardSnapshot,
} from '@/lib/card-monitor';
import { sendCardChangeAlert } from '@/lib/card-monitor-email';

// ═══════════════════════════════════════════════════════════
// GET: Fetch monitor logs
// ═══════════════════════════════════════════════════════════

export async function GET(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    await ensureMonitorTable();
    const logs = await getMonitorLogs(30);
    return NextResponse.json({ logs });
  } catch (error) {
    console.error('[Card Monitor] GET error:', error);
    return NextResponse.json({ error: 'Erro ao buscar logs' }, { status: 500 });
  }
}

// ═══════════════════════════════════════════════════════════
// POST: Run a card check
// Body: { evento_nome: string, fights: ScrapedFight[] }
// Or:   { action: 'check', evento_nome: string, evento_url?: string }
// ═══════════════════════════════════════════════════════════

export async function POST(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    await ensureMonitorTable();

    const body = await request.json() as {
      action?: string;
      evento_nome: string;
      evento_data?: string;
      fights?: ScrapedFight[];
    };

    const { evento_nome, fights, evento_data } = body;

    if (!evento_nome) {
      return NextResponse.json({ error: 'evento_nome obrigatorio' }, { status: 400 });
    }

    // If fights are provided, save as new snapshot and compare
    if (fights && fights.length > 0) {
      const previousSnapshot = await getLatestSnapshot(evento_nome);

      const newSnapshot: CardSnapshot = {
        evento_nome,
        evento_data: evento_data || '',
        fights,
        scraped_at: new Date().toISOString(),
      };

      if (!previousSnapshot) {
        // First snapshot, just save
        await saveSnapshot(newSnapshot);
        await saveMonitorLog({
          evento_nome,
          checked_at: new Date().toISOString(),
          changes_detected: false,
          changes: [],
          status: 'ok',
        });

        return NextResponse.json({
          message: 'Primeiro snapshot salvo. Proximos checks vao comparar com este.',
          fights_count: fights.length,
          changes: [],
        });
      }

      // Compare with previous
      const changes = compareCards(previousSnapshot.fights, fights);

      // Save new snapshot
      await saveSnapshot(newSnapshot);

      // Log the check
      await saveMonitorLog({
        evento_nome,
        checked_at: new Date().toISOString(),
        changes_detected: changes.length > 0,
        changes,
        status: changes.length > 0 ? 'changes_detected' : 'ok',
      });

      // Send email alert if changes detected
      if (changes.length > 0) {
        const emailResult = await sendCardChangeAlert(evento_nome, changes);
        return NextResponse.json({
          message: `${changes.length} mudanca(s) detectada(s)`,
          changes,
          email_sent: emailResult.success,
          email_error: emailResult.error,
        });
      }

      return NextResponse.json({
        message: 'Nenhuma mudanca detectada',
        fights_count: fights.length,
        changes: [],
      });
    }

    return NextResponse.json(
      { error: 'Envie fights[] para comparar com o snapshot anterior' },
      { status: 400 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Card Monitor] POST error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
