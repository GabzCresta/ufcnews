'use client';

interface ReelProgressProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

export function ReelProgress({ total, current, onDotClick }: ReelProgressProps) {
  if (total <= 1) return null;

  const maxDots = 10;
  const showDots = total <= maxDots;

  return (
    <>
      {/* Mobile: vertical dots on right side */}
      <div className="absolute right-2 top-1/2 z-20 -translate-y-1/2 flex flex-col items-center gap-1.5 md:hidden">
        {showDots ? (
          Array.from({ length: total }, (_, i) => (
            <button
              key={i}
              onClick={() => onDotClick(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'h-3 w-1.5 bg-ufc-red'
                  : 'h-1.5 w-1.5 bg-white/30'
              }`}
              aria-label={`Ir para notícia ${i + 1}`}
            />
          ))
        ) : (
          <span className="text-[10px] font-medium text-white/70 [writing-mode:vertical-lr]">
            {current + 1}/{total}
          </span>
        )}
      </div>

      {/* Desktop: horizontal dots below */}
      <div className="hidden md:flex items-center justify-center gap-1.5 py-3">
        {showDots ? (
          Array.from({ length: total }, (_, i) => (
            <button
              key={i}
              onClick={() => onDotClick(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'h-2.5 w-2.5 bg-ufc-red'
                  : 'h-2 w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Ir para notícia ${i + 1}`}
            />
          ))
        ) : (
          <span className="text-xs font-medium text-dark-textMuted">
            {current + 1} / {total}
          </span>
        )}
      </div>
    </>
  );
}
