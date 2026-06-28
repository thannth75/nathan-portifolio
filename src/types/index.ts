import type { LucideIcon } from 'lucide-react'
import type { ComponentType } from 'react'
import type { IconType } from 'react-icons'

export type SectionId = 'about' | 'resume' | 'portfolio' | 'contact'

export interface NavItem {
  id: SectionId
  label: string
  icon: LucideIcon
}

export interface SkillCard {
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
}

export interface ResumeItem {
  period: string
  title: string
  company: string
  subtitle?: string
}

export interface ProjectItem {
  title: string
  tags: string
  icon: ComponentType<{ className?: string }>
}

export interface ContactItem {
  label: string
  value: string
  href: string
  icon: IconType
}
