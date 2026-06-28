interface WindowChromeProps {
  title: string
  variant?: 'sidebar' | 'main'
}

export function WindowChrome({ title, variant = 'main' }: WindowChromeProps) {
  return (
    <div
      className={`flex items-center gap-3 border-b border-border px-5 py-3.5 shrink-0 ${
        variant === 'sidebar' ? 'bg-card/30' : 'bg-card/20'
      }`}
    >
      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57] shadow-[0_0_6px_rgba(255,95,87,0.4)]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E] shadow-[0_0_6px_rgba(254,188,46,0.3)]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840] shadow-[0_0_6px_rgba(40,200,64,0.3)]" />
      </div>
      <span className="flex-1 text-center text-xs font-medium text-muted/70 font-inter truncate pr-12">
        {title}
      </span>
    </div>
  )
}
