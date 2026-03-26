import Image from 'next/image';
import type { HeroSectionData, HeroFighterData } from '@/types/analise';

// ═══════════════════════════════════════════════════════
// Hero Section — Premium full-bleed banner
// Glassmorphism + Aurora glow + massive typography
// ═══════════════════════════════════════════════════════

function getInitials(nome: string): string {
  const parts = nome.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

function FighterImage({ fighter, side }: { fighter: HeroFighterData; side: 'left' | 'right' }) {
  const glowColor = side === 'left'
    ? 'shadow-[0_0_60px_rgba(210,10,10,0.3)]'
    : 'shadow-[0_0_60px_rgba(96,165,250,0.3)]';
  const borderColor = side === 'left' ? 'border-ufc-red/30' : 'border-blue-400/30';

  if (fighter.imagem_fullbody_url) {
    return (
      <div className={`relative h-44 w-44 md:h-52 md:w-52 lg:h-60 lg:w-60 mx-auto rounded-full overflow-hidden border-2 ${borderColor} ${glowColor}`}>
        <Image
          src={fighter.imagem_fullbody_url}
          alt={fighter.sobrenome}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 176px, (max-width: 1024px) 208px, 240px"
          unoptimized
        />
      </div>
    );
  }

  const bgGradient = side === 'left'
    ? 'bg-gradient-to-br from-ufc-red/20 to-transparent'
    : 'bg-gradient-to-br from-blue-400/20 to-transparent';

  return (
    <div className={`mx-auto flex h-36 w-36 md:h-44 md:w-44 items-center justify-center rounded-full border-2 ${borderColor} ${bgGradient} ${glowColor}`}>
      <span className="font-display text-4xl md:text-5xl text-white/40">
        {getInitials(fighter.sobrenome)}
      </span>
    </div>
  );
}

function FighterColumn({
  fighter,
  side,
}: {
  fighter: HeroFighterData;
  side: 'left' | 'right';
}) {
  const nameGradient = side === 'left'
    ? 'from-ufc-red via-red-400 to-red-300'
    : 'from-blue-400 via-blue-300 to-cyan-300';
  const accentColor = side === 'left' ? 'text-ufc-red' : 'text-blue-400';
  const accentBg = side === 'left' ? 'bg-ufc-red/10 border-ufc-red/20' : 'bg-blue-400/10 border-blue-400/20';
  const textAlign = side === 'left' ? 'md:text-left md:items-start' : 'md:text-right md:items-end';

  return (
    <div className={`flex flex-col items-center ${textAlign} gap-4`}>
      <FighterImage fighter={fighter} side={side} />

      <div className="text-center space-y-2">
        {/* Sobrenome - MASSIVE */}
        <h2 className={`font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase leading-none bg-gradient-to-r ${nameGradient} bg-clip-text text-transparent drop-shadow-lg`}>
          {fighter.sobrenome}
        </h2>

        {/* Record */}
        <p className="font-display text-lg md:text-xl text-white/80 tracking-wider">
          {fighter.record}
        </p>

        {/* Ranking badge */}
        {fighter.ranking && (
          <span className={`inline-block rounded-full ${accentBg} border px-4 py-1 text-xs font-bold uppercase tracking-wider ${accentColor}`}>
            {fighter.ranking}
          </span>
        )}

        {/* Info extra */}
        {fighter.info_extra && (
          <p className="text-[11px] text-white/40 tracking-wide">
            {fighter.info_extra}
          </p>
        )}
      </div>
    </div>
  );
}

export function HeroSection({ data }: { data: HeroSectionData }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0c0c0c]">
      {/* ── Aurora gradient mesh background ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Red glow from left */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-ufc-red/15 blur-[120px]" />
        {/* Blue glow from right */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-[120px]" />
        {/* Center subtle gold */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-ufc-gold/5 blur-[100px]" />
        {/* Top edge line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ufc-red/40 to-transparent" />
        {/* Bottom edge line */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      </div>

      <div className="relative z-10 px-6 py-10 md:px-12 md:py-16 lg:px-20 lg:py-20">
        {/* ── Event Info Top ── */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] px-5 py-2 mb-4">
            <div className="h-1.5 w-1.5 rounded-full bg-ufc-red animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
              {data.evento_nome}
            </span>
          </div>
          <p className="text-xs text-white/30">
            {data.evento_data} &middot; {data.evento_local}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
            <span className="rounded-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] px-3 py-1 text-[10px] font-medium text-white/50">
              {data.categoria_peso}
            </span>
            <span className="rounded-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] px-3 py-1 text-[10px] font-medium text-white/50">
              {data.num_rounds} Rounds
            </span>
            {data.titulo_em_jogo && (
              <span className="rounded-full bg-ufc-gold/10 border border-ufc-gold/20 px-3 py-1 text-[10px] font-bold uppercase text-ufc-gold">
                {data.titulo_em_jogo}
              </span>
            )}
          </div>
        </div>

        {/* ── Fighters Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-4">
          {/* Fighter 1 */}
          <FighterColumn fighter={data.fighter1} side="left" />

          {/* VS Center */}
          <div className="flex items-center justify-center py-2 md:py-0">
            <div className="relative">
              {/* Glow behind VS */}
              <div className="absolute inset-0 rounded-full bg-ufc-red/20 blur-xl scale-150" />
              <div className="relative flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white/[0.03] backdrop-blur-sm border border-white/[0.1]">
                <span className="font-display text-2xl md:text-3xl font-bold bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                  VS
                </span>
              </div>
            </div>
          </div>

          {/* Fighter 2 */}
          <FighterColumn fighter={data.fighter2} side="right" />
        </div>

        {/* ── Tagline ── */}
        <div className="mt-10 md:mt-14 text-center">
          <div className="inline-block">
            {/* Glassmorphic tagline card */}
            <div className="rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] px-8 py-5">
              <p className="font-display text-xl md:text-2xl lg:text-3xl uppercase tracking-wide bg-gradient-to-r from-ufc-gold via-amber-300 to-ufc-gold bg-clip-text text-transparent">
                {data.tagline}
              </p>
              <p className="mt-2 text-sm text-white/40 max-w-xl mx-auto leading-relaxed">
                {data.tagline_sub}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
