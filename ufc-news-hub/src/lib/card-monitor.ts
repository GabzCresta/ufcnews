import { query, queryOne } from '@/lib/db';

// ═══════════════════════════════════════════════════════════
// Card Monitor: Detects changes in UFC event cards
// ═══════════════════════════════════════════════════════════

export interface ScrapedFight {
  fighter1: string;
  fighter2: string;
  weight_class: string;
  is_main_event?: boolean;
}

export interface CardSnapshot {
  evento_nome: string;
  evento_data: string;
  fights: ScrapedFight[];
  scraped_at: string;
}

export interface CardChange {
  type: 'fight_removed' | 'fight_added' | 'opponent_changed' | 'card_cancelled';
  description: string;
  fighter1?: string;
  fighter2?: string;
  old_value?: string;
  new_value?: string;
}

export interface MonitorLog {
  id: string;
  evento_nome: string;
  checked_at: string;
  changes_detected: boolean;
  changes: CardChange[];
  status: 'ok' | 'changes_detected' | 'error';
  error_message?: string;
}

// ═══════════════════════════════════════════════════════════
// DB Operations
// ═══════════════════════════════════════════════════════════

export async function ensureMonitorTable(): Promise<void> {
  await query(`
    CREATE TABLE IF NOT EXISTS card_monitor_logs (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      evento_nome TEXT NOT NULL,
      checked_at TIMESTAMPTZ DEFAULT NOW(),
      changes_detected BOOLEAN DEFAULT FALSE,
      changes JSONB DEFAULT '[]'::jsonb,
      status TEXT DEFAULT 'ok',
      error_message TEXT,
      snapshot JSONB
    )
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS card_snapshots (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      evento_nome TEXT NOT NULL,
      evento_data TEXT,
      fights JSONB NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      is_latest BOOLEAN DEFAULT TRUE
    )
  `);
}

export async function saveSnapshot(snapshot: CardSnapshot): Promise<void> {
  // Mark previous snapshots as not latest
  await query(
    'UPDATE card_snapshots SET is_latest = FALSE WHERE evento_nome = $1',
    [snapshot.evento_nome]
  );

  await query(
    `INSERT INTO card_snapshots (evento_nome, evento_data, fights, is_latest)
     VALUES ($1, $2, $3, TRUE)`,
    [snapshot.evento_nome, snapshot.evento_data, JSON.stringify(snapshot.fights)]
  );
}

export async function getLatestSnapshot(eventoNome: string): Promise<CardSnapshot | null> {
  const row = await queryOne<{
    evento_nome: string;
    evento_data: string;
    fights: ScrapedFight[];
    created_at: string;
  }>(
    'SELECT evento_nome, evento_data, fights, created_at FROM card_snapshots WHERE evento_nome = $1 AND is_latest = TRUE',
    [eventoNome]
  );

  if (!row) return null;

  return {
    evento_nome: row.evento_nome,
    evento_data: row.evento_data,
    fights: row.fights,
    scraped_at: row.created_at,
  };
}

export async function saveMonitorLog(log: Omit<MonitorLog, 'id'>): Promise<void> {
  await query(
    `INSERT INTO card_monitor_logs (evento_nome, checked_at, changes_detected, changes, status, error_message)
     VALUES ($1, NOW(), $2, $3, $4, $5)`,
    [
      log.evento_nome,
      log.changes_detected,
      JSON.stringify(log.changes),
      log.status,
      log.error_message || null,
    ]
  );
}

export async function getMonitorLogs(limit = 20): Promise<MonitorLog[]> {
  return query<MonitorLog>(
    'SELECT id, evento_nome, checked_at, changes_detected, changes, status, error_message FROM card_monitor_logs ORDER BY checked_at DESC LIMIT $1',
    [limit]
  );
}

// ═══════════════════════════════════════════════════════════
// Card Comparison
// ═══════════════════════════════════════════════════════════

function normalizeName(name: string): string {
  return name.toLowerCase().trim().replace(/[^a-z\s]/g, '');
}

function fightsMatch(a: ScrapedFight, b: ScrapedFight): boolean {
  const a1 = normalizeName(a.fighter1);
  const a2 = normalizeName(a.fighter2);
  const b1 = normalizeName(b.fighter1);
  const b2 = normalizeName(b.fighter2);

  return (a1 === b1 && a2 === b2) || (a1 === b2 && a2 === b1);
}

function findFightByFighter(fights: ScrapedFight[], fighterName: string): ScrapedFight | undefined {
  const normalized = normalizeName(fighterName);
  return fights.find(
    (f) => normalizeName(f.fighter1) === normalized || normalizeName(f.fighter2) === normalized
  );
}

export function compareCards(previous: ScrapedFight[], current: ScrapedFight[]): CardChange[] {
  const changes: CardChange[] = [];

  // Check for removed fights
  for (const prevFight of previous) {
    const stillExists = current.some((f) => fightsMatch(f, prevFight));
    if (!stillExists) {
      // Check if one fighter got a new opponent
      const f1InNew = findFightByFighter(current, prevFight.fighter1);
      const f2InNew = findFightByFighter(current, prevFight.fighter2);

      if (f1InNew && !fightsMatch(f1InNew, prevFight)) {
        const newOpponent = normalizeName(f1InNew.fighter1) === normalizeName(prevFight.fighter1)
          ? f1InNew.fighter2
          : f1InNew.fighter1;
        changes.push({
          type: 'opponent_changed',
          description: `${prevFight.fighter1} agora enfrenta ${newOpponent} (antes: ${prevFight.fighter2})`,
          fighter1: prevFight.fighter1,
          old_value: prevFight.fighter2,
          new_value: newOpponent,
        });
      } else if (f2InNew && !fightsMatch(f2InNew, prevFight)) {
        const newOpponent = normalizeName(f2InNew.fighter1) === normalizeName(prevFight.fighter2)
          ? f2InNew.fighter2
          : f2InNew.fighter1;
        changes.push({
          type: 'opponent_changed',
          description: `${prevFight.fighter2} agora enfrenta ${newOpponent} (antes: ${prevFight.fighter1})`,
          fighter1: prevFight.fighter2,
          old_value: prevFight.fighter1,
          new_value: newOpponent,
        });
      } else {
        changes.push({
          type: 'fight_removed',
          description: `${prevFight.fighter1} vs ${prevFight.fighter2} foi removida do card`,
          fighter1: prevFight.fighter1,
          fighter2: prevFight.fighter2,
        });
      }
    }
  }

  // Check for added fights (that aren't opponent changes already detected)
  for (const currFight of current) {
    const existedBefore = previous.some((f) => fightsMatch(f, currFight));
    if (!existedBefore) {
      const alreadyHandled = changes.some(
        (c) =>
          c.type === 'opponent_changed' &&
          (c.new_value === currFight.fighter1 ||
            c.new_value === currFight.fighter2 ||
            c.fighter1 === currFight.fighter1 ||
            c.fighter1 === currFight.fighter2)
      );
      if (!alreadyHandled) {
        changes.push({
          type: 'fight_added',
          description: `${currFight.fighter1} vs ${currFight.fighter2} foi adicionada ao card`,
          fighter1: currFight.fighter1,
          fighter2: currFight.fighter2,
        });
      }
    }
  }

  return changes;
}
