'use client';

import { AdminAuthProvider } from '@/components/admin/AdminAuthContext';
import { DashboardLoginGate } from '@/components/admin/dashboard/DashboardLoginGate';
import { DashboardNav } from '@/components/admin/dashboard/DashboardNav';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthProvider>
      <DashboardLoginGate>
        <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
          {/* War Room background */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(210,10,10,0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(210,10,10,0.3) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }}
            />
            {/* Top-left red glow */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-ufc-red/[0.04] rounded-full blur-[120px]" />
            {/* Bottom-right subtle glow */}
            <div className="absolute -bottom-60 -right-60 w-[600px] h-[600px] bg-blue-500/[0.02] rounded-full blur-[150px]" />
            {/* Center accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ufc-red/[0.015] rounded-full blur-[200px]" />
            {/* Scan line animation */}
            <div className="absolute inset-0 opacity-[0.02] animate-scan" style={{
              background: 'linear-gradient(transparent 0%, rgba(210,10,10,0.1) 50%, transparent 100%)',
              backgroundSize: '100% 4px',
              animation: 'scan 8s linear infinite',
            }} />
          </div>
          <DashboardNav />
          <main className="ml-56 p-6 relative z-10">
            {children}
          </main>
          <style jsx global>{`
            @keyframes scan {
              0% { transform: translateY(-100%); }
              100% { transform: translateY(100vh); }
            }
          `}</style>
        </div>
      </DashboardLoginGate>
    </AdminAuthProvider>
  );
}
