import { Download, ExternalLink, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { CV_URL, LINKEDIN_URL, PROFILE } from '../../data/links'
import type { SectionId } from '../../types'
import { Section } from '../layout/MainLayout'
import { SectionTitle } from '../ui/SectionTitle'

interface AboutProps {
  onNavigate: (id: SectionId) => void
}

export function About({ onNavigate }: AboutProps) {
  return (
    <Section id="about">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
        <div className="flex-1 min-w-0 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-inter text-gold/80 tracking-wide uppercase">
              Profissional corporativo multidisciplinar
            </p>
            <h2 className="mt-3 font-sora text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold text-white leading-[1.15]">
              {PROFILE.name}
            </h2>
            <p className="mt-4 font-sora text-lg sm:text-xl text-white/90 leading-snug">
              {PROFILE.headline}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-2xl text-[15px] text-muted font-inter leading-relaxed"
          >
            {PROFILE.about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 flex flex-wrap gap-2.5"
          >
            <a
              href={CV_URL}
              download="Nathan_Pires_Dantas_Curriculo.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-gold/35 bg-gold/10 px-4 py-2.5 text-sm font-medium text-gold font-inter no-underline transition-all hover:border-gold/50 hover:bg-gold/15 min-h-[44px]"
            >
              <Download className="h-4 w-4" />
              Ver currículo
            </a>
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-4 py-2.5 text-sm font-medium text-white font-inter transition-all hover:border-gold/30 hover:bg-card min-h-[44px] cursor-pointer"
            >
              Ver projetos
            </button>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-4 py-2.5 text-sm font-medium text-white font-inter no-underline transition-all hover:border-gold/30 hover:bg-card min-h-[44px]"
            >
              <ExternalLink className="h-4 w-4" />
              LinkedIn
            </a>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-4 py-2.5 text-sm font-medium text-white font-inter transition-all hover:border-gold/30 hover:bg-card min-h-[44px] cursor-pointer"
            >
              <Mail className="h-4 w-4" />
              Entrar em contato
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto shrink-0 order-1 lg:order-2"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-500/15 via-gold/10 to-blue-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-card/40 p-1 shadow-[0_0_40px_rgba(214,178,94,0.08)]">
            <img
              src="/hero.png"
              alt={`${PROFILE.name} — profissional de processos, dados e tecnologia`}
              width={256}
              height={256}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 object-cover object-top rounded-xl"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12"
      >
        <SectionTitle subtitle="Trajetória, evolução e atuação entre negócio, processos e tecnologia.">
          Sobre
        </SectionTitle>
        <p className="mt-4 max-w-2xl text-[15px] text-muted font-inter leading-relaxed">
          Minha carreira começou em ambientes industriais de alta exigência — Honda e Piccin —
          onde desenvolvi disciplina operacional e visão de processo. Na Serasa Experian,
          evolui de Aprendiz a Estagiário em Governança de Dados, consolidando experiência em
          qualidade de dados, LGPD e automação corporativa. Posteriormente, ampliei minha atuação
          em análise de dados, logística e monitoramento operacional, sempre conectando
          informação, processo e resultado. Hoje, complemento essa base com formação em
          tecnologia e inteligência artificial, aplicando desenvolvimento web como prova de
          capacidade de execução.
        </p>
      </motion.div>
    </Section>
  )
}
