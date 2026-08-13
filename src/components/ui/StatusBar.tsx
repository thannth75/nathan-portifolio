import { useEffect, useState } from 'react'
import type { SectionId } from '../../types'

interface StatusBarProps {
  activeSection: SectionId
  scrollProgress: number
}

const SECTION_NAMES: Record<SectionId, string> = {
  about: 'Sobre',
  experience: 'Experiência',
  projects: 'Projetos',
  skills: 'Competências',
  certifications: 'Certificações',
  contact: 'Contato',
}

function useClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        }).format(new Date()),
      )
    }

    update()
    const interval = window.setInterval(update, 30_000)
    return () => window.clearInterval(interval)
  }, [])

  return time
}

export function StatusBar({ activeSection, scrollProgress }: StatusBarProps) {
  const time = useClock()

  return (
    <div className="shrink-0 border-t border-border bg-card/30 px-4 py-2.5 sm:px-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-[10px] sm:text-[11px] text-muted/70 font-inter truncate">
            {SECTION_NAMES[activeSection]}
          </span>
        </div>

        <div className="hidden md:block text-[10px] text-muted/50 font-inter shrink-0">
          {time} · São Carlos
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden sm:flex h-1 w-20 lg:w-24 rounded-full bg-border overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-gold/60 to-gold transition-[width] duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <span className="text-[10px] text-muted/50 w-8 text-right font-inter">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      </div>
    </div>
  )
}
