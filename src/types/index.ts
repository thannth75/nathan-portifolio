import type { LucideIcon } from 'lucide-react'
import type { ComponentType } from 'react'
import type { IconType } from 'react-icons'

export type SectionId =
  | 'about'
  | 'experience'
  | 'projects'
  | 'skills'
  | 'certifications'
  | 'contact'

export interface NavItem {
  id: SectionId
  label: string
  icon: LucideIcon
}

export interface ExperienceItem {
  period: string
  title: string
  company: string
  context: string
  highlight?: boolean
  serasaGroup?: boolean
}

export interface EducationItem {
  title: string
  institution: string
  status: string
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface ProjectItem {
  title: string
  slug: string
  category: 'web' | 'dados' | 'automacao' | 'profissional'
  categoryLabel: string
  problem: string
  solution: string
  href: string
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  tools: string[]
  accent: string
  /** Imagem estática opcional — fallback se o preview automático não existir */
  image?: string
}

export interface CertificationItem {
  title: string
  issuer: string
  pdfUrl: string
}

export interface ContactItem {
  label: string
  value: string
  href: string
  icon: IconType
}
