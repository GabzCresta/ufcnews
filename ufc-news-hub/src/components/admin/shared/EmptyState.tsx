import type { LucideIcon } from 'lucide-react';
import { Inbox } from 'lucide-react';

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ icon: Icon = Inbox, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-12 h-12 bg-[#1a1a2e] rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-gray-500" />
      </div>
      <h3 className="text-sm font-semibold text-gray-300 mb-1">{title}</h3>
      {description && <p className="text-xs text-gray-500 max-w-xs">{description}</p>}
      {action && (
        <button
          onClick={action.onClick}
          className="mt-4 px-4 py-2 text-xs font-medium text-white bg-ufc-red/20 hover:bg-ufc-red/30 border border-ufc-red/30 rounded-lg transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
