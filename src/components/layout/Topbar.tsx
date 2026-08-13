import { motion } from 'framer-motion'
import { NAV_ITEMS } from '../../data/content'
import type { SectionId } from '../../types'

interface TopbarProps {
  activeSection: SectionId
  onNavigate: (id: SectionId) => void
}

export function Topbar({ activeSection, onNavigate }: TopbarProps) {
  return (
    <nav
      className="flex items-center gap-1 overflow-x-auto rounded-xl border border-border/80 bg-card/40 p-1 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Navegação principal"
    >
      {NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.id
        const Icon = item.icon

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            aria-current={isActive ? 'page' : undefined}
            className="relative flex shrink-0 items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 text-[12px] sm:text-[13px] font-medium font-inter transition-colors duration-300 cursor-pointer border-none bg-transparent min-h-[44px]"
          >
            {isActive && (
              <motion.span
                layoutId="activeTab"
                className="absolute inset-0 rounded-lg border border-gold/30 bg-gold/10 shadow-[inset_0_1px_0_rgba(214,178,94,0.15),0_0_16px_rgba(214,178,94,0.08)]"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              />
            )}
            <Icon
              className={`relative z-10 h-3.5 w-3.5 shrink-0 transition-colors duration-300 ${
                isActive ? 'text-gold' : 'text-muted'
              }`}
            />
            <span
              className={`relative z-10 transition-colors duration-300 whitespace-nowrap ${
                isActive ? 'text-gold' : 'text-muted hover:text-white'
              }`}
            >
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
