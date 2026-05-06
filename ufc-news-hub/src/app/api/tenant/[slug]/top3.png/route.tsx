import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { query, queryOne } from '@/lib/db';

// Public endpoint — podcaster can embed this in thumbnails
// /api/tenant/flow-podcast/top3.png
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface Top3Member {
  username: string;
  display_name: string | null;
  pontos_totais: number;
}

interface RouteCtx { params: Promise<{ slug: string }> }

export async function GET(_request: NextRequest, { params }: RouteCtx) {
  const { slug } = await params;

  const tenant = await queryOne<{
    id: string; nome: string; logo_url: string | null;
    cor_primary: string; cor_accent: string;
  }>(
    `SELECT id, nome, logo_url, cor_primary, cor_accent
       FROM tenants WHERE slug = $1 AND active = true`,
    [slug],
  );

  if (!tenant) {
    return new Response('tenant not found', { status: 404 });
  }

  const top3 = await query<Top3Member>(
    `SELECT u.username, u.display_name, u.pontos_totais
       FROM tenant_membros tm
       JOIN usuarios_arena u ON u.id = tm.usuario_id
      WHERE tm.tenant_id = $1
      ORDER BY u.pontos_totais DESC NULLS LAST LIMIT 3`,
    [tenant.id],
  );

  const medals = ['🥇', '🥈', '🥉'];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
          background: `linear-gradient(135deg, ${tenant.cor_primary} 0%, #000 60%, #000 100%)`,
          color: 'white', padding: '60px 80px', justifyContent: 'space-between',
          fontFamily: 'system-ui',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {tenant.logo_url ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={tenant.logo_url} width={80} height={80} alt="" style={{ borderRadius: 12 }} />
          ) : (
            <div style={{
              width: 80, height: 80, borderRadius: 12, background: tenant.cor_primary,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 48, fontWeight: 900,
            }}>{tenant.nome.charAt(0)}</div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 24, opacity: 0.6, letterSpacing: 4 }}>TOP 3 DA ARENA</div>
            <div style={{ fontSize: 56, fontWeight: 900, textTransform: 'uppercase' }}>{tenant.nome}</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {top3.map((m, i) => (
            <div key={m.username} style={{
              display: 'flex', alignItems: 'center', gap: 24,
              padding: '20px 32px',
              background: 'rgba(255,255,255,0.05)',
              borderLeft: `6px solid ${i === 0 ? tenant.cor_accent : tenant.cor_primary}`,
              borderRadius: 12,
            }}>
              <span style={{ fontSize: 56 }}>{medals[i]}</span>
              <span style={{ fontSize: 40, fontWeight: 700, flex: 1 }}>
                {m.display_name ?? m.username}
              </span>
              <span style={{ fontSize: 44, fontWeight: 900, color: tenant.cor_accent, fontVariantNumeric: 'tabular-nums' }}>
                {(m.pontos_totais ?? 0).toLocaleString()} pts
              </span>
            </div>
          ))}
          {top3.length === 0 && (
            <div style={{ fontSize: 36, opacity: 0.4, textAlign: 'center' }}>Aguardando picks...</div>
          )}
        </div>

        <div style={{ fontSize: 20, opacity: 0.5, textAlign: 'right' }}>
          arena.crenas.site
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
