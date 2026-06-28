import { motion } from 'framer-motion'
import { RESUME_ITEMS } from '../../data/content'
import { ResumeCard } from '../cards/ResumeCard'
import { Command } from '../ui/Command'
import { SectionTitle } from '../ui/SectionTitle'
import { Section } from '../layout/MainLayout'

const LANGUAGES = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Básico — em desenvolvimento' },
]

export function Resume() {
  return (
    <Section id="resume">
      <Command>$ git log --resume</Command>
      <SectionTitle>Resume</SectionTitle>

      <div className="mt-7 flex flex-col gap-3.5">
        {RESUME_ITEMS.map((item, index) => (
          <ResumeCard
            key={`${item.company}-${item.title}`}
            period={item.period}
            title={item.title}
            company={item.company}
            subtitle={item.subtitle}
            index={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <p className="font-mono text-xs text-gold/70 mb-3">$ locale --list</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {LANGUAGES.map((lang) => (
            <div
              key={lang.name}
              className="glass-card rounded-xl border border-border px-4 py-3 flex items-center justify-between"
            >
              <span className="text-sm text-white font-inter">{lang.name}</span>
              <span className="text-xs text-muted font-inter">{lang.level}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
