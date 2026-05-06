// Tipos do Post-Card Analysis: avaliação semanal pós-evento.
// Uma linha por evento na tabela `post_card_analyses`.

export type PostCardStatus = 'rascunho' | 'publicado';

export interface PostCardPerformance {
  /** Texto curto resumindo a performance (ex: "8/11 acertos, método casado em 100%"). */
  resumo: string;
  /** Acertos / total avaliado. Pode ser auto-calculado, mas armazenado pra evitar refetch. */
  acertos: number;
  total_avaliado: number;
  /** Comparativo opcional com card anterior. */
  comparativo?: string;
  /** Notas qualitativas: o que funcionou, o que escapou, padrões. */
  observacoes: string;
}

export type KeyPointTipo = 'finish' | 'upset' | 'declinio' | 'breakout' | 'narrativa';

export interface PostCardKeyPoint {
  titulo: string;
  /** Luta de referência: 'Della Maddalena vs Prates'. */
  luta: string;
  tipo: KeyPointTipo;
  descricao: string;
}

export type DivisionalSeveridade = 'sismo' | 'relevante' | 'pontual';

export interface PostCardDivisional {
  /** Nome da divisão: 'Welterweight', 'Lightweight', etc. */
  divisao: string;
  severidade: DivisionalSeveridade;
  titulo: string;
  /** Bullets com o impacto: rankings, title picture, gatekeepers. */
  impacto: string[];
}

export type CreatorAngleNicho = 'narrativa' | 'data' | 'apostador' | 'tragic-arc' | 'prospect-watch';

export interface PostCardCreatorAngle {
  titulo: string;
  nicho: CreatorAngleNicho;
  /** Pra que tipo de criador (ex: "canais long-form", "apostador algorítmico", "fan brasileiro"). */
  audiencia: string;
  hook: string;
  /** Sugestão de stats / fontes / formato. */
  detalhes: string;
}

export interface PostCardLesson {
  /** O que escapou. */
  o_que_escapou: string;
  /** Por quê — diagnóstico. */
  por_que: string;
  /** Ação corretiva pra próxima semana. */
  correcao: string;
}

export interface PostCardData {
  id: string;
  evento_id: string | null;
  evento_nome: string;
  performance: PostCardPerformance;
  key_points: PostCardKeyPoint[];
  divisional: PostCardDivisional[];
  creator_angles: PostCardCreatorAngle[];
  lessons: PostCardLesson[];
  status: PostCardStatus;
  created_at: string;
  updated_at: string;
}

export type PostCardDataInput = Pick<
  PostCardData,
  'performance' | 'key_points' | 'divisional' | 'creator_angles' | 'lessons' | 'status'
>;

export interface PostCardEventoListItem {
  evento_nome: string;
  evento_slug: string;
  evento_data: string | null;
  total_analises: number;
  acertos: number;
  avaliadas: number;
  taxa: number;
  has_post_card: boolean;
  post_card_status: PostCardStatus | null;
  post_card_updated_at: string | null;
}
