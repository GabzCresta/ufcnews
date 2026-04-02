'use client';

import { useState, useEffect } from 'react';
import { Zap, ChevronRight, Clock, Eye, ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { OctagonTexture, Countdown, EventoNome, FightPreview, sortLutas, type Evento } from '@/components/arena/shared';
import { useTranslations } from 'next-intl';

export default function ArenaPreviewPage() {
  const t = useTranslations('arena');
  const [evento, setEvento] = useState<Evento | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvento() {
      try {
        const res = await fetch('/api/eventos/proximo?include_live=true');
        if (res.ok) {
          const data: unknown = await res.json();
          setEvento(data as Evento);
        }
      } catch { /* silent */ }
      setLoading(false);
    }
    fetchEvento();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Clock className="w-6 h-6 text-ufc-red animate-spin" />
      </div>
    );
  }

  const topLutas = evento ? sortLutas(evento.lutas).slice(0, 4) : [];

  return (
    <OctagonTexture posterUrl={evento?.poster_url} className={evento?.poster_url ? 'min-h-[85vh] sm:min-h-screen' : ''}>
      <div className={`container mx-auto px-4 ${evento?.poster_url ? 'flex flex-col justify-center min-h-[85vh] sm:min-h-screen' : 'py-12 sm:py-20'}`}>
        <div className="max-w-lg mx-auto text-center space-y-8 w-full">

          {/* Preview badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ufc-red/10 border border-ufc-red/30 px-4 py-1.5 text-xs font-display uppercase tracking-widest text-ufc-red">
              <Eye className="w-3.5 h-3.5" />
              {t('preview_badge')}
            </span>
          </div>

          {/* Event as protagonist */}
          {evento ? (
            <div className="space-y-5">
              <EventoNome nome={evento.nome} />
              <div className="text-xs text-dark-textMuted tracking-wide">
                {evento.local}
              </div>
              <div className="flex justify-center">
                <Countdown targetDate={evento.data_evento} />
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <h1 className="font-display text-4xl uppercase text-white">
                Arena <span className="text-ufc-red">UFC</span>
              </h1>
              <p className="text-dark-textMuted">
                {t('no_event_scheduled')}
              </p>
            </div>
          )}

          {/* CTA — points to landing page contact section */}
          <div className="space-y-3">
            <Link
              href="/#contato"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-ufc-red hover:bg-ufc-redLight text-white font-display text-lg uppercase tracking-wide rounded-xl transition-all shadow-lg shadow-ufc-red/20 hover:shadow-ufc-red/40"
            >
              <Zap className="w-5 h-5" />
              {t('preview_cta_picks')}
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* How it works — 3 steps */}
          <div className="grid grid-cols-3 gap-3 pt-10">
            {[
              { num: '01', title: t('predict'), desc: t('predict_desc'), color: 'text-ufc-red' },
              { num: '02', title: t('score'), desc: t('score_desc'), color: 'text-ufc-gold' },
              { num: '03', title: t('dominate'), desc: t('dominate_desc'), color: 'text-green-400' },
            ].map(step => (
              <div key={step.num} className="text-center space-y-1.5">
                <div className={`font-display text-2xl ${step.color}`}>{step.num}</div>
                <div className="font-display text-sm uppercase text-white">{step.title}</div>
                <div className="text-[11px] text-dark-textMuted leading-tight">{step.desc}</div>
              </div>
            ))}
          </div>

          {/* Back to landing */}
          <div className="pt-4">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-dark-textMuted hover:text-ufc-red transition-colors">
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Octagon
            </Link>
          </div>

          {/* Fight preview */}
          {topLutas.length > 0 && (
            <div className="neu-card p-4 text-left">
              <div className="text-[10px] font-display uppercase tracking-widest text-dark-textMuted mb-3">
                {t('main_card_section')}
              </div>
              {topLutas.map(luta => (
                <FightPreview key={luta.id} luta={luta} />
              ))}
              {evento && evento.lutas.length > 4 && (
                <div className="text-center mt-3">
                  <span className="text-xs text-dark-textMuted">
                    + {evento.lutas.length - 4} {t('more_fights')}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </OctagonTexture>
  );
}
