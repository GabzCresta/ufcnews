'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { RadarApostadorSectionData, EstatisticoEdge, ValuePick } from '@/types/analise';
import { getLabels, type Lang } from '@/lib/i18n-labels';
import { SectionHeader } from './SectionHeader';
import { CollapsibleText } from './CollapsibleText';

const ARMADILHA_LABELS: Record<Lang, { expand: string; collapse: string }> = {
  pt: { expand: 'Ler mais', collapse: 'Recolher' },
  en: { expand: 'Read more', collapse: 'Collapse' },
};

// ═══════════════════════════════════════════════════════
// Odds Display
// ═══════════════════════════════════════════════════════

function OddsDisplay({ data }: { data: RadarApostadorSectionData['odds'] }) {
  return (
    <div className="mb-8 md:mb-10">
      <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-16">
        <div className="text-center min-w-0">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/25 mb-1">Favorito</p>
          <p className="font-display text-xs sm:text-sm uppercase text-ufc-red mb-1 truncate">{data.fighter1_name}</p>
          <p className="font-display text-3xl sm:text-4xl md:text-5xl text-white">{data.fighter1_odds}</p>
        </div>
        <div className="w-px h-12 sm:h-16 bg-white/[0.06] shrink-0" />
        <div className="text-center min-w-0">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/25 mb-1">Underdog</p>
          <p className="font-display text-xs sm:text-sm uppercase text-blue-400 mb-1 truncate">{data.fighter2_name}</p>
          <p className="font-display text-3xl sm:text-4xl md:text-5xl text-white">{data.fighter2_odds}</p>
        </div>
      </div>
      <p className="text-center text-[9px] text-white/15 mt-3 px-4">{data.source}</p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// Edge Row
// ═══════════════════════════════════════════════════════

function EdgeRow({ edge }: { edge: EstatisticoEdge }) {
  const sideColor =
    edge.fighter_side === 'fighter1'
      ? 'text-ufc-red'
      : edge.fighter_side === 'fighter2'
        ? 'text-blue-400'
        : 'text-white/40';

  // edge_level (forte/moderado/leve) label was removed from the visual design
  // per user feedback: the qualitative label adds noise without helping the
  // reader. Field is kept in the data contract for backward compatibility.
  return (
    <div className="py-4 border-b border-white/[0.04] last:border-b-0">
      <div className="mb-1">
        <span className="text-base font-bold text-white/80">{edge.titulo}</span>
      </div>
      <p className="text-sm text-white/75 mb-2 leading-relaxed">{edge.contexto}</p>
      <p className={`text-xs ${sideColor}`}>{edge.implicacao_aposta}</p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// Value Pick Row
// ═══════════════════════════════════════════════════════

function ValuePickRow({ pick }: { pick: ValuePick }) {
  const [open, setOpen] = useState(false);
  const confColor = pick.confianca === 'alta' ? 'text-emerald-400' : pick.confianca === 'media' ? 'text-amber-400' : 'text-red-400';

  return (
    <div className="border-b border-white/[0.04] last:border-b-0">
      <button onClick={() => setOpen(!open)} className="w-full py-4 flex items-center justify-between text-left">
        <div className="flex items-baseline gap-3 flex-1 min-w-0">
          <span className="text-[9px] uppercase tracking-wider text-white/25 flex-shrink-0">{pick.tipo}</span>
          <span className="font-display text-lg text-white/85 truncate">{pick.pick}</span>
          {pick.odds && <span className="text-sm font-bold text-amber-400 flex-shrink-0">{pick.odds}</span>}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 ml-3">
          <span className={`text-[10px] font-bold uppercase ${confColor}`}>{pick.confianca}</span>
          {open ? <ChevronUp size={14} className="text-white/20" /> : <ChevronDown size={14} className="text-white/20" />}
        </div>
      </button>
      {open && (
        <div className="pb-4 pl-0">
          {pick.edge_vs_mercado && (
            <p className="text-xs text-amber-400/60 mb-2">{pick.edge_vs_mercado}</p>
          )}
          <p className="text-sm text-white/35 leading-relaxed">{pick.raciocinio}</p>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// Main
// ═══════════════════════════════════════════════════════

interface RadarApostadorSectionProps {
  data: RadarApostadorSectionData;
  lang?: Lang;
  /**
   * When true, skip rendering the Value Picks sub-block.
   * Used by the "less is more" layout where value picks are rendered inside
   * previsao_final (PrevisaoFinalSection) and would otherwise duplicate here.
   */
  hideValuePicks?: boolean;
}

export function RadarApostadorSection({ data, lang = 'pt', hideValuePicks = false }: RadarApostadorSectionProps) {
  const t = getLabels(lang);
  return (
    <section>
      <SectionHeader number="15" title={t.radar_title} accent={t.radar_accent} />

      {/* Odds */}
      <OddsDisplay data={data.odds} />

      {/* Edges */}
      <div className="mb-10">
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 mb-4">Edges Estatisticos</p>
        <div>
          {data.edges.map((edge, i) => (
            <EdgeRow key={i} edge={edge} />
          ))}
        </div>
      </div>

      {/* Value Picks — skipped when hideValuePicks is true (new layout) */}
      {!hideValuePicks && data.value_picks.length > 0 && (
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.2em] text-amber-400/60 mb-4">Apostas de Valor</p>
          <div className="rounded-xl bg-white/[0.02] border border-white/[0.04] overflow-hidden px-5">
            {data.value_picks.map((pick, i) => (
              <ValuePickRow key={i} pick={pick} />
            ))}
          </div>
        </div>
      )}

      {/* Trap */}
      <div className="rounded-xl bg-red-400/[0.03] border border-red-400/10 p-4 md:p-5 mb-4">
        <p className="text-[10px] uppercase tracking-[0.2em] text-red-400 font-bold mb-2">Armadilha</p>
        <p className="text-sm font-semibold text-white/90 mb-1">{data.armadilha.titulo}</p>
        <CollapsibleText
          text={data.armadilha.descricao}
          className="text-sm text-white/75 leading-relaxed"
          mobileLines={3}
          toggleColor="red"
          expandLabel={ARMADILHA_LABELS[lang].expand}
          collapseLabel={ARMADILHA_LABELS[lang].collapse}
        />
      </div>

      <p className="text-center text-[9px] text-white/15 italic">{data.disclaimer}</p>
    </section>
  );
}
