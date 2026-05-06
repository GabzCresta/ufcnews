// ═══════════════════════════════════════════════════════════
// War Room — Shared types for persistence, APIs, and frontend
// ═══════════════════════════════════════════════════════════

// ── Agent ──

export interface WarRoomAgent {
  id: string;
  human_name: string;
  codename: string;
  role: string;
  title: string;
  icon: string;
  color: string;
  status: AgentStatus;
  hierarchy: string;
  agent_level: number;
  level_title: string;
  xp: number;
  xp_to_next_level: number;
  tasks_completed: number;
  tasks_failed: number;
  weekly_score: number;
  avg_response_time: number;
  last_run_at: string | null;
  total_tokens: number;
  total_cost_usd: number;
}

export type AgentStatus = 'active' | 'idle' | 'running' | 'error';

// ── Pipeline Run ──

export interface PipelineRun {
  id: string;
  evento_nome: string;
  status: PipelineStatus;
  current_phase: string;
  phases_completed: string[];
  total_tokens: number;
  total_cost_usd: number;
  total_duration_ms: number;
  started_at: string;
  finished_at: string | null;
}

export type PipelineStatus = 'pending' | 'running' | 'human_gate' | 'completed' | 'failed';

// ── Agent Task ──

export interface AgentTask {
  id: string;
  pipeline_id: string | null;
  agent_id: string;
  type: TaskType;
  input_prompt: string;
  output_text: string | null;
  output_data: Record<string, unknown> | null;
  status: TaskStatus;
  tokens_input: number;
  tokens_output: number;
  cost_usd: number;
  duration_ms: number;
  error_message: string | null;
  retry_count: number;
  started_at: string;
  finished_at: string | null;
}

export type TaskType = 'pipeline_step' | 'direct_chat' | 'ceo_eval' | 'retry';
export type TaskStatus = 'pending' | 'running' | 'completed' | 'failed';

export interface CreateTaskInput {
  pipeline_id?: string | null;
  agent_id: string;
  type: TaskType;
  input_prompt: string;
}

export interface CompleteTaskInput {
  output_text: string;
  output_data?: Record<string, unknown>;
  tokens_input: number;
  tokens_output: number;
  duration_ms: number;
}

// ── Timeline Log ──

export interface TimelineLog {
  id: string;
  task_id: string;
  pipeline_id: string | null;
  agent_id: string;
  level: LogLevel;
  message: string;
  metadata: Record<string, unknown> | null;
  created_at: string;
}

export type LogLevel = 'info' | 'agent' | 'tool' | 'error' | 'system' | 'phase' | 'cost';

// ── Stats ──

export interface GlobalStats {
  total_pipelines: number;
  completed_pipelines: number;
  total_tasks: number;
  total_tokens: number;
  total_cost_usd: number;
  avg_pipeline_duration_ms: number;
  agents_active: number;
}

export interface AgentPerformance {
  agent_id: string;
  tasks_completed: number;
  tasks_failed: number;
  success_rate: number;
  avg_duration_ms: number;
  total_tokens: number;
  total_cost_usd: number;
  recent_tasks: AgentTask[];
}

// ── XP ──

export const LEVELS: Record<number, { title: string; xpRequired: number }> = {
  1: { title: 'Trainee', xpRequired: 0 },
  2: { title: 'Specialist', xpRequired: 100 },
  3: { title: 'Senior', xpRequired: 500 },
  4: { title: 'Lead', xpRequired: 2000 },
};

// ── Cost ──

export const MODEL_COSTS: Record<string, { input: number; output: number }> = {
  'opus': { input: 15, output: 75 },
  'sonnet': { input: 3, output: 15 },
  'haiku': { input: 0.80, output: 4 },
};
