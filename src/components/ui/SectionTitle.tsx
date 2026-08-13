import { motion } from 'framer-motion'

interface SectionTitleProps {
  children: string
  subtitle?: string
}

export function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <h2 className="font-sora text-2xl sm:text-3xl font-semibold text-white">{children}</h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-sm text-muted font-inter leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}
