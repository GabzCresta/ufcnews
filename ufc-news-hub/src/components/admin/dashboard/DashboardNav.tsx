'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAdminAuth } from '../AdminAuthContext';
import {
  LayoutDashboard,
  GitBranch,
  FileText,
  Users,
  Wrench,
  BarChart3,
  Settings,
  ExternalLink,
  LogOut,
  type LucideIcon,
} from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

const NAV_ITEMS: NavItem[] = [
  { href: '/dashboard', label: 'Entregas', icon: LayoutDashboard },
  { href: '/dashboard/pipeline', label: 'Pipeline', icon: GitBranch },
  { href: '/dashboard/content', label: 'Conteudo', icon: FileText },
  { href: '/dashboard/clientes', label: 'Clientes', icon: Users },
  { href: '/dashboard/operations', label: 'Operacoes', icon: Wrench },
  { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

const EXTERNAL_LINKS = [
  { href: '/', label: 'crenas.site' },
  { href: '/arena', label: 'Arena' },
];

export function DashboardNav() {
  const pathname = usePathname();
  const { logout } = useAdminAuth();

  return (
    <aside className="fixed left-0 top-0 h-screen w-56 bg-[#0d0d14] border-r border-[#1e1e2e] flex flex-col z-40">
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 h-16 border-b border-[#1e1e2e] shrink-0">
        <div className="w-8 h-8 bg-ufc-red/20 rounded-lg flex items-center justify-center">
          <span className="text-ufc-red font-bold text-sm">C</span>
        </div>
        <div>
          <span className="font-display text-white text-lg tracking-wide">CRENAS</span>
          <span className="text-gray-600 text-xs">.site</span>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = item.href === '/dashboard'
            ? pathname === '/dashboard'
            : (pathname ?? '').startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              prefetch={true}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                transition-all duration-200 relative
                ${isActive
                  ? 'bg-ufc-red/10 text-ufc-red'
                  : 'text-gray-400 hover:text-white hover:bg-[#1a1a2e]'
                }
              `}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-ufc-red rounded-r" />
              )}
              <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-ufc-red' : ''}`} />
              <span className={`text-sm ${isActive ? 'font-semibold' : 'font-medium'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* External Links */}
      <div className="px-2 pb-2 border-t border-[#1e1e2e] pt-3">
        <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-gray-600 mb-2">
          Site Publico
        </p>
        {EXTERNAL_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-3 px-3 py-1.5 rounded-lg text-gray-500 hover:text-gray-300 hover:bg-[#1a1a2e] transition-colors text-xs"
          >
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            {link.label}
          </a>
        ))}
      </div>

      {/* Logout */}
      <div className="px-2 pb-4 border-t border-[#1e1e2e] pt-4">
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-500/5 transition-colors"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          <span className="text-sm">Sair</span>
        </button>
      </div>
    </aside>
  );
}
