'use client';

import Link from 'next/link';
import { useAdminSWR } from '@/hooks/useAdminData';
import { SectionHeader } from '@/components/admin/shared';
import { ClipboardList, ExternalLink, CheckCircle2, FileEdit, Loader2, Target } from 'lucide-react';

interface EventoListItem {
  evento_nome: string;
  evento_slug: string;
  evento_data: string | null;
  total_analises: number;
  acertos: number;
  avaliadas: number;
  taxa: number;
  has_post_card: boolean;
  post_card_status: 'rascunho' | 'publicado' | null;
  post_card_updated_at: string | null;
}

const RECAP_PAGES_BY_EVENT_SLUG: Record<string, string> = {
  'ufc-fight-night-della-maddalena-vs-prates': '/recap/della-maddalena-vs-prates',
  'ufc-fight-night-emmett-vs-vallejos': '/recap/emmett-vs-vallejos',
  'ufc-fight-night-evloev-vs-murphy': '/recap/evloev-vs-murphy',
};

export default function PostCardListPage() {
  const { data, isLoading } = useAdminSWR<{ eventos: EventoListItem[] }>(
    '/api/admin/post-card'
  );

  const eventos = data?.eventos ?? [];

  return (
    <div className="space-y-6">
      <SectionHeader
        icon={ClipboardList}
        title="Post-Card"
        accent="Analysis"
        description="Avaliacao semanal pos-evento, mesma estrutura visual da analise do card"
      />

      {isLoading ? (
        <div className="flex items-center justify-center h-48">
          <Loader2 className="w-5 h-5 animate-spin text-ufc-red" />
        </div>
      ) : eventos.length === 0 ? (
        <p className="text-sm text-gray-500 text-center py-8">Nenhum evento com analises encontrado</p>
      ) : (
        <div className="space-y-3">
          {eventos.map((evento) => {
            const recapHref = RECAP_PAGES_BY_EVENT_SLUG[evento.evento_slug];
            return (
              <div
                key={evento.evento_nome}
                className="block neu-inset p-4 rounded-xl"
              >
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                      <h4 className="text-white font-semibold text-sm truncate">{evento.evento_nome}</h4>
                      {recapHref ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-bold uppercase text-emerald-400">
                          <CheckCircle2 className="w-3 h-3" />
                          Publicado
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-400/10 px-2 py-0.5 text-[10px] font-bold uppercase text-gray-400">
                          <FileEdit className="w-3 h-3" />
                          Pendente
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500 flex-wrap">
                      <span>{evento.total_analises} lutas</span>
                      {evento.evento_data && (
                        <span>{new Date(evento.evento_data).toLocaleDateString('pt-BR')}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {evento.avaliadas > 0 && (
                      <div className="flex items-center gap-1 text-xs">
                        <Target className="w-3.5 h-3.5 text-ufc-red" />
                        <span
                          className={`font-bold ${
                            evento.taxa >= 60
                              ? 'text-emerald-400'
                              : evento.taxa >= 40
                              ? 'text-yellow-400'
                              : 'text-red-400'
                          }`}
                        >
                          {evento.taxa}%
                        </span>
                        <span className="text-gray-600">
                          ({evento.acertos}/{evento.avaliadas})
                        </span>
                      </div>
                    )}
                    {recapHref ? (
                      <Link
                        href={recapHref}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-ufc-red/15 hover:bg-ufc-red/25 text-ufc-red text-xs font-bold transition-colors"
                      >
                        Abrir Recap
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <span className="px-3 py-2 text-xs text-gray-600 italic">A construir</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
