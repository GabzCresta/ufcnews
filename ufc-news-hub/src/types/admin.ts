// ═══════════════════════════════════════
// Tipos do Dashboard Admin
// ═══════════════════════════════════════

// --- Overview ---
export interface OverviewStats {
  clientes: { ativos: number; total: number };
  proximo_evento: {
    nome: string;
    data: string;
    local: string;
    dias_restantes: number;
  } | null;
  checklist_semana: {
    total: number;
    concluidos: number;
    percentual: number;
  };
  agentes: { total: number; ativos: number };
}

// --- Pipeline ---
export interface PipelineExecucao {
  id: string;
  evento_nome: string;
  semana_inicio: string;
  status: 'pendente' | 'rodando' | 'concluido' | 'erro';
  step_atual: string | null;
  steps_completos: string[];
  custo_total_usd: string;
  tempo_total_min: number;
  iniciado_em: string | null;
  concluido_em: string | null;
  created_at: string;
}

export interface PipelineStep {
  id: string;
  name: string;
  prompt: string;
}

// --- Content ---
export interface NoticiaAdmin {
  id: string;
  titulo: string;
  categoria: string;
  fonte_nome: string;
  visualizacoes: number;
  publicado_em: string;
}

export interface AnaliseAdmin {
  id: string;
  slug: string;
  titulo: string;
  evento_nome: string;
  status: string;
  created_at: string;
}

export interface LutadorAdmin {
  id: string;
  nome: string;
  apelido: string | null;
  categoria_peso: string | null;
  vitorias: number;
  derrotas: number;
  empates: number;
  ranking_divisao: number | null;
}

export interface ContentStats {
  total_noticias: number;
  total_analises: number;
  total_lutadores: number;
  total_eventos: number;
}

// --- Analytics ---
export interface AnalyticsMetricas {
  views_total: number;
  noticias_total: number;
  noticias_7d: number;
  analises_total: number;
  custo_ai_total: number;
  tasks_total: number;
  tasks_completed: number;
  tasks_failed: number;
  taxa_sucesso_ai: number;
  previsoes_total: number;
  previsoes_corretas: number;
  taxa_acerto: number;
  usuarios_arena: number;
  usuarios_ativos_7d: number;
  eventos_total: number;
  lutadores_total: number;
}

export interface CustoPorAgente {
  agent_id: string;
  agent_name: string;
  custo: number;
  chamadas: number;
}

export interface NoticiaPorDia {
  dia: string;
  total: number;
}

export interface AnalyticsData {
  metricas: AnalyticsMetricas;
  custo_por_agente: CustoPorAgente[];
  noticias_por_dia: NoticiaPorDia[];
}

// --- Arena Admin ---
export interface ArenaUser {
  id: string;
  username: string;
  display_name: string | null;
  email: string;
  nivel: string;
  pontos_totais: number;
  total_previsoes: number;
  previsoes_corretas: number;
  created_at: string;
}

export interface ArenaStats {
  total_usuarios: number;
  total_previsoes: number;
  media_acerto: number;
  usuarios_ativos_7d: number;
}

// --- Card Monitor ---
export interface CardChange {
  type: 'fight_removed' | 'fight_added' | 'opponent_changed' | 'card_cancelled';
  description: string;
  fighter1?: string;
  fighter2?: string;
  old_value?: string;
  new_value?: string;
}

export interface MonitorLog {
  id: string;
  evento_nome: string;
  checked_at: string;
  changes_detected: boolean;
  changes: CardChange[];
  status: 'ok' | 'changes_detected' | 'error';
  error_message?: string;
}
