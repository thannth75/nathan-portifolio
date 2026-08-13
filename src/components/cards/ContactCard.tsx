import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import type { IconType } from 'react-icons'

interface ContactCardProps {
  label: string
  value: string
  href: string
  icon: IconType
  index?: number
}

export function ContactCard({ label, value, href, icon: Icon, index = 0 }: ContactCardProps) {
  const isExternal = href.startsWith('http')

  return (
    <motion.a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{
        y: -4,
        scale: 1.01,
        borderColor: 'rgba(214, 178, 94, 0.4)',
      }}
      className="glass-card group flex items-center gap-4 rounded-2xl border border-border p-5 no-underline transition-colors duration-300"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold text-xl">
        <Icon />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-muted font-inter">{label}</p>
        <p className="text-sm text-white font-inter truncate">{value}</p>
      </div>
      {isExternal && (
        <ExternalLink className="h-4 w-4 shrink-0 text-muted/40 transition-colors group-hover:text-gold/70" />
      )}
    </motion.a>
  )
}
