'use client';

interface PipelineStep {
  name: string;
  status: 'pendente' | 'rodando' | 'concluido' | 'erro';
}

interface ProgressBarProps {
  steps: PipelineStep[];
  label?: string;
}

const STATUS_COLORS = {
  concluido: 'bg-emerald-500',
  rodando: 'bg-ufc-red animate-pulse',
  erro: 'bg-red-600',
  pendente: 'bg-gray-700',
};

const STATUS_DOT = {
  concluido: 'bg-emerald-500',
  rodando: 'bg-ufc-red ring-2 ring-ufc-red/30',
  erro: 'bg-red-600',
  pendente: 'bg-gray-600',
};

export function ProgressBar({ steps, label }: ProgressBarProps) {
  const completed = steps.filter(s => s.status === 'concluido').length;
  const total = steps.length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="space-y-3">
      {/* Barra de progresso */}
      <div className="flex items-center gap-3">
        {label && <span className="text-xs text-gray-400 shrink-0">{label}</span>}
        <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-ufc-red rounded-full transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="text-xs font-mono text-gray-300 shrink-0">
          {completed}/{total}
        </span>
      </div>

      {/* Steps individuais */}
      <div className="flex gap-1">
        {steps.map((step) => (
          <div key={step.name} className="flex-1 group relative">
            <div className={`h-1.5 rounded-full ${STATUS_COLORS[step.status]}`} />
            <div className="flex items-center gap-1.5 mt-1.5">
              <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${STATUS_DOT[step.status]}`} />
              <span className="text-[10px] text-gray-500 truncate">{step.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
