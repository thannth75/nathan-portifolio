import { Download, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  CV_URL,
  EDUCATION_ITEMS,
  EXPERIENCE_ITEMS,
  LANGUAGES,
} from '../../data/content'
import { ExperienceCard } from '../cards/ExperienceCard'
import { Section } from '../layout/MainLayout'
import { SectionTitle } from '../ui/SectionTitle'

export function Experience() {
  const serasaItems = EXPERIENCE_ITEMS.filter((item) => item.serasaGroup)

  return (
    <Section id="experience">
      <SectionTitle subtitle="Histórico profissional em ambientes corporativos de grande escala.">
        Experiência
      </SectionTitle>

      {serasaItems.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 rounded-2xl border border-gold/25 bg-gold/5 px-4 py-3 sm:px-5"
        >
          <p className="text-sm font-inter text-gold/90">
            <span className="font-medium text-gold">Serasa Experian</span> — progressão
            Aprendiz → Estagiário em Governança de Dados (ago/2022 – ago/2025)
          </p>
        </motion.div>
      )}

      <div className="mt-7 flex flex-col gap-3.5">
        {EXPERIENCE_ITEMS.map((item, index) => (
          <ExperienceCard
            key={`${item.company}-${item.title}`}
            period={item.period}
            title={item.title}
            company={item.company}
            context={item.context}
            highlight={item.highlight}
            index={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10"
      >
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="h-5 w-5 text-gold" />
          <h3 className="font-sora text-lg font-semibold text-white">Formação</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {EDUCATION_ITEMS.map((edu) => (
            <div
              key={edu.title}
              className="glass-card rounded-2xl border border-border p-5"
            >
              <h4 className="font-sora text-base font-semibold text-white">{edu.title}</h4>
              <p className="text-sm text-gold/80 font-inter mt-1">{edu.institution}</p>
              <p className="text-sm text-muted font-inter mt-1">{edu.status}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <h3 className="font-sora text-lg font-semibold text-white mb-3">Idiomas</h3>
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

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10 glass-card rounded-2xl border border-border p-6 sm:p-7"
      >
        <h3 className="font-sora text-lg font-semibold text-white">Currículo</h3>
        <p className="mt-2 text-sm text-muted font-inter leading-relaxed">
          Experiência profissional, formação e competências.
        </p>
        <a
          href={CV_URL}
          download="Nathan_Pires_Dantas_Curriculo.pdf"
          className="mt-4 inline-flex items-center gap-2 rounded-xl border border-gold/35 bg-gold/10 px-5 py-2.5 text-sm font-medium text-gold font-inter no-underline transition-all hover:border-gold/50 hover:bg-gold/15 min-h-[44px]"
        >
          <Download className="h-4 w-4" />
          Baixar currículo
        </a>
      </motion.div>
    </Section>
  )
}
