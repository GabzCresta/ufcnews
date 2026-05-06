import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';
import { requireAdmin } from '@/lib/admin-sessions';

interface RouteCtx { params: Promise<{ id: string }> }

// GET /api/admin/tenants/[id] — details + metrics
export async function GET(request: NextRequest, { params }: RouteCtx) {
  const err = requireAdmin(request);
  if (err) return err;
  const { id } = await params;

  const [tenant, membros, codigos, mauRow] = await Promise.all([
    queryOne<Record<string, unknown>>(
      `SELECT id, slug, nome, logo_url, cor_primary, cor_accent, plano::text AS plano,
              max_membros, active, created_at
         FROM tenants WHERE id = $1`,
      [id],
    ),
    query<{
      usuario_id: string; username: string; display_name: string | null;
      entrou_em: string; pontos_totais: number;
    }>(
      `SELECT tm.usuario_id, u.username, u.display_name, tm.entrou_em, u.pontos_totais
         FROM tenant_membros tm
         JOIN usuarios_arena u ON u.id = tm.usuario_id
        WHERE tm.tenant_id = $1
        ORDER BY tm.entrou_em DESC
        LIMIT 100`,
      [id],
    ),
    query<{
      id: string; codigo: string; rotulo: string | null; max_usos: number | null;
      usos: number; expira_em: string | null; created_at: string;
    }>(
      `SELECT id, codigo, rotulo, max_usos, usos, expira_em, created_at
         FROM tenant_codigos_convite WHERE tenant_id = $1
        ORDER BY created_at DESC`,
      [id],
    ),
    queryOne<{ mau: number }>(
      `SELECT COUNT(DISTINCT p.usuario_id)::int AS mau
         FROM previsoes p
         JOIN tenant_membros tm ON tm.usuario_id = p.usuario_id
        WHERE tm.tenant_id = $1 AND p.created_at > NOW() - INTERVAL '30 days'`,
      [id],
    ),
  ]);

  if (!tenant) return NextResponse.json({ error: 'Tenant nao encontrado' }, { status: 404 });

  return NextResponse.json(
    { tenant, membros, codigos, metrics: { mau: mauRow?.mau ?? 0, total_membros: membros.length } },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}

// PATCH /api/admin/tenants/[id] — update fields
export async function PATCH(request: NextRequest, { params }: RouteCtx) {
  const err = requireAdmin(request);
  if (err) return err;
  const { id } = await params;

  const body = await request.json().catch(() => ({})) as Record<string, unknown>;
  const allowed: Record<string, string> = {
    nome: 'nome', logo_url: 'logo_url', cor_primary: 'cor_primary',
    cor_accent: 'cor_accent', plano: 'plano', max_membros: 'max_membros', active: 'active',
  };
  const sets: string[] = [];
  const vals: unknown[] = [];
  let i = 1;
  for (const [key, col] of Object.entries(allowed)) {
    if (key in body) {
      const val = body[key];
      if (key === 'plano' && typeof val === 'string') {
        sets.push(`${col} = $${i}::tenant_plano`);
      } else {
        sets.push(`${col} = $${i}`);
      }
      vals.push(val);
      i++;
    }
  }
  if (sets.length === 0) return NextResponse.json({ error: 'nada pra atualizar' }, { status: 400 });
  sets.push(`updated_at = NOW()`);
  vals.push(id);

  await query(`UPDATE tenants SET ${sets.join(', ')} WHERE id = $${i}`, vals);
  return NextResponse.json({ ok: true });
}

// DELETE /api/admin/tenants/[id] — soft delete (active=false)
export async function DELETE(request: NextRequest, { params }: RouteCtx) {
  const err = requireAdmin(request);
  if (err) return err;
  const { id } = await params;
  await query(`UPDATE tenants SET active = false, updated_at = NOW() WHERE id = $1`, [id]);
  return NextResponse.json({ ok: true });
}
