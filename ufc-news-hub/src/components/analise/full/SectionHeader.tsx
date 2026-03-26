interface SectionHeaderProps {
  number: string;
  title: string;
  accent: string;
}

export function SectionHeader({ number, title, accent }: SectionHeaderProps) {
  return (
    <div className="mb-10 flex items-center gap-5">
      {/* Number with glow */}
      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 rounded-2xl bg-ufc-red/10 blur-xl" />
        <span className="relative font-display text-5xl md:text-7xl leading-none text-ufc-red/20">
          {number}
        </span>
      </div>

      {/* Title + accent line */}
      <div className="flex-1">
        <h2 className="font-display text-xl md:text-2xl lg:text-3xl uppercase leading-tight text-white">
          {title}{' '}
          <span className="bg-gradient-to-r from-ufc-red to-red-400 bg-clip-text text-transparent">{accent}</span>
        </h2>
        <div className="mt-2 h-[2px] w-full bg-gradient-to-r from-ufc-red/60 via-ufc-red/20 to-transparent rounded-full" />
      </div>
    </div>
  );
}
