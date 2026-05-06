'use client';

import Link from 'next/link';
import type { FullSingleAnalise } from '@/types/analise';
import { getLabels, type Lang } from '@/lib/i18n-labels';
import { LocaleSwitcher } from '@/components/ui/LocaleSwitcher';
import { HeroSection } from './HeroSection';
import { QualitativeInsightSection } from './QualitativeInsightSection';
import { TaleOfTapeSection } from './TaleOfTapeSection';
import { NarrativaSection } from './NarrativaSection';
import { MomentoAtualSection } from './MomentoAtualSection';
import { NivelCompeticaoSection } from './NivelCompeticaoSection';
import { OponenteComumSection } from './OponenteComumSection';
import { ComparacaoEstatisticaSection } from './ComparacaoEstatisticaSection';
import { PerfilHabilidadesSection } from './PerfilHabilidadesSection';
import { PerfilHabilidadesV2Section } from './PerfilHabilidadesV2Section';
import { DistribuicaoVitoriasSection } from './DistribuicaoVitoriasSection';
import { DistribuicaoDerrotasSection } from './DistribuicaoDerrotasSection';
import { DangerZonesSection } from './DangerZonesSection';
import { IntangiveisSection } from './IntangiveisSection';
import { CaminhosVitoriaSection } from './CaminhosVitoriaSection';
import { PrevisaoFinalSection } from './PrevisaoFinalSection';
import { OQueObservarSection } from './OQueObservarSection';
import { CreatorKitSection } from './CreatorKitSection';
import { RadarApostadorSection } from './RadarApostadorSection';


export function FullAnalysisView({ analise, lang = 'pt' }: { analise: FullSingleAnalise; lang?: Lang }) {
  const d = analise.full_analysis;
  const f1Name = d.hero.fighter1.sobrenome;
  const f2Name = d.hero.fighter2.sobrenome;
  const t = getLabels(lang);

  // New-shape detection: pages that populate `qualitative_insight` use the
  // "less is more" layout with the reordered section sequence (Tale of the
  // Tape standalone before historico, etc). Legacy pages keep the old order.
  const isNewShape = Boolean(d.qualitative_insight);

  const eventoNome = d.hero.evento_nome || '';
  const eventoSlug = eventoNome.includes(':')
    ? eventoNome.split(':').pop()!.trim().toLowerCase().replace(/\s+/g, '-')
    : eventoNome.toLowerCase().replace(/\s+/g, '-');

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Breadcrumb + Language Switcher */}
      <div className="mx-auto max-w-5xl px-4 pt-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-white/30">
            <Link href={`/hub/analise/evento/${eventoSlug}`} className="hover:text-ufc-red transition-colors">{eventoNome || 'Evento'}</Link>
            <span className="text-white/10">/</span>
            <span className="text-white/50">{f1Name} vs {f2Name}</span>
          </div>
          <LocaleSwitcher />
        </div>
      </div>

      {/* Section 1: Hero */}
      <div className="mx-auto max-w-5xl px-4">
        <HeroSection data={d.hero} lang={lang} />
      </div>

      {/* Qualitative Insight — rendered right after Hero, before everything else.
          Only on new-shape pages (where d.qualitative_insight is set). */}
      {d.qualitative_insight && (
        <div className="mx-auto max-w-5xl px-4">
          <QualitativeInsightSection data={d.qualitative_insight} lang={lang} />
        </div>
      )}

      <div className="mx-auto max-w-5xl px-4 py-8 md:py-16 space-y-10 md:space-y-20">
        {isNewShape ? (
          <>
            {/* NEW SHAPE — "less is more" section order
                3. Tale of the Tape (standalone)
                4. Historico dos Lutadores (momento_atual)
                5. Nivel de Competicao
                6. Comparacao Estatistica (without embedded tale_of_tape)
                7. Distribuicao de Vitorias
                8. Perfil de Habilidades V2
                9. Previsao Final + Radar Apostador
            */}
            <TaleOfTapeSection rows={d.comparacao_estatistica.tale_of_tape} sectionNumber="01" />

            {d.momento_atual && (
              <MomentoAtualSection data={d.momento_atual} sectionNumber="02" lang={lang} />
            )}

            <NivelCompeticaoSection data={d.nivel_competicao} sectionNumber="03" lang={lang} />

            <ComparacaoEstatisticaSection
              data={d.comparacao_estatistica}
              fighter1Name={f1Name}
              fighter2Name={f2Name}
              sectionNumber="04"
              lang={lang}
              hideTaleOfTape
            />

            <DistribuicaoVitoriasSection data={d.distribuicao_vitorias} sectionNumber="05" lang={lang} />

            {d.distribuicao_derrotas && (
              <DistribuicaoDerrotasSection data={d.distribuicao_derrotas} lang={lang} />
            )}

            {d.perfil_habilidades_v2 && (
              <PerfilHabilidadesV2Section
                data={d.perfil_habilidades_v2}
                fighter1Name={f1Name}
                fighter2Name={f2Name}
                sectionNumber="06"
                lang={lang}
              />
            )}

            <PrevisaoFinalSection data={d.previsao_final} sectionNumber="07" lang={lang} />

            {/* Radar do Apostador is fully absorbed into PrevisaoFinalSection in
                the new shape. Odds, value picks, key stats and armadilha all live
                inside `data.previsao_final`. We deliberately skip rendering it
                here to avoid duplication. */}
          </>
        ) : (
          <>
            {/* LEGACY SHAPE — original 15-section order, preserved unchanged */}
            {d.narrativa && (
              <NarrativaSection data={d.narrativa} fighter1Name={f1Name} fighter2Name={f2Name} />
            )}
            {d.momento_atual && <MomentoAtualSection data={d.momento_atual} lang={lang} />}
            <NivelCompeticaoSection data={d.nivel_competicao} lang={lang} />
            {d.oponente_comum && <OponenteComumSection data={d.oponente_comum} />}
            <ComparacaoEstatisticaSection
              data={d.comparacao_estatistica}
              fighter1Name={f1Name}
              fighter2Name={f2Name}
              lang={lang}
            />
            {d.perfil_habilidades && (
              <PerfilHabilidadesSection
                data={d.perfil_habilidades}
                fighter1Name={f1Name}
                fighter2Name={f2Name}
                lang={lang}
              />
            )}
            <DistribuicaoVitoriasSection data={d.distribuicao_vitorias} lang={lang} />
            {d.distribuicao_derrotas && <DistribuicaoDerrotasSection data={d.distribuicao_derrotas} lang={lang} />}
            {d.danger_zones && <DangerZonesSection data={d.danger_zones} />}
            {d.intangiveis && <IntangiveisSection data={d.intangiveis} lang={lang} />}
            {d.caminhos_vitoria && <CaminhosVitoriaSection data={d.caminhos_vitoria} lang={lang} />}
            <PrevisaoFinalSection data={d.previsao_final} lang={lang} />
            {d.o_que_observar && <OQueObservarSection data={d.o_que_observar} />}
            {d.creator_kit && <CreatorKitSection data={d.creator_kit} lang={lang} />}
            {d.radar_apostador && <RadarApostadorSection data={d.radar_apostador} lang={lang} />}
          </>
        )}

        {/* Footer Disclaimer */}
        <div className="rounded-lg border border-dark-border bg-dark-bg p-6 text-center">
          <p className="text-xs text-dark-textMuted">
            <span className="font-bold text-ufc-gold">UFC NEWS HUB</span> - {t.analise_estatistica}
            {' '}{t.dados_baseados}
          </p>
          <p className="mt-2 text-[10px] text-dark-textMuted">
            {d.hero.fighter1.nome_completo} vs {d.hero.fighter2.nome_completo} | {d.hero.evento_nome} | {d.hero.evento_data} | {d.hero.evento_local}
          </p>
        </div>
      </div>
    </main>
  );
}
