import { Link } from '@/i18n/routing';
import { LocaleSwitcher } from '@/components/ui/LocaleSwitcher';
import type { FullSingleAnalise } from '@/types/analise';
import { HeroSection } from './HeroSection';
import { NarrativaSection } from './NarrativaSection';
import { MomentoAtualSection } from './MomentoAtualSection';
import { NivelCompeticaoSection } from './NivelCompeticaoSection';
import { OponenteComumSection } from './OponenteComumSection';
import { ComparacaoEstatisticaSection } from './ComparacaoEstatisticaSection';
import { PerfilHabilidadesSection } from './PerfilHabilidadesSection';
import { DistribuicaoVitoriasSection } from './DistribuicaoVitoriasSection';
import { DistribuicaoDerrotasSection } from './DistribuicaoDerrotasSection';
import { DangerZonesSection } from './DangerZonesSection';
import { IntangiveisSection } from './IntangiveisSection';
import { CaminhosVitoriaSection } from './CaminhosVitoriaSection';
import { PrevisaoFinalSection } from './PrevisaoFinalSection';
import { OQueObservarSection } from './OQueObservarSection';
import { CreatorKitSection } from './CreatorKitSection';
import { RadarApostadorSection } from './RadarApostadorSection';

interface FullAnalysisViewProps {
  analise: FullSingleAnalise;
  lang?: string;
}

export function FullAnalysisView({ analise }: FullAnalysisViewProps) {
  const fa = analise.full_analysis;
  const f1Name = fa.hero.fighter1.sobrenome;
  const f2Name = fa.hero.fighter2.sobrenome;

  // Build event slug from evento_nome: "UFC Fight Night: Moicano vs Duncan" → "moicano-vs-duncan"
  const eventoNome = fa.hero.evento_nome || '';
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

      {/* Hero (full-bleed, no section number) */}
      <div className="mx-auto max-w-5xl px-4">
        <HeroSection data={fa.hero} />
      </div>

      {/* Sections with consistent spacing */}
      <div className="mx-auto max-w-5xl px-4 space-y-20 py-16">
        {/* 01 - Narrativa (legacy, optional) */}
        {fa.narrativa && (
          <section>
            <NarrativaSection
              data={fa.narrativa}
              fighter1Name={f1Name}
              fighter2Name={f2Name}
            />
          </section>
        )}

        {/* 02 - Momento Atual (legacy, optional) */}
        {fa.momento_atual && (
          <section>
            <MomentoAtualSection data={fa.momento_atual} />
          </section>
        )}

        {/* 03 - Nivel de Competicao */}
        <section>
          <NivelCompeticaoSection data={fa.nivel_competicao} />
        </section>

        {/* 04 - Oponente Comum (legacy, optional) */}
        {fa.oponente_comum && (
          <section>
            <OponenteComumSection
              data={fa.oponente_comum}
              fighter1Name={f1Name}
              fighter2Name={f2Name}
            />
          </section>
        )}

        {/* 05 - Comparacao Estatistica */}
        <section>
          <ComparacaoEstatisticaSection
            data={fa.comparacao_estatistica}
            fighter1Name={f1Name}
            fighter2Name={f2Name}
          />
        </section>

        {/* 06 - Perfil de Habilidades (legacy, optional — v2 not supported in this legacy view) */}
        {fa.perfil_habilidades && (
          <section>
            <PerfilHabilidadesSection
              data={fa.perfil_habilidades}
              fighter1Name={f1Name}
              fighter2Name={f2Name}
            />
          </section>
        )}

        {/* 07 - Distribuicao de Vitorias */}
        <section>
          <DistribuicaoVitoriasSection data={fa.distribuicao_vitorias} />
        </section>

        {/* 08 - Distribuicao de Derrotas (optional) */}
        {fa.distribuicao_derrotas && (
          <section>
            <DistribuicaoDerrotasSection data={fa.distribuicao_derrotas} />
          </section>
        )}

        {/* 09 - Danger Zones (legacy, optional) */}
        {fa.danger_zones && (
          <section>
            <DangerZonesSection data={fa.danger_zones} />
          </section>
        )}

        {/* 09 - Intangiveis (legacy, optional) */}
        {fa.intangiveis && (
          <section>
            <IntangiveisSection data={fa.intangiveis} />
          </section>
        )}

        {/* 10 - Caminhos Para Vitoria (legacy, optional) */}
        {fa.caminhos_vitoria && (
          <section>
            <CaminhosVitoriaSection data={fa.caminhos_vitoria} />
          </section>
        )}

        {/* 11 - Previsao Final */}
        <section>
          <PrevisaoFinalSection data={fa.previsao_final} />
        </section>

        {/* 12 - O Que Observar (legacy, optional) */}
        {fa.o_que_observar && (
          <section>
            <OQueObservarSection data={fa.o_que_observar} />
          </section>
        )}

        {/* 13 - Creator Kit (legacy, optional) */}
        {fa.creator_kit && (
          <section>
            <CreatorKitSection data={fa.creator_kit} />
          </section>
        )}

        {/* 15 - Radar do Apostador */}
        <section>
          {fa.radar_apostador && <RadarApostadorSection data={fa.radar_apostador} />}
        </section>
        {/* Footer */}
        <div className="pt-8 text-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
          <p className="text-[10px] text-white/20 uppercase tracking-widest">
            Combat Sports Intelligence Engine
          </p>
        </div>
      </div>
    </main>
  );
}
