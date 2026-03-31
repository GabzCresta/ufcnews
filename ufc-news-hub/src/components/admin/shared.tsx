import type { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

export function SectionHeader({ icon: Icon, title, description }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-ufc-red/10 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-ufc-red" />
      </div>
      <div>
        <h2 className="text-xl font-display uppercase text-white">{title}</h2>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
    </div>
  );
}
