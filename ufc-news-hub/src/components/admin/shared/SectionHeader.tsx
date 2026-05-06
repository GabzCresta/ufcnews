import type { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  accent?: string;
  description?: string;
}

export function SectionHeader({ icon: Icon, title, accent, description }: SectionHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-ufc-red/10 rounded-lg flex items-center justify-center">
          <Icon className="w-4 h-4 text-ufc-red" />
        </div>
        <h2 className="font-display text-xl uppercase tracking-wide text-white">
          {title}
          {accent && <span className="text-ufc-red ml-2">{accent}</span>}
        </h2>
      </div>
      {description && (
        <p className="text-sm text-gray-400 mt-2 ml-11">{description}</p>
      )}
    </div>
  );
}
