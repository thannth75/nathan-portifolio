import { ExternalLink, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import { CERTIFICATIONS } from '../../data/content'
import { Section } from '../layout/MainLayout'
import { SectionTitle } from '../ui/SectionTitle'

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionTitle subtitle="Certificações em qualidade e melhoria contínua.">
        Certificações
      </SectionTitle>

      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.a
            key={cert.title}
            href={cert.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass-card group block rounded-2xl border border-border p-5 sm:p-6 no-underline transition-colors hover:border-gold/35"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold mb-4">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="font-sora text-base font-semibold text-white group-hover:text-gold transition-colors">
              {cert.title}
            </h3>
            <p className="text-sm text-muted font-inter mt-1">{cert.issuer}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-gold font-inter">
              Ver certificação
              <ExternalLink className="h-3 w-3" />
            </span>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
