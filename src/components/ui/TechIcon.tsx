import { motion } from 'framer-motion'
import type { ComponentType } from 'react'
import type { IconType } from 'react-icons'
import { getTechTools } from '../../data/techStack'

interface TechIconProps {
  id: string
  index?: number
  size?: 'sm' | 'md' | 'lg'
}

const SIZE_MAP = {
  sm: { box: 'h-9 w-9', icon: 'h-4 w-4', text: 'text-[10px]' },
  md: { box: 'h-11 w-11', icon: 'h-5 w-5', text: 'text-[11px]' },
  lg: { box: 'h-14 w-14', icon: 'h-6 w-6', text: 'text-xs' },
}

export function TechIcon({ id, index = 0, size = 'md' }: TechIconProps) {
  const tool = getTechTools([id])[0]
  if (!tool) return null

  const Icon = tool.icon as IconType | ComponentType<{ className?: string }>
  const sizes = SIZE_MAP[size]

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.08 }}
      className="group relative flex flex-col items-center gap-1.5"
    >
      <div
        className={`${sizes.box} flex items-center justify-center rounded-xl border border-border bg-card/60 transition-all duration-300 group-hover:border-gold/30 group-hover:shadow-[0_0_24px_rgba(214,178,94,0.12)]`}
        style={{ color: tool.color }}
      >
        <Icon className={sizes.icon} />
      </div>
      <span
        className={`${sizes.text} font-inter text-muted/0 group-hover:text-muted/80 transition-colors duration-300 absolute -bottom-5 whitespace-nowrap pointer-events-none`}
      >
        {tool.name}
      </span>
    </motion.div>
  )
}

interface TechIconRowProps {
  toolIds: string[]
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function TechIconRow({ toolIds, size = 'sm', className = '' }: TechIconRowProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {toolIds.map((id, index) => (
        <TechIcon key={id} id={id} index={index} size={size} />
      ))}
    </div>
  )
}
