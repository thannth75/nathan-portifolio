import { motion } from 'framer-motion'

interface SectionTitleProps {
  children: string
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-sora text-3xl sm:text-4xl font-semibold text-white"
      >
        {children}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-3 h-px w-16 origin-left bg-gradient-to-r from-gold/80 to-transparent"
      />
    </div>
  )
}
