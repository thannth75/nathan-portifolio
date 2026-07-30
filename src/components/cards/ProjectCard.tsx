import { motion } from 'framer-motion'
import type { ComponentType } from 'react'

interface ProjectCardProps {
  title: string
  tags?: string
  icon?: ComponentType<{ className?: string; strokeWidth?: number }>
  index?: number
  href?: string
  image?: string
}

export function ProjectCard({ title, tags = '', icon: Icon, index = 0, href, image }: ProjectCardProps) {
  const CardInner = (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{
          y: -6,
          scale: 1.01,
          borderColor: 'rgba(214, 178, 94, 0.45)',
        }}
        className="glass-card group relative overflow-hidden rounded-3xl border border-border transition-colors duration-300"
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-gold/5 via-transparent to-purple-500/5" />

        <div className="relative flex h-40 sm:h-44 items-center justify-center bg-gradient-to-br from-[#1a1a24] via-[#202030] to-[#1a1828]">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />

          {image ? (
            <img src={image} alt={title} className="object-cover h-full w-full" />
          ) : (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 4 }}
              transition={{ type: 'spring', stiffness: 280, damping: 18 }}
              className="relative flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold shadow-[0_8px_32px_rgba(214,178,94,0.12)]"
            >
              {Icon && <Icon className="h-9 w-9" strokeWidth={1.5} />}
            </motion.div>
          )}
        </div>

        <div className="relative p-5 sm:p-6">
          <h3 className="font-sora text-lg sm:text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-muted font-inter mt-1.5">{tags}</p>

          {href || image ? (
            href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center rounded-xl border border-gold/25 bg-gold/10 px-3.5 py-1.5 text-xs font-medium text-gold font-inter"
              >
                Abrir
              </a>
            ) : null
          ) : (
            <span className="mt-4 inline-flex items-center rounded-xl border border-gold/25 bg-gold/10 px-3.5 py-1.5 text-xs font-medium text-gold font-inter">
              Em breve
            </span>
          )}
        </div>
      </motion.div>
    </>
  )

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {CardInner}
    </a>
  ) : (
    CardInner
  )
}
