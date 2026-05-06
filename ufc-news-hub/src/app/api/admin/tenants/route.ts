import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';
import { requireAdmin } from '@/lib/admin-sessions';

interface TenantRow {
  id: string;
  slug: string;
  nome: string;
  logo_url: string | null;
  cor_primary: string;
  cor_accent: string;
  plano: string;
  max_membros: number | null;
  active: boolean;
  created_at: string;
  total_membros: number;
  total_codigos: number;
}

function slugify(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '').slice(0, 64);
}

// GET /api/admin/tenants — list all tenants with counts
export async function GET(request: NextRequest) {
  const err = requireAdmin(request);
  if (err) return err;

  const rows = await query<TenantRow>(
    `SELECT t.id, t.slug, t.nome, t.logo_url, t.cor_primary, t.cor_accent,
            t.plano::text AS plano, t.max_membros, t.active, t.created_at,
            COALESCE((SELECT COUNT(*) FROM tenant_membros WHERE tenant_id = t.id), 0)::int AS total_membros,
            COALESCE((SELECT COUNT(*) FROM tenant_codigos_convite WHERE tenant_id = t.id), 0)::int AS total_codigos
       FROM tenants t
      ORDER BY t.created_at DESC`,
  );
  return NextResponse.json({ tenants: rows }, { headers: { 'Cache-Control': 'no-store' } });
}

// POST /api/admin/tenants — create new tenant
export async function POST(request: NextRequest) {
  const err = requireAdmin(request);
  if (err) return err;

  const body = await request.json().catch(() => ({})) as {
    nome?: string;
    slug?: string;
    logo_url?: string;
    cor_primary?: string;
    cor_accent?: string;
    plano?: string;
    max_membros?: number | null;
  };

  const nome = (body.nome ?? '').trim();
  if (!nome) return NextResponse.json({ error: 'nome obrigatorio' }, { status: 400 });
  const slug = slugify(body.slug || nome);
  if (!slug) return NextResponse.json({ error: 'slug invalido' }, { status: 400 });

  const existing = await queryOne<{ id: string }>(`SELECT id FROM tenants WHERE slug = $1`, [slug]);
  if (existing) return NextResponse.json({ error: 'slug ja existe' }, { status: 409 });

  const plano = (body.plano ?? 'free');
  const tenant = await queryOne<{ id: string }>(
    `INSERT INTO tenants (slug, nome, logo_url, cor_primary, cor_accent, plano, max_membros)
     VALUES ($1, $2, $3, COALESCE($4, '#D20A0A'), COALESCE($5, '#E2B400'), $6::tenant_plano, $7)
     RETURNING id`,
    [slug, nome, body.logo_url ?? null, body.cor_primary ?? null, body.cor_accent ?? null, plano, body.max_membros ?? null],
  );

  return NextResponse.json({ ok: true, tenant_id: tenant?.id }, { status: 201 });
}
