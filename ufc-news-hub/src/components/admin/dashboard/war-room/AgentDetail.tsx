'use client';

import { CheckCircle, TrendingUp, Clock, Zap, DollarSign } from 'lucide-react';
import { LEVELS, type WarRoomAgent, type AgentPerformance } from '@/lib/war-room/types';
import { AgentAvatar } from './AgentAvatar';

export function AgentDetail({ agent, performance }: {
  agent: WarRoomAgent;
  performance: AgentPerformance;
}) {
  if (!agent || !performance) return null;
  const xpPercent = agent.xp_to_next_level > 0
    ? Math.min(100, Math.round((agent.xp / agent.xp_to_next_level) * 100))
    : 0;
  const nextLevel = LEVELS[(agent.agent_level + 1) as keyof typeof LEVELS];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="text-center">
        <div className="mx-auto mb-3 flex justify-center">
          <AgentAvatar agentId={agent.id} size="lg" isRunning={agent.status === 'running'} />
        </div>
        <h3 className="font-display text-lg text-white tracking-wide">{agent.human_name}</h3>
        <p className="text-xs text-gray-500">{agent.title}</p>
        <p className="text-[10px] text-gray-600 mt-1">{agent.role}</p>
      </div>

      {/* Level & XP */}
      <div className="neu-inset rounded-xl p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold" style={{ color: agent.color }}>
            L{agent.agent_level} {agent.level_title}
          </span>
          <span className="text-[10px] text-gray-500">{agent.xp} / {agent.xp_to_next_level} XP</span>
        </div>
        <div className="h-2 bg-[#1e1e2e] rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all duration-700"
            style={{ width: `${xpPercent}%`, backgroundColor: agent.color }} />
        </div>
        {nextLevel && (
          <p className="text-[10px] text-gray-600 mt-1 text-center">
            {agent.xp_to_next_level - agent.xp} XP para {nextLevel.title}
          </p>
        )}
      </div>

      {/* Performance Stats */}
      <div className="space-y-2">
        <p className="text-[10px] text-gray-600 uppercase tracking-wider font-semibold">Performance</p>
        <div className="grid grid-cols-2 gap-2">
          <StatCard icon={CheckCircle} label="Sucesso" value={`${performance.success_rate ?? 0}%`} color="text-emerald-400" />
          <StatCard icon={TrendingUp} label="Tasks" value={String(performance.tasks_completed ?? 0)} color="text-blue-400" />
          <StatCard icon={Clock} label="Tempo med." value={(performance.avg_duration_ms ?? 0) > 60000 ? `${Math.round((performance.avg_duration_ms ?? 0) / 60000)}min` : `${Math.round((performance.avg_duration_ms ?? 0) / 1000)}s`} color="text-purple-400" />
          <StatCard icon={Zap} label="Tokens" value={(performance.total_tokens ?? 0) > 1000 ? `${Math.round((performance.total_tokens ?? 0) / 1000)}k` : String(performance.total_tokens ?? 0)} color="text-yellow-400" />
          <StatCard icon={DollarSign} label="Custo" value={`$${(performance.total_cost_usd ?? 0).toFixed(2)}`} color="text-orange-400" />
        </div>
      </div>

      {/* Recent Tasks */}
      {performance.recent_tasks && performance.recent_tasks.length > 0 && (
        <div className="space-y-2">
          <p className="text-[10px] text-gray-600 uppercase tracking-wider font-semibold">Ultimas Tasks</p>
          <div className="space-y-1">
            {performance.recent_tasks.map(task => (
              <div key={task.id} className="neu-inset rounded-lg px-3 py-2">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase ${
                    task.status === 'completed' ? 'text-emerald-400' : task.status === 'failed' ? 'text-red-400' : 'text-gray-500'
                  }`}>{task.status}</span>
                  <span className="text-[10px] text-gray-600">
                    {task.duration_ms > 0 ? `${Math.round(task.duration_ms / 1000)}s` : '-'}
                  </span>
                </div>
                <p className="text-[10px] text-gray-400 truncate mt-0.5">{task.input_prompt.substring(0, 60)}</p>
                {task.output_text && (
                  <p className="text-[10px] text-gray-600 truncate mt-0.5 italic">
                    {task.output_text.substring(0, 80)}...
                  </p>
                )}
                {task.error_message && (
                  <p className="text-[10px] text-red-400/70 truncate mt-0.5">
                    {task.error_message.substring(0, 80)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ icon: Icon, label, value, color }: {
  icon: typeof CheckCircle; label: string; value: string; color: string;
}) {
  return (
    <div className="neu-inset rounded-lg px-2.5 py-2">
      <div className="flex items-center gap-1">
        <Icon className={`w-3 h-3 ${color}`} />
        <span className="text-[10px] text-gray-500">{label}</span>
      </div>
      <p className={`text-sm font-bold ${color} mt-0.5`}>{value}</p>
    </div>
  );
}
