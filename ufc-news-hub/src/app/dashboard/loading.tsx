export default function DashboardLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#1a1a2e] rounded-xl" />
        <div className="space-y-2">
          <div className="h-6 w-48 bg-[#1a1a2e] rounded-lg" />
          <div className="h-3 w-32 bg-[#1a1a2e] rounded" />
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="neu-card p-5 border border-[#1e1e2e] h-32">
            <div className="w-10 h-10 bg-[#1a1a2e] rounded-xl mb-3" />
            <div className="h-8 w-16 bg-[#1a1a2e] rounded-lg mb-2" />
            <div className="h-3 w-24 bg-[#1a1a2e] rounded" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="neu-card p-6 border border-[#1e1e2e] h-48" />
        <div className="neu-card p-6 border border-[#1e1e2e] h-48" />
      </div>
    </div>
  );
}
