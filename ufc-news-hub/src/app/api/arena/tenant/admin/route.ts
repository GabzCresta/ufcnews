import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';
import { getUsuarioAtual } from '@/lib/arena/auth';

interface TenantAdminPayload {
  tenant: {
    id: string; slug: string; nome: string;
    logo_url: string | null;
    cor_primary: string; cor_accent: string;
    plano: string;
  };
  metrics: {
    total_membros: number;
    mau_30d: number;
    novos_7d: number;
    picks_semana: number;
  };
  top_membros: Array<{
    usuario_id: string; username: string; display_name: string | null;
    pontos_totais: number;
  }>;
  codigos_ativos: Array<{
    codigo: string; rotulo: string | null; usos: number; max_usos: number | null;
  }>;
}

// GET /api/arena/tenant/admin
// Returns the first tenant where the current Arena user is a tenant_admin.
// Podcasters use this to view their own dashboard — no admin PIN needed.
export async function GET(_request: NextRequest) {
  const usuario = await getUsuarioAtual();
  if (!usuario) return NextResponse.json({ error: 'Nao autenticado' }, { status: 401 });

  const adminOf = await queryOne<{ tenant_id: string }>(
    `SELECT tenant_id FROM tenant_membros
      WHERE usuario_id = $1 AND role = 'admin'
      ORDER BY entrou_em ASC LIMIT 1`,
    [usuario.id],
  );
  if (!adminOf) return NextResponse.json({ error: 'Voce nao administra nenhum tenant' }, { status: 403 });

  const tenantId = adminOf.tenant_id;
  const [tenant, metricsRow, topMembros, codigos] = await Promise.all([
    queryOne<{
      id: string; slug: string; nome: string; logo_url: string | null;
      cor_primary: string; cor_accent: string; plano: string;
    }>(
      `SELECT id, slug, nome, logo_url, cor_primary, cor_accent, plano::text AS plano
         FROM tenants WHERE id = $1 AND active = true`,
      [tenantId],
    ),
    queryOne<{ total_membros: number; mau_30d: number; novos_7d: number; picks_semana: number }>(
      `SELECT
         (SELECT COUNT(*)::int FROM tenant_membros WHERE tenant_id = $1) AS total_membros,
         (SELECT COUNT(DISTINCT p.usuario_id)::int
            FROM previsoes p JOIN tenant_membros tm ON tm.usuario_id = p.usuario_id
           WHERE tm.tenant_id = $1 AND p.created_at > NOW() - INTERVAL '30 days') AS mau_30d,
         (SELECT COUNT(*)::int FROM tenant_membros
           WHERE tenant_id = $1 AND entrou_em > NOW() - INTERVAL '7 days') AS novos_7d,
         (SELECT COUNT(*)::int
            FROM previsoes p JOIN tenant_membros tm ON tm.usuario_id = p.usuario_id
           WHERE tm.tenant_id = $1 AND p.created_at > NOW() - INTERVAL '7 days') AS picks_semana`,
      [tenantId],
    ),
    query<{
      usuario_id: string; username: string; display_name: string | null; pontos_totais: number;
    }>(
      `SELECT tm.usuario_id, u.username, u.display_name, u.pontos_totais
         FROM tenant_membros tm JOIN usuarios_arena u ON u.id = tm.usuario_id
        WHERE tm.tenant_id = $1
        ORDER BY u.pontos_totais DESC NULLS LAST LIMIT 10`,
      [tenantId],
    ),
    query<{ codigo: string; rotulo: string | null; usos: number; max_usos: number | null }>(
      `SELECT codigo, rotulo, usos, max_usos
         FROM tenant_codigos_convite
        WHERE tenant_id = $1 AND (expira_em IS NULL OR expira_em > NOW())
        ORDER BY created_at DESC LIMIT 20`,
      [tenantId],
    ),
  ]);

  if (!tenant) return NextResponse.json({ error: 'Tenant inativo' }, { status: 404 });

  const payload: TenantAdminPayload = {
    tenant,
    metrics: {
      total_membros: metricsRow?.total_membros ?? 0,
      mau_30d:       metricsRow?.mau_30d ?? 0,
      novos_7d:      metricsRow?.novos_7d ?? 0,
      picks_semana:  metricsRow?.picks_semana ?? 0,
    },
    top_membros: topMembros,
    codigos_ativos: codigos,
  };
  return NextResponse.json(payload, { headers: { 'Cache-Control': 'private, max-age=60' } });
}
