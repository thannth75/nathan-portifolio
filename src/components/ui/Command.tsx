import { motion } from 'framer-motion'

interface CommandProps {
  children: string
}

export function Command({ children }: CommandProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-card/40 px-4 py-2 mb-5"
    >
      <span className="font-mono text-sm text-gold/90">{children}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="inline-block h-4 w-0.5 bg-gold/80"
      />
    </motion.div>
  )
}
