import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne, transaction } from '@/lib/db';
import { getUsuarioAtual } from '@/lib/arena/auth';

interface TenantRow {
  id: string;
  slug: string;
  nome: string;
  logo_url: string | null;
  cor_primary: string;
  cor_accent: string;
  plano: string;
  max_membros: number | null;
}

// POST /api/arena/tenant/join { codigo }
// Idempotent: calling twice with same user+code is a no-op.
export async function POST(request: NextRequest) {
  const usuario = await getUsuarioAtual();
  if (!usuario) {
    return NextResponse.json({ error: 'Nao autenticado' }, { status: 401 });
  }

  const body = (await request.json().catch(() => ({}))) as { codigo?: string };
  const codigo = typeof body.codigo === 'string' ? body.codigo.trim().toUpperCase() : '';
  if (!codigo) {
    return NextResponse.json({ error: 'Codigo obrigatorio' }, { status: 400 });
  }

  const cod = await queryOne<{
    id: string;
    tenant_id: string;
    max_usos: number | null;
    usos: number;
    expira_em: string | null;
  }>(
    `SELECT id, tenant_id, max_usos, usos, expira_em
       FROM tenant_codigos_convite WHERE codigo = $1`,
    [codigo],
  );

  if (!cod) {
    return NextResponse.json({ error: 'Codigo invalido' }, { status: 404 });
  }
  if (cod.expira_em && new Date(cod.expira_em) < new Date()) {
    return NextResponse.json({ error: 'Codigo expirado' }, { status: 410 });
  }
  if (cod.max_usos != null && cod.usos >= cod.max_usos) {
    return NextResponse.json({ error: 'Codigo esgotado' }, { status: 410 });
  }

  const tenant = await queryOne<TenantRow>(
    `SELECT id, slug, nome, logo_url, cor_primary, cor_accent, plano::text AS plano, max_membros
       FROM tenants WHERE id = $1 AND active = true`,
    [cod.tenant_id],
  );
  if (!tenant) {
    return NextResponse.json({ error: 'Tenant inativo' }, { status: 404 });
  }

  if (tenant.max_membros != null) {
    const countRow = await queryOne<{ count: number }>(
      `SELECT COUNT(*)::int AS count FROM tenant_membros WHERE tenant_id = $1`,
      [tenant.id],
    );
    if (countRow && countRow.count >= tenant.max_membros) {
      return NextResponse.json({ error: 'Tenant cheio' }, { status: 409 });
    }
  }

  // Transactional join: insert membro, bump code usage, set tenant_ativo_id.
  // UNIQUE(tenant_id, usuario_id) makes it idempotent.
  try {
    await transaction(async (tx) => {
      const { rowCount } = await tx.query(
        `INSERT INTO tenant_membros (tenant_id, usuario_id, codigo_usado, fonte)
         VALUES ($1, $2, $3, 'invite_code')
         ON CONFLICT (tenant_id, usuario_id) DO NOTHING`,
        [tenant.id, usuario.id, cod.id],
      );
      if ((rowCount ?? 0) > 0) {
        await tx.query(
          `UPDATE tenant_codigos_convite SET usos = usos + 1 WHERE id = $1`,
          [cod.id],
        );
      }
      await tx.query(
        `UPDATE usuarios_arena SET tenant_ativo_id = $1 WHERE id = $2 AND tenant_ativo_id IS DISTINCT FROM $1`,
        [tenant.id, usuario.id],
      );
    });
  } catch (err) {
    console.error('[tenant/join] db error', err);
    return NextResponse.json({ error: 'Erro ao entrar no tenant' }, { status: 500 });
  }

  const response = NextResponse.json({ ok: true, tenant });
  // Mirror tenant into a cookie so the RT socket handshake can read it
  response.cookies.set('tenant_ativo_id', tenant.id, {
    httpOnly: false,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  });
  return response;
}

// GET returns the current user's tenant (for useTenant hook)
export async function GET() {
  const usuario = await getUsuarioAtual();
  if (!usuario) return NextResponse.json({ tenant: null });

  const tenant = await queryOne<TenantRow>(
    `SELECT t.id, t.slug, t.nome, t.logo_url, t.cor_primary, t.cor_accent, t.plano::text AS plano, t.max_membros
       FROM tenants t
       JOIN usuarios_arena u ON u.tenant_ativo_id = t.id
      WHERE u.id = $1 AND t.active = true`,
    [usuario.id],
  );

  return NextResponse.json({ tenant: tenant ?? null }, {
    headers: { 'Cache-Control': 'private, max-age=60' },
  });
}
