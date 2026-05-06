import { query, queryOne, transaction } from '@/lib/db';
import type {
  WarRoomAgent, PipelineRun, AgentTask, TimelineLog,
  CreateTaskInput, CompleteTaskInput, GlobalStats, AgentPerformance,
  PipelineStatus, LogLevel,
} from './types';
import { calculateCost } from './cost';
import { awardTaskXP } from './xp';

// ═══════════════════════════════════════════════════════════
// War Room Persistence — DEDICATED TABLES, ZERO AI COMPANY
//
// Tables used:
//   war_room_agents  — 7 pipeline agents only
//   war_room_tasks   — tasks from War Room pipeline only
//   war_room_costs   — costs from War Room only
//   war_room_logs    — timeline logs
//   pipeline_execucoes — pipeline runs (shared but filtered by is_test=false)
//
// NEVER queries: agents, agent_tasks, agent_cost_logs, agent_logs
// ═══════════════════════════════════════════════════════════

// ── Agents ──

export async function getAgents(): Promise<WarRoomAgent[]> {
  return query<WarRoomAgent>(`
    SELECT id, human_name, codename, role, title, icon, color, status,
           hierarchy, agent_level, level_title, xp, xp_to_next as xp_to_next_level,
           tasks_completed, tasks_failed, weekly_score,
           avg_duration_ms as avg_response_time, last_run_at,
           total_tokens, total_cost_usd
    FROM war_room_agents
    ORDER BY CASE hierarchy WHEN 'executive' THEN 0 ELSE 1 END, human_name
  `);
}

export async function getAgent(id: string): Promise<WarRoomAgent | null> {
  return queryOne<WarRoomAgent>(`
    SELECT id, human_name, codename, role, title, icon, color, status,
           hierarchy, agent_level, level_title, xp, xp_to_next as xp_to_next_level,
           tasks_completed, tasks_failed, weekly_score,
           avg_duration_ms as avg_response_time, last_run_at,
           total_tokens, total_cost_usd
    FROM war_room_agents WHERE id = $1
  `, [id]);
}

export async function setAgentStatus(id: string, status: string): Promise<void> {
  await query(`UPDATE war_room_agents SET status = $1 WHERE id = $2`, [status, id]);
}

// ── Pipeline Runs ──

export async function createPipelineRun(eventoNome: string): Promise<PipelineRun> {
  const rows = await query<PipelineRun>(`
    INSERT INTO pipeline_execucoes
      (evento_nome, semana_inicio, status, step_atual, steps_completos, iniciado_em, is_test)
    VALUES ($1, $2, 'running', 'starting', '[]'::jsonb, NOW(), false)
    RETURNING
      id, evento_nome, status,
      step_atual as current_phase,
      steps_completos as phases_completed,
      0 as total_tokens, 0::real as total_cost_usd, 0 as total_duration_ms,
      iniciado_em as started_at, concluido_em as finished_at
  `, [eventoNome, getMondayOfWeek()]);
  return rows[0];
}

export async function updatePipelineRun(
  id: string,
  data: { status?: PipelineStatus; current_phase?: string; phase_completed?: string }
): Promise<void> {
  if (data.status && data.current_phase) {
    const dbStatus = data.status === 'completed' ? 'concluido'
      : data.status === 'failed' ? 'erro'
      : data.status === 'human_gate' ? 'aguardando'
      : 'rodando';

    await query(`
      UPDATE pipeline_execucoes SET
        status = $1, step_atual = $2,
        steps_completos = CASE WHEN $3::text IS NOT NULL
          THEN COALESCE(steps_completos, '[]'::jsonb) || to_jsonb($3::text)
          ELSE steps_completos END,
        concluido_em = CASE WHEN $4::text IN ('concluido', 'erro') THEN NOW() ELSE concluido_em END,
        tempo_total_min = EXTRACT(EPOCH FROM (NOW() - iniciado_em))::int / 60
      WHERE id = $5
    `, [dbStatus, data.current_phase, data.phase_completed || null, dbStatus, id]);
  }
}

export async function getPipelineRun(id: string): Promise<PipelineRun | null> {
  return queryOne<PipelineRun>(`
    SELECT id, evento_nome, status, step_atual as current_phase,
           steps_completos as phases_completed,
           COALESCE(custo_total_usd, 0)::real as total_cost_usd,
           COALESCE(tempo_total_min, 0) * 60000 as total_duration_ms,
           0 as total_tokens,
           iniciado_em as started_at, concluido_em as finished_at
    FROM pipeline_execucoes WHERE id = $1
  `, [id]);
}

export async function getRecentPipelineRuns(limit: number = 10): Promise<PipelineRun[]> {
  return query<PipelineRun>(`
    SELECT id, evento_nome, status, step_atual as current_phase,
           steps_completos as phases_completed,
           COALESCE(custo_total_usd, 0)::real as total_cost_usd,
           COALESCE(tempo_total_min, 0) * 60000 as total_duration_ms,
           0 as total_tokens,
           iniciado_em as started_at, concluido_em as finished_at
    FROM pipeline_execucoes
    WHERE is_test = false
    ORDER BY iniciado_em DESC
    LIMIT $1
  `, [limit]);
}

// ── Tasks ──

export async function createAgentTask(data: CreateTaskInput): Promise<AgentTask> {
  const rows = await query<AgentTask>(`
    INSERT INTO war_room_tasks (agent_id, pipeline_id, type, input_prompt)
    VALUES ($1, $2::uuid, $3, $4)
    RETURNING
      id, pipeline_id, agent_id, type, input_prompt,
      output_text, status, model_used,
      tokens_input, tokens_output, cost_usd, duration_ms,
      error_message, started_at, finished_at
  `, [data.agent_id, data.pipeline_id || null, data.type, data.input_prompt]);
  return rows[0];
}

export async function claimAgentTask(taskId: string): Promise<boolean> {
  const rows = await query<{ id: string }>(`
    UPDATE war_room_tasks SET status = 'running', started_at = NOW()
    WHERE id = $1 AND status = 'pending'
    RETURNING id
  `, [taskId]);
  return rows.length > 0;
}

export async function completeAgentTask(
  taskId: string,
  agentId: string,
  data: CompleteTaskInput,
  model: string = 'sonnet'
): Promise<void> {
  const cost = calculateCost(model, data.tokens_input, data.tokens_output);
  const xp = awardTaskXP({
    status: 'completed',
    durationMs: data.duration_ms,
    tokensInput: data.tokens_input,
    tokensOutput: data.tokens_output,
  });

  await transaction(async (client) => {
    // 1. Update task
    await client.query(`
      UPDATE war_room_tasks SET
        status = 'completed', output_text = $1, model_used = $2,
        tokens_input = $3, tokens_output = $4, cost_usd = $5,
        duration_ms = $6, finished_at = NOW()
      WHERE id = $7
    `, [data.output_text, model, data.tokens_input, data.tokens_output, cost, data.duration_ms, taskId]);

    // 2. Log cost
    await client.query(`
      INSERT INTO war_room_costs (task_id, agent_id, model, tokens_input, tokens_output, cost_usd)
      VALUES ($1, $2, $3, $4, $5, $6)
    `, [taskId, agentId, model, data.tokens_input, data.tokens_output, cost]);

    // 3. Update agent stats atomically
    await client.query(`
      UPDATE war_room_agents SET
        xp = xp + $1,
        tasks_completed = tasks_completed + 1,
        total_tokens = total_tokens + $2,
        total_cost_usd = total_cost_usd + $3,
        last_run_at = NOW(),
        status = 'active',
        avg_duration_ms = CASE
          WHEN avg_duration_ms = 0 THEN $4
          ELSE (avg_duration_ms + $4) / 2
        END
      WHERE id = $5
    `, [xp, data.tokens_input + data.tokens_output, cost, data.duration_ms, agentId]);

    // 4. Check promotion
    const agent = await client.query(
      `SELECT agent_level, xp, xp_to_next FROM war_room_agents WHERE id = $1`, [agentId]
    );
    if (agent.rows[0]) {
      const { agent_level, xp: currentXp, xp_to_next } = agent.rows[0];
      if (currentXp >= xp_to_next && agent_level < 4) {
        const newLevel = agent_level + 1;
        const titles: Record<number, string> = { 1: 'Trainee', 2: 'Specialist', 3: 'Senior', 4: 'Lead' };
        const thresholds: Record<number, number> = { 1: 100, 2: 500, 3: 2000, 4: 99999 };
        await client.query(`
          UPDATE war_room_agents SET
            agent_level = $1, level_title = $2, xp_to_next = $3, promoted_at = NOW()
          WHERE id = $4
        `, [newLevel, titles[newLevel], thresholds[newLevel], agentId]);
      }
    }
  });
}

// Retry: does NOT penalize agent (no XP loss, no tasks_failed increment)
export async function retryAgentTask(taskId: string, reason: string): Promise<void> {
  await query(`
    UPDATE war_room_tasks SET status = 'retried', error_message = $1, finished_at = NOW()
    WHERE id = $2
  `, [reason, taskId]);
}

export async function failAgentTask(taskId: string, agentId: string, errorMessage: string): Promise<void> {
  await transaction(async (client) => {
    await client.query(`
      UPDATE war_room_tasks SET status = 'failed', error_message = $1, finished_at = NOW()
      WHERE id = $2
    `, [errorMessage, taskId]);

    await client.query(`
      UPDATE war_room_agents SET
        xp = GREATEST(xp - 5, 0),
        tasks_failed = tasks_failed + 1,
        status = 'active'
      WHERE id = $1
    `, [agentId]);
  });
}

export async function getAgentTasks(agentId: string, limit: number = 10): Promise<AgentTask[]> {
  return query<AgentTask>(`
    SELECT id, pipeline_id, agent_id, type, input_prompt,
           output_text, status, model_used,
           tokens_input, tokens_output, cost_usd, duration_ms,
           error_message, started_at, finished_at
    FROM war_room_tasks
    WHERE agent_id = $1
    ORDER BY started_at DESC
    LIMIT $2
  `, [agentId, limit]);
}

export async function getPipelineTasks(pipelineId: string): Promise<AgentTask[]> {
  return query<AgentTask>(`
    SELECT id, pipeline_id, agent_id, type, input_prompt,
           output_text, status, model_used,
           tokens_input, tokens_output, cost_usd, duration_ms,
           error_message, started_at, finished_at
    FROM war_room_tasks
    WHERE pipeline_id = $1
    ORDER BY started_at ASC
  `, [pipelineId]);
}

// ── Logs ──

export async function appendLog(
  taskId: string,
  pipelineId: string | null,
  agentId: string,
  level: LogLevel,
  message: string,
  metadata?: Record<string, unknown>
): Promise<void> {
  await query(`
    INSERT INTO war_room_logs (task_id, pipeline_id, agent_id, level, message, metadata)
    VALUES ($1, $2, $3, $4, $5, $6::jsonb)
  `, [taskId, pipelineId, agentId, level, message, metadata ? JSON.stringify(metadata) : null]);
}

export async function getPipelineLogs(pipelineId: string): Promise<TimelineLog[]> {
  return query<TimelineLog>(`
    SELECT id, task_id, pipeline_id, agent_id, level, message, metadata, created_at
    FROM war_room_logs WHERE pipeline_id = $1
    ORDER BY created_at ASC
  `, [pipelineId]);
}

export async function getTaskLogs(taskId: string): Promise<TimelineLog[]> {
  return query<TimelineLog>(`
    SELECT id, task_id, pipeline_id, agent_id, level, message, metadata, created_at
    FROM war_room_logs WHERE task_id = $1
    ORDER BY created_at ASC
  `, [taskId]);
}

// ── Stats (ONLY from war_room_* tables) ──

export async function getGlobalStats(): Promise<GlobalStats> {
  const stats = await queryOne<GlobalStats>(`
    SELECT
      (SELECT COUNT(*) FROM pipeline_execucoes WHERE is_test = false)::int as total_pipelines,
      (SELECT COUNT(*) FROM pipeline_execucoes WHERE is_test = false AND status = 'concluido')::int as completed_pipelines,
      (SELECT COUNT(*) FROM war_room_tasks)::int as total_tasks,
      (SELECT COALESCE(SUM(tokens_input + tokens_output), 0) FROM war_room_tasks WHERE status = 'completed')::bigint as total_tokens,
      (SELECT COALESCE(SUM(cost_usd), 0) FROM war_room_costs)::real as total_cost_usd,
      (SELECT COALESCE(AVG(duration_ms), 0) FROM war_room_tasks WHERE status = 'completed')::int as avg_pipeline_duration_ms,
      (SELECT COUNT(*) FROM war_room_agents)::int as agents_active
  `);
  return stats || {
    total_pipelines: 0, completed_pipelines: 0, total_tasks: 0,
    total_tokens: 0, total_cost_usd: 0, avg_pipeline_duration_ms: 0, agents_active: 7,
  };
}

export async function getAgentPerformance(agentId: string): Promise<AgentPerformance> {
  const agent = await queryOne<{ tasks_completed: number; tasks_failed: number; avg_duration_ms: number; total_tokens: number; total_cost_usd: number }>(`
    SELECT tasks_completed, tasks_failed, avg_duration_ms,
           total_tokens::int as total_tokens, total_cost_usd
    FROM war_room_agents WHERE id = $1
  `, [agentId]);

  const recentTasks = await getAgentTasks(agentId, 5);
  const completed = agent?.tasks_completed || 0;
  const failed = agent?.tasks_failed || 0;
  const total = completed + failed;

  return {
    agent_id: agentId,
    tasks_completed: completed,
    tasks_failed: failed,
    success_rate: total > 0 ? Math.round((completed / total) * 100) : 0,
    avg_duration_ms: agent?.avg_duration_ms || 0,
    total_tokens: agent?.total_tokens || 0,
    total_cost_usd: agent?.total_cost_usd || 0,
    recent_tasks: recentTasks,
  };
}

// ── Conversations & Messages ──

export interface Conversation {
  id: string;
  agent_id: string;
  claude_session_id: string | null;
  title: string | null;
  status: string;
  message_count: number;
  created_at: string;
  updated_at: string;
}

export interface ChatMessage {
  id: string;
  conversation_id: string;
  agent_id: string;
  role: 'user' | 'assistant';
  content: string;
  tool_calls: unknown[] | null;
  tokens_input: number;
  tokens_output: number;
  duration_ms: number;
  model_used: string | null;
  created_at: string;
}

export async function createConversation(agentId: string, title?: string): Promise<Conversation> {
  const rows = await query<Conversation>(`
    INSERT INTO war_room_conversations (agent_id, title)
    VALUES ($1, $2)
    RETURNING *
  `, [agentId, title || null]);
  return rows[0];
}

export async function getConversation(id: string): Promise<Conversation | null> {
  return queryOne<Conversation>(`SELECT * FROM war_room_conversations WHERE id = $1`, [id]);
}

export async function getConversations(agentId: string, limit: number = 10): Promise<Conversation[]> {
  return query<Conversation>(`
    SELECT * FROM war_room_conversations
    WHERE agent_id = $1 AND status = 'active'
    ORDER BY updated_at DESC
    LIMIT $2
  `, [agentId, limit]);
}

export async function updateConversation(
  id: string,
  data: { claude_session_id?: string; title?: string; message_count_increment?: number }
): Promise<void> {
  const sets: string[] = ['updated_at = NOW()'];
  const params: unknown[] = [];
  let i = 1;

  if (data.claude_session_id) {
    sets.push(`claude_session_id = $${i++}`);
    params.push(data.claude_session_id);
  }
  if (data.title) {
    sets.push(`title = $${i++}`);
    params.push(data.title);
  }
  if (data.message_count_increment) {
    sets.push(`message_count = message_count + $${i++}`);
    params.push(data.message_count_increment);
  }

  params.push(id);
  await query(`UPDATE war_room_conversations SET ${sets.join(', ')} WHERE id = $${i}`, params);
}

export async function saveUserMessage(conversationId: string, agentId: string, content: string): Promise<ChatMessage> {
  const rows = await query<ChatMessage>(`
    INSERT INTO war_room_messages (conversation_id, agent_id, role, content)
    VALUES ($1, $2, 'user', $3)
    RETURNING *
  `, [conversationId, agentId, content]);
  return rows[0];
}

export async function saveAssistantMessage(
  conversationId: string,
  agentId: string,
  content: string,
  toolCalls?: unknown[],
  tokens?: { input: number; output: number; durationMs: number; model: string }
): Promise<ChatMessage> {
  const rows = await query<ChatMessage>(`
    INSERT INTO war_room_messages (conversation_id, agent_id, role, content, tool_calls, tokens_input, tokens_output, duration_ms, model_used)
    VALUES ($1, $2, 'assistant', $3, $4::jsonb, $5, $6, $7, $8)
    RETURNING *
  `, [
    conversationId, agentId, content,
    toolCalls ? JSON.stringify(toolCalls) : null,
    tokens?.input || 0, tokens?.output || 0, tokens?.durationMs || 0, tokens?.model || null,
  ]);
  return rows[0];
}

export async function getMessages(conversationId: string, limit: number = 50): Promise<ChatMessage[]> {
  return query<ChatMessage>(`
    SELECT * FROM war_room_messages
    WHERE conversation_id = $1
    ORDER BY created_at ASC
    LIMIT $2
  `, [conversationId, limit]);
}

export async function getFeed(limit: number = 50): Promise<ChatMessage[]> {
  return query<ChatMessage>(`
    SELECT * FROM war_room_messages
    ORDER BY created_at DESC
    LIMIT $1
  `, [limit]);
}

// ── Card Snapshots ──

export async function saveCardSnapshot(eventoNome: string, eventoData: string | null, fights: unknown, pipelineId?: string): Promise<void> {
  await query(`UPDATE card_snapshots SET is_latest = false WHERE evento_nome = $1`, [eventoNome]);
  await query(`
    INSERT INTO card_snapshots (evento_nome, evento_data, fights, is_latest, pipeline_id)
    VALUES ($1, $2, $3::jsonb, true, $4::uuid)
  `, [eventoNome, eventoData, JSON.stringify(fights), pipelineId || null]);
}

// ── Pipeline Cost Aggregation ──

export async function aggregatePipelineCosts(pipelineId: string): Promise<void> {
  await query(`
    UPDATE pipeline_execucoes SET
      custo_total_usd = COALESCE((SELECT SUM(cost_usd) FROM war_room_tasks WHERE pipeline_id = $1 AND status = 'completed'), 0),
      tempo_total_min = EXTRACT(EPOCH FROM (NOW() - iniciado_em))::int / 60
    WHERE id = $1
  `, [pipelineId]);
}

// ── Pipeline Lock (atomic) ──

export async function acquirePipelineLock(eventoNome: string): Promise<PipelineRun | null> {
  const rows = await query<PipelineRun>(`
    SELECT id, evento_nome, status, step_atual as current_phase
    FROM pipeline_execucoes
    WHERE status IN ('rodando', 'aguardando')
      AND is_test = false
    LIMIT 1
  `);
  if (rows.length > 0) return null; // Another pipeline is running
  return createPipelineRun(eventoNome);
}

// ── Orphan Recovery ──

export async function markOrphanedPipelinesAsFailed(): Promise<number> {
  const result = await query<{ id: string }>(`
    UPDATE pipeline_execucoes SET
      status = 'erro',
      step_atual = 'orphaned_recovery',
      concluido_em = NOW()
    WHERE status IN ('rodando', 'aguardando')
      AND is_test = false
      AND iniciado_em < NOW() - INTERVAL '2 hours'
    RETURNING id
  `);
  return result.length;
}

// ── Weekly Score Calculation ──

export async function calculateWeeklyScores(): Promise<void> {
  const agents = await query<{ id: string; tasks_completed: number; tasks_failed: number; avg_duration_ms: number }>(`
    SELECT id, tasks_completed, tasks_failed, avg_duration_ms FROM war_room_agents
  `);

  for (const agent of agents) {
    const total = agent.tasks_completed + agent.tasks_failed;
    if (total === 0) continue;

    // Success rate (0-5): completed / total * 5
    const successRate = Math.min(5, (agent.tasks_completed / total) * 5);

    // Efficiency score (0-5): based on avg duration (faster = better)
    // Benchmark: 60s = 5.0, 300s = 3.0, 600s+ = 1.0
    const avgSec = agent.avg_duration_ms / 1000;
    const efficiencyScore = avgSec <= 0 ? 3 : Math.max(1, Math.min(5, 5 - ((avgSec - 60) / 135)));

    // Quality score (0-5): approval rate from tasks (completed without retry)
    const retriedCount = await queryOne<{ count: number }>(`
      SELECT COUNT(*)::int as count FROM war_room_tasks
      WHERE agent_id = $1 AND status = 'retried'
    `, [agent.id]);
    const retried = retriedCount?.count || 0;
    const qualityScore = total > 0 ? Math.min(5, ((total - retried) / total) * 5) : 3;

    // Weekly score = success * 0.4 + quality * 0.35 + efficiency * 0.25
    const weeklyScore = Math.round((successRate * 0.4 + qualityScore * 0.35 + efficiencyScore * 0.25) * 100) / 100;

    await query(`UPDATE war_room_agents SET weekly_score = $1 WHERE id = $2`, [weeklyScore, agent.id]);
  }
}

// ── Demotion Logic ──

export async function checkDemotions(): Promise<string[]> {
  // Demote agents with weekly_score < 2.0 AND agent_level > 1
  const demoted = await query<{ id: string; agent_level: number }>(`
    UPDATE war_room_agents SET
      agent_level = GREATEST(agent_level - 1, 1),
      level_title = CASE GREATEST(agent_level - 1, 1)
        WHEN 1 THEN 'Trainee'
        WHEN 2 THEN 'Specialist'
        WHEN 3 THEN 'Senior'
        ELSE level_title
      END
    WHERE weekly_score < 2.0
      AND weekly_score > 0
      AND agent_level > 1
      AND tasks_completed + tasks_failed >= 3
    RETURNING id, agent_level
  `);
  return demoted.map(d => d.id);
}

// ── Error Query by Agent ──

export async function getAgentErrors(agentId: string, limit: number = 20): Promise<TimelineLog[]> {
  return query<TimelineLog>(`
    SELECT id, task_id, pipeline_id, agent_id, level, message, metadata, created_at
    FROM war_room_logs
    WHERE agent_id = $1 AND level = 'error'
    ORDER BY created_at DESC
    LIMIT $2
  `, [agentId, limit]);
}

// ── Performance by Period (week-over-week) ──

export interface WeeklyPerformance {
  week_start: string;
  agent_id: string;
  tasks_completed: number;
  tasks_failed: number;
  total_tokens: number;
  total_cost: number;
  avg_duration_ms: number;
  success_rate: number;
}

export async function getPerformanceByWeek(agentId: string, weeks: number = 8): Promise<WeeklyPerformance[]> {
  return query<WeeklyPerformance>(`
    SELECT
      date_trunc('week', started_at)::date as week_start,
      agent_id,
      COUNT(*) FILTER (WHERE status = 'completed')::int as tasks_completed,
      COUNT(*) FILTER (WHERE status = 'failed')::int as tasks_failed,
      COALESCE(SUM(tokens_input + tokens_output) FILTER (WHERE status = 'completed'), 0)::int as total_tokens,
      COALESCE(SUM(cost_usd) FILTER (WHERE status = 'completed'), 0)::real as total_cost,
      COALESCE(AVG(duration_ms) FILTER (WHERE status = 'completed'), 0)::int as avg_duration_ms,
      CASE WHEN COUNT(*) > 0
        THEN ROUND(COUNT(*) FILTER (WHERE status = 'completed')::numeric / COUNT(*)::numeric * 100)::int
        ELSE 0
      END as success_rate
    FROM war_room_tasks
    WHERE agent_id = $1
      AND started_at >= NOW() - ($2 || ' weeks')::interval
    GROUP BY date_trunc('week', started_at), agent_id
    ORDER BY week_start DESC
  `, [agentId, weeks]);
}

// ── Pipeline Comparison ──

export interface PipelineComparison {
  id: string;
  evento_nome: string;
  status: string;
  total_cost: number;
  duration_min: number;
  tasks_total: number;
  tasks_completed: number;
  tasks_failed: number;
  started_at: string;
}

export async function getPipelineComparisons(limit: number = 10): Promise<PipelineComparison[]> {
  return query<PipelineComparison>(`
    SELECT
      p.id,
      p.evento_nome,
      p.status,
      COALESCE(p.custo_total_usd, 0)::real as total_cost,
      COALESCE(p.tempo_total_min, 0) as duration_min,
      COUNT(t.id)::int as tasks_total,
      COUNT(t.id) FILTER (WHERE t.status = 'completed')::int as tasks_completed,
      COUNT(t.id) FILTER (WHERE t.status = 'failed')::int as tasks_failed,
      p.iniciado_em as started_at
    FROM pipeline_execucoes p
    LEFT JOIN war_room_tasks t ON t.pipeline_id = p.id
    WHERE p.is_test = false
    GROUP BY p.id
    ORDER BY p.iniciado_em DESC
    LIMIT $1
  `, [limit]);
}

// ── Increment Manual Interventions ──

export async function incrementManualIntervention(pipelineId: string): Promise<void> {
  await query(`
    UPDATE pipeline_execucoes SET intervencoes_manuais = COALESCE(intervencoes_manuais, 0) + 1
    WHERE id = $1
  `, [pipelineId]);
}

// ── CEO Reports ──

export interface CeoReport {
  id: string;
  pipeline_id: string | null;
  evento_nome: string | null;
  report_text: string;
  tokens_input: number;
  tokens_output: number;
  cost_usd: number;
  duration_ms: number;
  created_at: string;
  pipeline_status: string | null;
  pipeline_duration_min: number | null;
  pipeline_cost: number | null;
}

export async function getCeoReports(limit: number = 10): Promise<CeoReport[]> {
  return query<CeoReport>(`
    SELECT
      t.id,
      t.pipeline_id,
      p.evento_nome,
      t.output_text as report_text,
      t.tokens_input,
      t.tokens_output,
      t.cost_usd,
      t.duration_ms,
      t.finished_at as created_at,
      p.status as pipeline_status,
      p.tempo_total_min as pipeline_duration_min,
      p.custo_total_usd::real as pipeline_cost
    FROM war_room_tasks t
    LEFT JOIN pipeline_execucoes p ON p.id = t.pipeline_id
    WHERE t.agent_id = 'ceo'
      AND t.type = 'ceo_eval'
      AND t.status = 'completed'
      AND t.output_text IS NOT NULL
      AND LENGTH(t.output_text) > 100
    ORDER BY t.finished_at DESC
    LIMIT $1
  `, [limit]);
}

export async function getLatestCeoReport(): Promise<CeoReport | null> {
  const reports = await getCeoReports(1);
  return reports[0] || null;
}

// ── Helpers ──

function getMondayOfWeek(): string {
  const d = new Date();
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  return d.toISOString().split('T')[0];
}
