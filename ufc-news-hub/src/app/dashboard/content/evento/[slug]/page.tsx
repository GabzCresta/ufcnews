'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { useAdminAuth } from '@/components/admin/AdminAuthContext';
import { SectionHeader } from '@/components/admin/shared';
import Link from 'next/link';
import {
  Trophy,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Target,
  Clock,
  Loader2,
  Swords,
} from 'lucide-react';

interface Analise {
  id: string;
  slug: string;
  titulo: string;
  predicted_winner_name: string | null;
  predicted_method: string | null;
  confidence_score: number | null;
  actual_winner_name: string | null;
  prediction_correct: boolean | null;
  status: string;
  created_at: string;
}

interface Breakdown {
  normal: { total: number; acertos: number; erros: number; taxa: number };
  weighin: { total: number; acertos: number; erros: number; taxa: number };
  has_weighins: boolean;
}

interface Mudanca {
  slug: string;
  previsao_normal: string;
  previsao_weighin: string;
  vencedor_real: string;
  mudou: boolean;
  normal_acertou: boolean;
  weighin_acertou: boolean;
  impacto: 'corrigiu' | 'piorou' | 'neutro' | 'manteve';
}

interface EventoData {
  evento_nome: string;
  total: number;
  acertos: number;
  avaliadas: number;
  taxa: number;
  analises: Analise[];
  breakdown?: Breakdown;
  mudancas?: Mudanca[];
}

export default function EventoDetalhePage() {
  const params = useParams();
  const slug = decodeURIComponent((params?.slug as string) ?? '');
  const { authFetch } = useAdminAuth();
  const [data, setData] = useState<EventoData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const res = await authFetch(`/api/admin/content/evento?evento=${encodeURIComponent(slug)}`);
      if (res.ok) setData(await res.json());
    } catch { /* */ }
    finally { setLoading(false); }
  }, [authFetch, slug]);

  useEffect(() => { fetchData(); }, [fetchData]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-6 h-6 animate-spin text-ufc-red" />
      </div>
    );
  }

  if (!data) {
    return <p className="text-gray-500 text-center py-12">Evento nao encontrado</p>;
  }

  return (
    <div className="space-y-6">
      {/* Back button */}
      <Link
        href="/dashboard/content"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar para Conteudo
      </Link>

      <SectionHeader icon={Trophy} title={data.evento_nome} />

      {/* Stats hero */}
      <div className="neu-card p-6 border border-ufc-red/20">
        <div className="flex items-center gap-8">
          <div>
            <span className={`text-4xl font-bold ${data.taxa >= 60 ? 'text-emerald-400' : data.taxa >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
              {data.taxa}%
            </span>
            <p className="text-xs text-gray-500 mt-1">taxa de acerto</p>
          </div>
          <div className="h-12 w-px bg-[#1e1e2e]" />
          <div className="grid grid-cols-3 gap-6">
            <div>
              <span className="text-xl font-bold text-white">{data.total}</span>
              <p className="text-[10px] text-gray-500">lutas analisadas</p>
            </div>
            <div>
              <span className="text-xl font-bold text-emerald-400">{data.acertos}</span>
              <p className="text-[10px] text-gray-500">acertos</p>
            </div>
            <div>
              <span className="text-xl font-bold text-red-400">{data.avaliadas - data.acertos}</span>
              <p className="text-[10px] text-gray-500">erros</p>
            </div>
          </div>
        </div>
      </div>

      {/* Breakdown: Normal vs Weigh-In */}
      {data.breakdown?.has_weighins && (
        <div className="neu-card p-6 border border-[#1e1e2e]">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Target className="w-4 h-4 text-ufc-red" />
            Normal vs Pos Weigh-In
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-[#0d0d14] rounded-xl p-4 border border-[#1e1e2e]">
              <p className="text-[10px] text-gray-500 uppercase mb-2">Analise Normal (pre-fight)</p>
              <div className="flex items-baseline gap-2">
                <span className={`text-3xl font-bold ${data.breakdown.normal.taxa >= 60 ? 'text-emerald-400' : data.breakdown.normal.taxa >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
                  {data.breakdown.normal.taxa}%
                </span>
                <span className="text-xs text-gray-500">{data.breakdown.normal.acertos}/{data.breakdown.normal.acertos + data.breakdown.normal.erros}</span>
              </div>
            </div>
            <div className="bg-[#0d0d14] rounded-xl p-4 border border-[#1e1e2e]">
              <p className="text-[10px] text-gray-500 uppercase mb-2">Analise Pos Weigh-In</p>
              <div className="flex items-baseline gap-2">
                <span className={`text-3xl font-bold ${data.breakdown.weighin.taxa >= 60 ? 'text-emerald-400' : data.breakdown.weighin.taxa >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
                  {data.breakdown.weighin.taxa}%
                </span>
                <span className="text-xs text-gray-500">{data.breakdown.weighin.acertos}/{data.breakdown.weighin.acertos + data.breakdown.weighin.erros}</span>
              </div>
            </div>
          </div>

          {/* Mudancas de previsao */}
          {data.mudancas && data.mudancas.filter(m => m.mudou).length > 0 && (
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">
                Previsoes que mudaram apos weigh-in ({data.mudancas.filter(m => m.mudou).length} de {data.mudancas.length})
              </p>
              <div className="space-y-1.5">
                {data.mudancas.filter(m => m.mudou).map((m) => (
                  <div key={m.slug} className="flex items-center gap-3 bg-[#0d0d14] rounded-lg px-3 py-2 text-xs">
                    <span className="text-gray-400 w-40 truncate">{m.slug.replace(/-/g, ' ')}</span>
                    <span className="text-gray-500">{m.previsao_normal}</span>
                    <span className="text-gray-600">→</span>
                    <span className="text-white">{m.previsao_weighin}</span>
                    <span className="text-gray-600 mx-1">|</span>
                    <span className="text-gray-500">Ganhou: <span className="text-white">{m.vencedor_real}</span></span>
                    <span className="ml-auto">
                      {m.impacto === 'corrigiu' && (
                        <span className="text-emerald-400 font-bold bg-emerald-400/10 px-2 py-0.5 rounded">CORRIGIU</span>
                      )}
                      {m.impacto === 'piorou' && (
                        <span className="text-red-400 font-bold bg-red-400/10 px-2 py-0.5 rounded">PIOROU</span>
                      )}
                      {m.impacto === 'neutro' && (
                        <span className="text-gray-400 font-bold bg-gray-400/10 px-2 py-0.5 rounded">NEUTRO</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Fights list */}
      <div className="space-y-2">
        {data.analises.map((analise) => {
          const isPos = analise.slug.includes('pos-weighins');
          const hasResult = analise.prediction_correct !== null;

          return (
            <div
              key={analise.id}
              className={`neu-card p-5 border transition-colors ${
                hasResult
                  ? analise.prediction_correct
                    ? 'border-emerald-500/20'
                    : 'border-red-500/20'
                  : 'border-[#1e1e2e]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Swords className="w-4 h-4 text-gray-500" />
                    <h4 className="text-white font-medium text-sm truncate">{analise.titulo}</h4>
                    {isPos && (
                      <span className="text-[9px] bg-purple-500/10 text-purple-400 px-1.5 py-0.5 rounded-full font-bold uppercase">
                        Pos Weigh-Ins
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mt-2 text-xs">
                    {/* Nossa previsao */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-gray-500">Previsao:</span>
                      <span className="text-ufc-red font-semibold">{analise.predicted_winner_name || '-'}</span>
                      {analise.predicted_method && (
                        <span className="text-gray-600">via {analise.predicted_method}</span>
                      )}
                    </div>

                    {/* Confianca */}
                    {analise.confidence_score && (
                      <div className="flex items-center gap-1">
                        <span className="text-gray-500">Confianca:</span>
                        <span className="text-gray-300">{analise.confidence_score}/10</span>
                      </div>
                    )}
                  </div>

                  {/* Resultado real */}
                  {hasResult && (
                    <div className="flex items-center gap-1.5 mt-1 text-xs">
                      <span className="text-gray-500">Resultado:</span>
                      <span className="text-white font-semibold">{analise.actual_winner_name} venceu</span>
                    </div>
                  )}
                </div>

                {/* Status indicator */}
                <div className="flex items-center gap-3 ml-4">
                  {hasResult ? (
                    analise.prediction_correct ? (
                      <div className="flex items-center gap-1.5 bg-emerald-400/10 px-3 py-1.5 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-bold text-emerald-400 uppercase">Acertou</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 bg-red-400/10 px-3 py-1.5 rounded-lg">
                        <XCircle className="w-4 h-4 text-red-400" />
                        <span className="text-xs font-bold text-red-400 uppercase">Errou</span>
                      </div>
                    )
                  ) : (
                    <div className="flex items-center gap-1.5 bg-gray-400/10 px-3 py-1.5 rounded-lg">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-xs font-bold text-gray-400 uppercase">Pendente</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
