'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { SectionHeader, EmptyState } from '@/components/admin/shared';
import {
  Wrench,
  Shield,
  Trophy,
  Bot,
  Rss,
  Loader2,
} from 'lucide-react';

// Carrega cada tab só quando clicada (performance)
const CardMonitorSection = dynamic(
  () => import('@/components/admin/dashboard/sections/CardMonitorSection').then(m => ({ default: m.CardMonitorSection })),
  { loading: () => <TabLoading /> }
);

const AICompanySection = dynamic(
  () => import('@/components/admin/dashboard/sections/AICompanySection').then(m => ({ default: m.AICompanySection })),
  { loading: () => <TabLoading /> }
);

const ArenaAdminTab = dynamic(
  () => import('./ArenaAdminTab').then(m => ({ default: m.ArenaAdminTab })),
  { loading: () => <TabLoading /> }
);

const ScrapersTab = dynamic(
  () => import('./ScrapersTab').then(m => ({ default: m.ScrapersTab })),
  { loading: () => <TabLoading /> }
);

function TabLoading() {
  return (
    <div className="flex items-center justify-center h-48">
      <Loader2 className="w-5 h-5 animate-spin text-ufc-red" />
    </div>
  );
}

const TABS = [
  { id: 'card-monitor', label: 'Card Monitor', icon: Shield },
  { id: 'arena-admin', label: 'Arena Admin', icon: Trophy },
  { id: 'ai-company', label: 'AI Company', icon: Bot },
  { id: 'scrapers', label: 'Scrapers', icon: Rss },
] as const;

type TabId = typeof TABS[number]['id'];

export default function OperationsPage() {
  const [activeTab, setActiveTab] = useState<TabId>('card-monitor');

  return (
    <div className="space-y-6">
      <SectionHeader
        icon={Wrench}
        title="Centro de"
        accent="Operacoes"
        description="Card Monitor, Arena Admin, AI Company e Scrapers em um lugar so"
      />

      {/* Tabs */}
      <div className="flex gap-1 border-b border-[#1e1e2e] pb-0">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-t-lg transition-colors
                ${isActive
                  ? 'bg-[#1a1a2e] text-ufc-red border-b-2 border-ufc-red -mb-px'
                  : 'text-gray-500 hover:text-gray-300 hover:bg-[#0d0d14]'
                }
              `}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'card-monitor' && <CardMonitorSection />}
        {activeTab === 'arena-admin' && <ArenaAdminTab />}
        {activeTab === 'ai-company' && <AICompanySection />}
        {activeTab === 'scrapers' && <ScrapersTab />}
      </div>
    </div>
  );
}
