interface BadgeProps {
  children: string
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-lg border border-gold/15 bg-gold/10 px-2.5 py-1 text-[11px] font-medium text-gold/90 font-inter">
      {children}
    </span>
  )
}
