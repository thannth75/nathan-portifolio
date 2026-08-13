import type { IconType } from 'react-icons'
import {
  SiMysql,
  SiPython,
  SiReact,
  SiSap,
  SiSplunk,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { BarChart3, Bot, Shield, Table } from 'lucide-react'
import type { ComponentType } from 'react'

export interface TechTool {
  id: string
  name: string
  icon: IconType | ComponentType<{ className?: string }>
  color: string
}

export const TECH_TOOLS: Record<string, TechTool> = {
  react: { id: 'react', name: 'React', icon: SiReact, color: '#61DAFB' },
  typescript: { id: 'typescript', name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  tailwind: { id: 'tailwind', name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  python: { id: 'python', name: 'Python', icon: SiPython, color: '#3776AB' },
  powerbi: { id: 'powerbi', name: 'Power BI', icon: BarChart3, color: '#F2C811' },
  sql: { id: 'sql', name: 'SQL', icon: SiMysql, color: '#4479A1' },
  excel: { id: 'excel', name: 'Excel', icon: Table, color: '#217346' },
  powerautomate: {
    id: 'powerautomate',
    name: 'Power Automate',
    icon: Bot,
    color: '#0078D4',
  },
  splunk: { id: 'splunk', name: 'Splunk', icon: SiSplunk, color: '#65A637' },
  sap: { id: 'sap', name: 'SAP', icon: SiSap, color: '#0FAAFF' },
  lgpd: { id: 'lgpd', name: 'LGPD & Governança', icon: Shield, color: '#D6B25E' },
}

export const MAIN_TECH_STACK = [
  'react',
  'typescript',
  'tailwind',
  'python',
  'powerbi',
  'sql',
  'excel',
  'powerautomate',
  'splunk',
  'sap',
  'lgpd',
] as const

export function getTechTools(ids: string[]) {
  return ids.map((id) => TECH_TOOLS[id]).filter(Boolean)
}
