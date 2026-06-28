import { motion } from 'framer-motion'

const TECH_STACK = [
  'Power BI',
  'SQL',
  'Excel',
  'Python',
  'Power Automate',
  'Splunk',
  'SAP',
  'React',
  'TypeScript',
  'LGPD',
]

export function TechStack() {
  return (
    <div className="mt-8">
      <p className="font-mono text-xs text-gold/70 mb-3">$ skills --list</p>
      <div className="flex flex-wrap gap-2">
        {TECH_STACK.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            whileHover={{ scale: 1.05, borderColor: 'rgba(214, 178, 94, 0.35)' }}
            className="inline-flex rounded-lg border border-border bg-card/50 px-3 py-1.5 text-xs text-muted font-inter transition-colors hover:text-gold/90"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  )
}
