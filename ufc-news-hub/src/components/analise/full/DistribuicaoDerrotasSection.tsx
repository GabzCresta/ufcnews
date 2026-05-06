import type { DistribuicaoDerrotasSectionData, LossMethodBreakdown } from '@/types/analise';

type DistribuicaoDerrotasFighter = { nome: string } & LossMethodBreakdown;

interface DistribuicaoDerrotasSectionProps {
  data: DistribuicaoDerrotasSectionData;
}

interface BarProps {
  label: string;
  method: { count: number; percent: number };
  colorClass: string;
}

function LossBar({ label, method, colorClass }: BarProps) {
  return (
    <div className="mb-3">
      <p className="text-xs uppercase tracking-wider text-dark-textMuted mb-1">{label}</p>
      <div className="flex items-center gap-3">
        <div className="h-4 w-full rounded-full bg-dark-border">
          <div
            className={`h-4 rounded-full ${colorClass}`}
            style={{ width: `${method.percent}%` }}
          />
        </div>
        <span className="text-sm text-dark-text whitespace-nowrap">
          {method.count} ({method.percent}%)
        </span>
      </div>
    </div>
  );
}

function FighterCard({ fighter, nameColor }: { fighter: DistribuicaoDerrotasFighter; nameColor: string }) {
  return (
    <div className="neu-card p-6">
      <h3 className={`font-display text-xl uppercase ${nameColor}`}>{fighter.nome}</h3>

      <div className="mt-4 mb-5">
        <p className="font-display text-4xl text-dark-text">{fighter.total_losses}</p>
        <p className="text-xs uppercase tracking-wider text-dark-textMuted mb-1">derrotas</p>
      </div>

      <LossBar label="KO/TKO" method={fighter.ko_tko} colorClass="bg-red-500" />
      <LossBar label="Finalizacao" method={fighter.submission} colorClass="bg-blue-500" />
      <LossBar label="Decisao" method={fighter.decision} colorClass="bg-yellow-500" />
    </div>
  );
}

export function DistribuicaoDerrotasSection({ data }: DistribuicaoDerrotasSectionProps) {
  return (
    <section>
      <p className="text-xs uppercase tracking-[0.2em] text-dark-textMuted mb-4">Derrotas</p>

      <div className="grid md:grid-cols-2 gap-6">
        <FighterCard fighter={data.fighter1} nameColor="text-ufc-red" />
        <FighterCard fighter={data.fighter2} nameColor="text-blue-400" />
      </div>

      <div className="neu-inset p-4 mt-6 text-sm text-dark-textMuted leading-relaxed">
        {data.insight}
      </div>
    </section>
  );
}
