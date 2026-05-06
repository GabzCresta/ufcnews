import { ImageResponse } from 'next/og';
import { getOgSlotData } from '@/app/[locale]/hub/creator-kit/hayjive/della-maddalena-vs-prates/data';

export const runtime = 'nodejs';

const SIZE = { width: 1080, height: 1350 } as const;

const COLORS = {
  bg: '#050807',
  card: '#0E1311',
  cardEnd: '#07090A',
  ink: '#FAFAFA',
  inkMute: 'rgba(250,250,250,0.55)',
  inkFaint: 'rgba(250,250,250,0.32)',
  emerald: '#1FAE5C',
  gold: '#D4AF37',
  goldDim: 'rgba(212,175,55,0.5)',
};

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: COLORS.bg,
        backgroundImage:
          'radial-gradient(ellipse at 50% 0%, rgba(31,174,92,0.20), transparent 65%), radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.12), transparent 70%)',
        padding: '60px',
        color: COLORS.ink,
        fontFamily: '"Inter", system-ui',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 30 }}>
        <span style={{ fontSize: 18, letterSpacing: 8, color: COLORS.gold, opacity: 0.7 }}>[001]</span>
        <span style={{ flex: 0, height: 1, width: 36, backgroundColor: 'rgba(212,175,55,0.3)' }} />
        <span style={{ fontSize: 32, fontWeight: 900, letterSpacing: '-0.5px' }}>
          HAYJIVE<span style={{ color: COLORS.gold, margin: '0 4px' }}>·</span>PICKS
        </span>
        <span style={{ flex: 0, height: 1, width: 36, backgroundColor: 'rgba(212,175,55,0.3)' }} />
        <span style={{ fontSize: 16, letterSpacing: 6, color: 'rgba(255,255,255,0.3)' }}>CARD KIT</span>
      </div>
      {children}
      <div
        style={{
          marginTop: 'auto',
          paddingTop: 20,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: 16, letterSpacing: 6, color: 'rgba(255,255,255,0.3)' }}>
          POWERED BY CRENAS
        </span>
        <span style={{ fontSize: 16, letterSpacing: 6, color: COLORS.gold }}>
          UNDERDOG · HAYJIVE
        </span>
      </div>
    </div>
  );
}

function DeepCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        backgroundColor: COLORS.card,
        backgroundImage: `linear-gradient(180deg, ${COLORS.card} 0%, ${COLORS.cardEnd} 100%)`,
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: 24,
        padding: 40,
        boxShadow:
          'inset 0 1px 0 rgba(212,175,55,0.18), 0 24px 48px -16px rgba(0,0,0,0.7)',
        display: 'flex',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children, color = COLORS.gold }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{ fontSize: 18, letterSpacing: 8, textTransform: 'uppercase', color, marginBottom: 16, display: 'flex' }}>
      {children}
    </div>
  );
}

function renderCover(hero: ReturnType<typeof getOgSlotData> & { type: 'cover' }) {
  const longestName = Math.max(hero.hero.fighter1.sobrenome.length, hero.hero.fighter2.sobrenome.length);
  const nameSize = longestName >= 13 ? 88 : longestName >= 10 ? 100 : 116;
  return (
    <Frame>
      <Eyebrow>{hero.hero.evento_nome} · {hero.hero.evento_data}</Eyebrow>
      <div
        style={{
          fontSize: nameSize,
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-2.5px',
          lineHeight: 0.92,
          marginTop: 'auto',
          marginBottom: 36,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span style={{ display: 'flex' }}>{hero.hero.fighter1.sobrenome}</span>
        <span style={{ display: 'flex' }}>
          <span style={{ color: COLORS.gold, marginRight: 16 }}>VS</span>
          <span>{hero.hero.fighter2.sobrenome}</span>
        </span>
      </div>
      <div
        style={{
          fontSize: 22,
          color: COLORS.inkMute,
          lineHeight: 1.45,
          fontStyle: 'italic',
          maxWidth: 880,
          display: 'flex',
        }}
      >
        {hero.hero.tagline}
      </div>
      <div
        style={{
          marginTop: 40,
          display: 'flex',
          gap: 24,
          fontSize: 18,
          letterSpacing: 4,
          color: COLORS.inkFaint,
        }}
      >
        <span>{hero.hero.evento_local}</span>
        <span style={{ color: COLORS.goldDim }}>·</span>
        <span>{hero.hero.categoria_peso}</span>
      </div>
    </Frame>
  );
}

function renderLock(payload: { lock: { index: number; pick: string; odds: string; fight: string; one_liner: string; conviction: number } }) {
  const { lock } = payload;
  const pickSize = lock.pick.length >= 14 ? 76 : lock.pick.length >= 10 ? 88 : 100;
  return (
    <Frame>
      <Eyebrow>
        <span style={{ display: 'flex' }}>LOCK · 0{lock.index}</span>
        {lock.index === 1 ? (
          <span
            style={{
              marginLeft: 20,
              padding: '4px 10px',
              borderRadius: 4,
              backgroundColor: 'rgba(212,175,55,0.15)',
              color: COLORS.gold,
              fontSize: 14,
              letterSpacing: 4,
              display: 'flex',
            }}
          >
            HEADLINE
          </span>
        ) : null}
      </Eyebrow>
      <div style={{ fontSize: 20, letterSpacing: 4, color: COLORS.inkFaint, marginBottom: 18, display: 'flex' }}>
        {lock.fight}
      </div>
      <div
        style={{
          fontSize: pickSize,
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-1.5px',
          lineHeight: 0.95,
          marginBottom: 30,
          display: 'flex',
        }}
      >
        {lock.pick}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 30, marginBottom: 36 }}>
        <span style={{ fontSize: 88, fontWeight: 900, color: COLORS.gold, lineHeight: 1, display: 'flex' }}>{lock.odds}</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ fontSize: 14, letterSpacing: 4, color: COLORS.inkFaint, display: 'flex' }}>DRAFTKINGS / FANDUEL</span>
          <span style={{ fontSize: 18, color: COLORS.emerald, fontWeight: 700, letterSpacing: 2, display: 'flex' }}>
            CONVICTION {lock.conviction}/10
          </span>
        </div>
      </div>
      <DeepCard style={{ marginTop: 'auto' }}>
        <div style={{ fontSize: 23, color: COLORS.inkMute, lineHeight: 1.55, display: 'flex' }}>
          {lock.one_liner}
        </div>
      </DeepCard>
    </Frame>
  );
}

function renderParlay(payload: {
  parlay: { name: string; flavor: string; legs: { pick: string; odds: string; fight: string }[]; combined_odds: string; thesis: string };
}) {
  const { parlay } = payload;
  const parlayName = parlay.name.split('·')[0].trim();
  const nameSize = parlayName.length >= 12 ? 80 : parlayName.length >= 9 ? 92 : 100;
  return (
    <Frame>
      <Eyebrow>{parlay.flavor}</Eyebrow>
      <div
        style={{
          fontSize: nameSize,
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-1.5px',
          lineHeight: 0.95,
          marginBottom: 14,
          display: 'flex',
        }}
      >
        {parlayName}
      </div>
      <div style={{ fontSize: 24, color: COLORS.gold, letterSpacing: 4, marginBottom: 32, display: 'flex' }}>
        COMBINED · {parlay.combined_odds}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {parlay.legs.map((leg, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '20px 24px',
              border: '1px solid rgba(212,175,55,0.10)',
              borderRadius: 14,
              backgroundColor: 'rgba(255,255,255,0.02)',
            }}
          >
            <span
              style={{
                fontSize: 18,
                fontWeight: 900,
                width: 36,
                height: 36,
                borderRadius: 8,
                backgroundColor: 'rgba(31,174,92,0.15)',
                color: COLORS.emerald,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 20,
                flexShrink: 0,
              }}
            >
              {i + 1}
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0, marginRight: 16 }}>
              <span style={{ fontSize: 13, letterSpacing: 3, color: COLORS.inkFaint, display: 'flex' }}>{leg.fight}</span>
              <span style={{ fontSize: 26, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.5px', display: 'flex' }}>
                {leg.pick}
              </span>
            </div>
            <span style={{ fontSize: 30, fontWeight: 900, color: COLORS.gold, display: 'flex', flexShrink: 0 }}>{leg.odds}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function renderFade(payload: { fade: { title: string; fight: string; popular_take: string; why_we_fade: string; alternative: string } }) {
  const { fade } = payload;
  return (
    <Frame>
      <Eyebrow color="#ff5b5b">FADE OF WEEK · DO NOT TAIL</Eyebrow>
      <div
        style={{
          marginTop: 16,
          marginBottom: 28,
          padding: '32px 36px',
          borderRadius: 16,
          backgroundColor: 'rgba(255,91,91,0.08)',
          border: '1px solid rgba(255,91,91,0.25)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span
          style={{
            fontSize: 16,
            letterSpacing: 6,
            color: '#ff5b5b',
            display: 'flex',
            marginBottom: 14,
          }}
        >
          MARKET TRAP
        </span>
        <span
          style={{
            fontSize: 68,
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '-1px',
            lineHeight: 1.05,
            display: 'flex',
            color: COLORS.ink,
          }}
        >
          {fade.title}
        </span>
        <span
          style={{
            fontSize: 16,
            letterSpacing: 4,
            color: COLORS.inkFaint,
            display: 'flex',
            marginTop: 20,
          }}
        >
          MAIN EVENT · WELTERWEIGHT · 5 ROUNDS
        </span>
      </div>
      <DeepCard style={{ flexDirection: 'column', gap: 14, marginTop: 'auto' }}>
        <span style={{ fontSize: 14, letterSpacing: 4, color: COLORS.gold, display: 'flex' }}>
          WHY WE FADE
        </span>
        <span style={{ fontSize: 20, lineHeight: 1.6, color: COLORS.inkMute, display: 'flex' }}>
          {fade.why_we_fade}
        </span>
        <span
          style={{
            fontSize: 14,
            letterSpacing: 4,
            color: COLORS.emerald,
            display: 'flex',
            marginTop: 16,
          }}
        >
          TAKE INSTEAD
        </span>
        <span style={{ fontSize: 20, lineHeight: 1.6, color: COLORS.ink, display: 'flex' }}>
          {fade.alternative}
        </span>
      </DeepCard>
    </Frame>
  );
}

function renderGimme(payload: { gimme: { type: 'pass'; reason: string; bar: string } | { type: 'pick'; pick: string; odds: string; fight: string; reasoning: string; conviction: number } }) {
  const { gimme } = payload;
  if (gimme.type === 'pick') {
    return (
      <Frame>
        <Eyebrow>GIMME · UNDERDOG CODE HAYJIVE</Eyebrow>
        <div style={{ fontSize: 20, letterSpacing: 4, color: COLORS.inkFaint, marginBottom: 16, display: 'flex' }}>
          {gimme.fight}
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '-2px',
            lineHeight: 0.9,
            marginBottom: 30,
            display: 'flex',
          }}
        >
          {gimme.pick}
        </div>
        <div style={{ fontSize: 88, fontWeight: 900, color: COLORS.gold, marginBottom: 30 }}>{gimme.odds}</div>
        <DeepCard style={{ flexDirection: 'column' }}>
          <span style={{ fontSize: 22, lineHeight: 1.5, color: COLORS.inkMute, display: 'flex' }}>
            {gimme.reasoning}
          </span>
        </DeepCard>
      </Frame>
    );
  }
  return (
    <Frame>
      <Eyebrow>STATUS · PASS THIS WEEK</Eyebrow>
      <div
        style={{
          fontSize: 124,
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-2.5px',
          lineHeight: 0.9,
          marginTop: 'auto',
          marginBottom: 36,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span style={{ display: 'flex' }}>NO GIMME</span>
        <span style={{ color: COLORS.gold, display: 'flex' }}>THIS CARD</span>
      </div>
      <DeepCard style={{ flexDirection: 'column', gap: 16 }}>
        <span style={{ fontSize: 14, letterSpacing: 4, color: COLORS.gold, display: 'flex' }}>
          BAR NOT MET
        </span>
        <span style={{ fontSize: 22, lineHeight: 1.55, color: COLORS.inkMute, display: 'flex' }}>
          {gimme.reason}
        </span>
        <span
          style={{
            fontSize: 18,
            color: COLORS.inkFaint,
            fontStyle: 'italic',
            borderLeft: `2px solid ${COLORS.gold}`,
            paddingLeft: 16,
            display: 'flex',
            marginTop: 8,
            lineHeight: 1.5,
          }}
        >
          An empty Gimme slot is infinitely better than a Gimme on a structurally weak pick.
        </span>
      </DeepCard>
    </Frame>
  );
}

function renderSheet(payload: {
  hero: { fighter1: { sobrenome: string }; fighter2: { sobrenome: string }; evento_data: string };
  sheet: { rows: { fight: string; pick: string; odds: string; slot: string }[]; underdog_code: string };
}) {
  const { hero, sheet } = payload;
  const top = sheet.rows.slice(0, 7);
  const longestName = Math.max(hero.fighter1.sobrenome.length, hero.fighter2.sobrenome.length);
  const nameSize = longestName >= 13 ? 56 : longestName >= 10 ? 62 : 72;
  return (
    <Frame>
      <Eyebrow>FINAL PICK SHEET · {hero.evento_data}</Eyebrow>
      <div
        style={{
          fontSize: nameSize,
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-1px',
          lineHeight: 0.95,
          marginBottom: 32,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span style={{ display: 'flex' }}>{hero.fighter1.sobrenome}</span>
        <span style={{ display: 'flex' }}>
          <span style={{ color: COLORS.gold, marginRight: 14 }}>VS</span>
          <span>{hero.fighter2.sobrenome}</span>
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {top.map((row, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '14px 20px',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
            }}
          >
            <span style={{ fontSize: 19, fontWeight: 900, color: COLORS.ink, flex: 1, display: 'flex', marginRight: 16 }}>{row.pick}</span>
            <span style={{ fontSize: 19, fontWeight: 700, color: COLORS.gold, width: 90, display: 'flex', justifyContent: 'flex-end', marginRight: 16, flexShrink: 0 }}>
              {row.odds}
            </span>
            <span style={{ fontSize: 12, letterSpacing: 2, color: COLORS.inkFaint, width: 240, display: 'flex', justifyContent: 'flex-end', flexShrink: 0 }}>
              {row.slot}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 'auto',
          padding: 28,
          borderRadius: 14,
          backgroundColor: 'rgba(212,175,55,0.08)',
          border: '1px solid rgba(212,175,55,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 14, letterSpacing: 4, color: COLORS.inkFaint, display: 'flex' }}>UNDERDOG CODE</span>
          <span style={{ fontSize: 36, fontWeight: 900, color: COLORS.gold, letterSpacing: '-1px', display: 'flex' }}>
            {sheet.underdog_code}
          </span>
        </div>
        <span style={{ fontSize: 18, letterSpacing: 4, color: COLORS.gold, display: 'flex' }}>20× FIRST DEPOSIT</span>
      </div>
    </Frame>
  );
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ card: string; slot: string }> }
) {
  const { slot } = await params;
  const data = getOgSlotData(slot);
  if (!data) {
    return new Response('Slot not found', { status: 404 });
  }

  let body: React.ReactNode;
  switch (data.type) {
    case 'cover':
      body = renderCover(data);
      break;
    case 'lock':
      body = renderLock(data);
      break;
    case 'parlay':
      body = renderParlay(data);
      break;
    case 'fade':
      body = renderFade(data);
      break;
    case 'gimme':
      body = renderGimme(data);
      break;
    case 'sheet':
      body = renderSheet(data);
      break;
    default:
      return new Response('Slot not found', { status: 404 });
  }

  return new ImageResponse(body, SIZE);
}
