import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';
import { requireAdmin } from '@/lib/admin-sessions';
import { randomBytes } from 'crypto';

interface RouteCtx { params: Promise<{ id: string }> }

function genCodigo(prefix: string | null = null): string {
  const rnd = randomBytes(4).toString('hex').toUpperCase();
  return prefix ? `${prefix.slice(0, 10).toUpperCase()}${rnd.slice(-4)}` : rnd;
}

// POST /api/admin/tenants/[id]/codigos — create invite code(s)
export async function POST(request: NextRequest, { params }: RouteCtx) {
  const err = requireAdmin(request);
  if (err) return err;
  const { id: tenantId } = await params;

  const body = await request.json().catch(() => ({})) as {
    rotulo?: string;
    max_usos?: number | null;
    expira_em?: string | null;
    quantidade?: number;
    prefix?: string | null;
  };
  const qty = Math.max(1, Math.min(500, body.quantidade ?? 1));

  const created: Array<{ id: string; codigo: string }> = [];
  for (let n = 0; n < qty; n++) {
    let attempts = 0;
    while (attempts < 5) {
      const codigo = genCodigo(body.prefix ?? null);
      try {
        const row = await queryOne<{ id: string }>(
          `INSERT INTO tenant_codigos_convite (tenant_id, codigo, rotulo, max_usos, expira_em)
           VALUES ($1, $2, $3, $4, $5)
           RETURNING id`,
          [tenantId, codigo, body.rotulo ?? null, body.max_usos ?? null, body.expira_em ?? null],
        );
        if (row) created.push({ id: row.id, codigo });
        break;
      } catch {
        attempts++;
      }
    }
  }
  return NextResponse.json({ ok: true, created }, { status: 201 });
}

// DELETE /api/admin/tenants/[id]/codigos?codigo_id=X — revoke
export async function DELETE(request: NextRequest, { params }: RouteCtx) {
  const err = requireAdmin(request);
  if (err) return err;
  const { id: tenantId } = await params;
  const url = new URL(request.url);
  const codigoId = url.searchParams.get('codigo_id');
  if (!codigoId) return NextResponse.json({ error: 'codigo_id obrigatorio' }, { status: 400 });
  await query(`DELETE FROM tenant_codigos_convite WHERE id = $1 AND tenant_id = $2`, [codigoId, tenantId]);
  return NextResponse.json({ ok: true });
}
