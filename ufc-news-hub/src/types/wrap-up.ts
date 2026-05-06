export interface WrapUpData {
  evento_nome: string;
  evento_data: string;
  evento_slug: string;
  data_atualizacao: string;
  mudancas: WrapUpMudanca[];
  weigh_in_failures: WrapUpWeighInFailure[];
  news_semana: WrapUpNoticia[];
}

export type WrapUpMudancaTipo = 'camp' | 'lesao' | 'odds' | 'estilo' | 'outros';

export interface WrapUpMudanca {
  luta: string;
  tipo: WrapUpMudancaTipo;
  descricao: string;
  impacto: string;
}

export interface WrapUpWeighInFailure {
  lutador: string;
  luta: string;
  peso_alvo: string;
  peso_real: string;
  percentual_multa: number;
  implicacao: string;
}

export interface WrapUpNoticia {
  titulo: string;
  descricao: string;
  /**
   * Fight-week date the news broke. MUST be between Monday of fight week and
   * Saturday morning (post weigh-ins) of the event. Items outside this window
   * belong in `mudancas`, not here. Format: "DD de Mes, YYYY" (PT-BR).
   */
  data?: string;
  fonte?: string;
  impacto_lutas?: string[];
}
