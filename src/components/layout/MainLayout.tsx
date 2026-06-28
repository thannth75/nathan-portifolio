import { motion } from 'framer-motion'
import type { ReactNode, RefObject } from 'react'
import type { SectionId } from '../../types'
import { StatusBar } from '../ui/StatusBar'

interface MainLayoutProps {
  sidebar: ReactNode
  topbar: ReactNode
  children: ReactNode
  scrollRef: RefObject<HTMLElement | null>
  activeSection: SectionId
  scrollProgress: number
}

const SECTION_LABELS: Record<SectionId, string> = {
  about: 'about.md',
  resume: 'resume.log',
  portfolio: 'portfolio/',
  contact: 'contact.sh',
}

export function MainLayout({
  sidebar,
  topbar,
  children,
  scrollRef,
  activeSection,
  scrollProgress,
}: MainLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden lg:h-screen lg:overflow-hidden noise-overlay">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-background focus:font-inter focus:text-sm"
      >
        Ir para o conteúdo
      </a>

      <div className="pointer-events-none fixed inset-0 z-0">
        <img
          src="/background.png"
          alt=""
          aria-hidden="true"
          decoding="async"
          className="h-full w-full object-cover opacity-25 animate-bg-drift"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-blue-600/12 blur-[140px] animate-glow-pulse" />
        <div className="absolute -bottom-40 -right-40 h-[480px] w-[480px] rounded-full bg-purple-600/12 blur-[140px] animate-glow-pulse [animation-delay:2s]" />
        <div className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-gold/6 blur-[160px] animate-glow-pulse [animation-delay:4s]" />
      </div>

      <div className="relative z-10 mx-auto h-full max-w-[1480px] px-3 py-3 sm:px-4 sm:py-4 lg:px-6 lg:py-5 lg:h-full">
        <div className="flex h-full flex-col gap-3 sm:gap-4 lg:flex-row lg:gap-5">
          <div className="w-full lg:w-[300px] xl:w-[320px] lg:shrink-0 lg:h-full">
            {sidebar}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="panel-shell min-w-0 flex-1 flex flex-col lg:h-full lg:overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-border bg-card/20 px-5 py-3 shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57] shadow-[0_0_8px_rgba(255,95,87,0.35)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E] shadow-[0_0_8px_rgba(254,188,46,0.25)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840] shadow-[0_0_8px_rgba(40,200,64,0.25)]" />
              </div>
              <span className="font-mono text-[11px] text-muted/60 truncate max-w-[50%] text-right">
                ~/nathan/{SECTION_LABELS[activeSection]}
              </span>
            </div>

            <div className="sticky top-0 z-20 shrink-0 border-b border-border/50 bg-panel/90 backdrop-blur-xl px-5 pt-3 pb-3 lg:static lg:top-auto">
              {topbar}
            </div>

            <main
              ref={scrollRef}
              className="main-scroll flex-1 px-5 pb-6 lg:overflow-y-auto lg:overscroll-contain lg:px-8 lg:pb-8"
            >
              {children}
            </main>

            <StatusBar activeSection={activeSection} scrollProgress={scrollProgress} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function Section({
  id,
  children,
}: {
  id: SectionId
  children: ReactNode
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="scroll-mt-24 lg:scroll-mt-2 mb-16 last:mb-8"
    >
      {children}
    </motion.section>
  )
}
