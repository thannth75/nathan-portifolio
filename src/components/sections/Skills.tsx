import { motion } from 'framer-motion'
import { SKILL_CATEGORIES } from '../../data/content'
import { Section } from '../layout/MainLayout'
import { SectionTitle } from '../ui/SectionTitle'

export function Skills() {
  return (
    <Section id="skills">
      <SectionTitle subtitle="Competências organizadas por área de atuação — sem níveis artificiais, com foco em experiência real.">
        Competências
      </SectionTitle>

      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SKILL_CATEGORIES.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass-card rounded-2xl border border-border p-5 sm:p-6"
          >
            <h3 className="font-sora text-base font-semibold text-gold">{category.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-border/80 bg-card/40 px-3 py-1.5 text-sm text-white/90 font-inter"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
