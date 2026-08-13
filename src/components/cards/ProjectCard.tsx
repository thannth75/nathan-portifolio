import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import type { ComponentType } from 'react'
import { TechIconRow } from '../ui/TechIcon'

interface ProjectCardProps {
  title: string
  categoryLabel: string
  problem: string
  solution: string
  href: string
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  tools: string[]
  accent: string
  preview?: string
  image?: string
  index?: number
}

export function ProjectCard({
  title,
  categoryLabel,
  problem,
  solution,
  href,
  icon: Icon,
  tools,
  accent,
  preview,
  image,
  index = 0,
}: ProjectCardProps) {
  const [previewFailed, setPreviewFailed] = useState(false)
  const [staticImageFailed, setStaticImageFailed] = useState(false)

  const imageSrc =
    preview && !previewFailed
      ? preview
      : image && !staticImageFailed
        ? image
        : null

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="glass-card group relative flex flex-col overflow-hidden rounded-2xl border border-border transition-colors duration-300 hover:border-gold/35"
    >
      <div className="relative flex h-36 sm:h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-[#14141c] via-[#1c1c28] to-[#12121a]">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`Preview do projeto ${title}`}
            loading="lazy"
            decoding="async"
            onError={() => {
              if (preview && !previewFailed && imageSrc === preview) {
                setPreviewFailed(true)
                return
              }
              setStaticImageFailed(true)
            }}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        ) : null}
        <div className={`absolute inset-0 bg-gradient-to-br ${accent} ${imageSrc ? 'opacity-30' : 'opacity-50'}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        {!imageSrc && (
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-gold backdrop-blur-sm">
            <Icon className="h-8 w-8" strokeWidth={1.4} />
          </div>
        )}
      </div>

      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <span className="text-[11px] font-inter uppercase tracking-wide text-gold/70">
          {categoryLabel}
        </span>
        <h3 className="font-sora text-lg font-semibold text-white mt-1">{title}</h3>

        <div className="mt-4 space-y-3 text-sm font-inter leading-relaxed">
          <div>
            <p className="text-xs text-muted/80 uppercase tracking-wide mb-1">Problema</p>
            <p className="text-muted">{problem}</p>
          </div>
          <div>
            <p className="text-xs text-muted/80 uppercase tracking-wide mb-1">Solução</p>
            <p className="text-white/85">{solution}</p>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-border/60">
          <TechIconRow toolIds={tools} size="sm" />
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-xl border border-gold/25 bg-gold/10 px-4 py-2.5 text-xs font-medium text-gold font-inter no-underline transition-all hover:bg-gold/15 min-h-[44px]"
        >
          Ver demonstração ao vivo
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.article>
  )
}
