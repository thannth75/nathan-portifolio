import { motion } from 'framer-motion'
import type { ComponentType } from 'react'

interface InfoCardProps {
  icon: ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
  index?: number
}

export function InfoCard({ icon: Icon, label, value, href, index = 0 }: InfoCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{
        y: -3,
        scale: 1.01,
        borderColor: 'rgba(214, 178, 94, 0.4)',
      }}
      className="glass-card flex items-center gap-3 rounded-2xl border border-border p-4 transition-colors duration-300"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted font-inter">{label}</p>
        <p className="text-sm text-white font-inter truncate">{value}</p>
      </div>
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} className="block no-underline">
        {content}
      </a>
    )
  }

  return content
}
