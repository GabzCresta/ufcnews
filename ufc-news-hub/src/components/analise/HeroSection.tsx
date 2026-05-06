/* eslint-disable @next/next/no-img-element */
import type { HeroSectionData, HeroFighterData } from '@/types/analise';
import type { Lang } from '@/lib/i18n-labels';

// ═══════════════════════════════════════════════════════
// Hero Section — Mobile: poster cards. Desktop: original
// ═══════════════════════════════════════════════════════

function FighterInfoDesktop({ fighter, side }: { fighter: HeroFighterData; side: 'left' | 'right' }) {
  const nameGradient = side === 'left'
    ? 'from-ufc-red via-red-400 to-red-300'
    : 'from-blue-400 via-blue-300 to-cyan-300';
  const accentColor = side === 'left' ? 'text-ufc-red' : 'text-blue-400';
  const accentBg = side === 'left' ? 'bg-ufc-red/10 border-ufc-red/20' : 'bg-blue-400/10 border-blue-400/20';
  const ringColor = side === 'left' ? 'ring-ufc-red/50' : 'ring-blue-400/50';
  const align = side === 'left' ? 'text-right items-end' : 'text-left items-start';

  return (
    <div className={`flex flex-col justify-center ${align} space-y-1.5`}>
      {fighter.imagem_head_url && (
        <img
          src={fighter.imagem_head_url}
          alt={`${fighter.sobrenome} headshot`}
          className={`h-16 w-16 md:h-20 md:w-20 rounded-full object-cover object-top ring-2 ${ringColor} shadow-[0_4px_16px_rgba(0,0,0,0.6)] mb-2`}
        />
      )}
      <h2 className={`font-display text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.85] bg-gradient-to-r ${nameGradient} bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]`}>
        {fighter.sobrenome}
      </h2>
      <p className="font-display text-xs md:text-sm text-white/90 tracking-wider drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
        {fighter.record}
      </p>
      {fighter.ranking && (
        <span className={`inline-block rounded-full ${accentBg} border px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider ${accentColor}`}>
          {fighter.ranking}
        </span>
      )}
      {fighter.info_extra && (
        <p className="text-[10px] md:text-[11px] text-white/70 tracking-wide max-w-[200px]">{fighter.info_extra}</p>
      )}
    </div>
  );
}

function FighterPosterMobile({ fighter, side }: { fighter: HeroFighterData; side: 'left' | 'right' }) {
  const nameColor = side === 'left' ? 'text-ufc-red' : 'text-blue-400';
  const borderColor = side === 'left' ? 'border-ufc-red/30' : 'border-blue-400/30';
  const fromColor = side === 'left' ? 'from-ufc-red/15' : 'from-blue-400/15';

  return (
    <div className={`relative aspect-[3/4] rounded-2xl overflow-hidden border ${borderColor} bg-gradient-to-b ${fromColor} to-transparent`}>
      {fighter.imagem_fullbody_url && (
        <img
          src={fighter.imagem_fullbody_url}
          alt={fighter.sobrenome}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-2.5 text-center space-y-0.5">
        <p className="font-display text-xl uppercase text-white leading-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
          {fighter.sobrenome}
        </p>
        <p className="font-display text-[10px] text-white/80 tracking-wider">
          {fighter.record}
        </p>
        {fighter.ranking && (
          <p className={`text-[9px] font-bold uppercase tracking-wider ${nameColor}`}>
            {fighter.ranking}
          </p>
        )}
      </div>
    </div>
  );
}

export function HeroSection({ data, lang = 'pt' }: { data: HeroSectionData; lang?: Lang }) {
  const f1Img = data.fighter1.imagem_fullbody_url;
  const f2Img = data.fighter2.imagem_fullbody_url;

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0c0c0c]">
      {/* Aurora gradient mesh */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-ufc-red/15 blur-[120px]" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-[120px]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-ufc-gold/5 blur-[100px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ufc-red/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      </div>

      {/* Desktop only: absolute fullbody photos pinned to corners */}
      {f1Img && (
        <img
          src={f1Img}
          alt={data.fighter1.sobrenome}
          className="hidden md:block absolute bottom-0 left-0 h-[60%] w-auto object-contain object-bottom pointer-events-none select-none opacity-90"
        />
      )}
      {f2Img && (
        <img
          src={f2Img}
          alt={data.fighter2.sobrenome}
          className="hidden md:block absolute bottom-0 right-0 h-[60%] w-auto object-contain object-bottom pointer-events-none select-none opacity-90"
        />
      )}

      {/* Content layer on top of photos */}
      <div className="relative z-10">
        {/* Event Info */}
        <div className="text-center pt-6 pb-2 md:pt-8 md:pb-3 px-4 md:px-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] px-4 md:px-5 py-1.5 md:py-2 mb-2">
            <div className="h-1.5 w-1.5 rounded-full bg-ufc-red animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/85">
              {data.evento_nome}
            </span>
          </div>
          <p className="text-[11px] md:text-xs text-white/70">
            {data.evento_data} &middot; {data.evento_local}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
            <span className="rounded-full bg-white/[0.04] border border-white/[0.08] px-3 py-1 text-[10px] text-white/75">
              {data.categoria_peso}
            </span>
            <span className="rounded-full bg-white/[0.04] border border-white/[0.08] px-3 py-1 text-[10px] text-white/75">
              {data.num_rounds} Rounds
            </span>
            {data.titulo_em_jogo && (
              <span className="rounded-full bg-ufc-gold/10 border border-ufc-gold/20 px-3 py-1 text-[10px] font-bold uppercase text-ufc-gold">
                {data.titulo_em_jogo}
              </span>
            )}
          </div>
        </div>

        {/* MOBILE: Poster cards side-by-side with VS in middle */}
        <div className="md:hidden px-4 pt-4 pb-4">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-center">
            <FighterPosterMobile fighter={data.fighter1} side="left" />
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-ufc-red/20 blur-lg scale-150" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black/70 backdrop-blur-sm border border-white/[0.15]">
                  <span className="font-display text-base font-bold bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                    VS
                  </span>
                </div>
              </div>
            </div>
            <FighterPosterMobile fighter={data.fighter2} side="right" />
          </div>
        </div>

        {/* DESKTOP: Original layout — names + VS horizontal over fullbody photos */}
        <div className="hidden md:flex items-center justify-center gap-8 pt-20 pb-6 lg:pt-24 lg:pb-8 px-4">
          <FighterInfoDesktop fighter={data.fighter1} side="left" />
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-ufc-red/20 blur-xl scale-150" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm border border-white/[0.15]">
                <span className="font-display text-xl font-bold bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                  VS
                </span>
              </div>
            </div>
          </div>
          <FighterInfoDesktop fighter={data.fighter2} side="right" />
        </div>

        {/* Tagline */}
        <div className="relative pb-5 md:pb-7 text-center px-4 md:px-5">
          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/80 to-transparent pointer-events-none hidden md:block" />
          <div className="relative inline-block rounded-2xl bg-black/50 backdrop-blur-md border border-white/[0.06] px-4 py-3 md:px-8 md:py-4">
            <p className="font-display text-base md:text-xl lg:text-2xl uppercase tracking-wide bg-gradient-to-r from-ufc-gold via-amber-300 to-ufc-gold bg-clip-text text-transparent">
              {data.tagline}
            </p>
            <p className="mt-1.5 text-xs md:text-sm text-white/80 max-w-lg mx-auto leading-relaxed">
              {data.tagline_sub}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
