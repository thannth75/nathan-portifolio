import {
  BarChart3,
  Bot,
  Briefcase,
  Code2,
  FolderKanban,
  LayoutDashboard,
  MessageSquare,
  PiggyBank,
  Shield,
  Ticket,
  User,
} from 'lucide-react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import type { ContactItem, NavItem, ProjectItem, ResumeItem, SkillCard } from '../types'
import { CV_URL, GITHUB_URL, LINKEDIN_URL, PROFILE, WHATSAPP_URL } from './links'

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About', icon: User },
  { id: 'resume', label: 'Resume', icon: Briefcase },
  { id: 'portfolio', label: 'Portfolio', icon: FolderKanban },
  { id: 'contact', label: 'Contact', icon: MessageSquare },
]

export const ROLES = ['Analista de Dados', 'Governança de Dados', 'Full Stack Developer']

export const SKILL_CARDS: SkillCard[] = [
  {
    title: 'Data Analytics',
    description: 'Power BI, SQL, Excel avançado, indicadores e dashboards executivos.',
    icon: BarChart3,
  },
  {
    title: 'Data Governance',
    description: 'Governança de dados, LGPD, segurança da informação e controle de acessos.',
    icon: Shield,
  },
  {
    title: 'Automation',
    description: 'Power Automate, Python, automação de processos e organização de dados.',
    icon: Bot,
  },
  {
    title: 'Web Development',
    description: 'React, TypeScript, Tailwind e interfaces modernas para soluções digitais.',
    icon: Code2,
  },
]

export const RESUME_ITEMS: ResumeItem[] = [
  {
    period: 'mai/2026 — Atual',
    title: 'Auxiliar de Monitoramento III',
    company: 'Grupo Golden Sat',
    subtitle: 'Monitoramento em tempo real • Relatórios • Gerenciamento de risco',
  },
  {
    period: 'mar/2026 — jun/2026',
    title: 'Assistente de Logística I',
    company: 'DHL Supply Chain',
    subtitle: 'Controle de dados • Indicadores • Melhoria contínua',
  },
  {
    period: 'set/2025 — dez/2025',
    title: 'Analista de Dados Júnior',
    company: 'Casale Equipamentos',
    subtitle: 'SAP • CRM • Indicadores • Automação de rotinas',
  },
  {
    period: 'ago/2023 — ago/2025',
    title: 'Estagiário em Governança de Dados',
    company: 'Serasa Experian',
    subtitle: 'Power Automate • LGPD • Validação de dados',
  },
  {
    period: 'ago/2022 — ago/2023',
    title: 'Aprendiz em Governança de Dados',
    company: 'Serasa Experian',
    subtitle: 'Padronização • Controle de dados • Melhoria contínua',
  },
  {
    period: 'Formação',
    title: 'Ciência da Computação',
    company: 'Centro Universitário UNINTER',
    subtitle: 'Bacharelado — Cursando',
  },
]

export const PROJECTS: ProjectItem[] = [
  {
    title: 'B&L Fio & Artes',
    tags: 'E‑commerce • Front‑end',
    icon: FolderKanban,
    href: 'https://belfiosearte.lovable.app',
    image: '/projects/belfiosearte.svg',
  },
  {
    title: 'Vida em Cristo',
    tags: 'Site Institucional • Conteúdo',
    icon: LayoutDashboard,
    href: 'https://vidaemcristo.lovable.app',
    image: '/projects/vidaemcristo.svg',
  },
  {
    title: 'Moto Express',
    tags: 'Landing • Serviços',
    icon: MessageSquare,
    href: 'https://nathan-moto-speedy.lovable.app',
    image: '/projects/nathan-moto-speedy.svg',
  },
  // Mantive os outros projetos como opcionais — eles serão filtrados pelo front-end se não tiverem href/image
  {
    title: 'Dashboard Executivo',
    tags: 'Power BI • SQL • Dados',
    icon: LayoutDashboard,
  },
  {
    title: 'Sistema de Chamados',
    tags: 'React • TypeScript • TI',
    icon: Ticket,
  },
  {
    title: 'CasaFlow',
    tags: 'Planner • Organização • IA',
    icon: MessageSquare,
  },
  {
    title: 'FinViva',
    tags: 'Finanças • Dashboard',
    icon: PiggyBank,
  },
]

export const CONTACT_ITEMS: ContactItem[] = [
  {
    label: 'Email',
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    icon: MdEmail,
  },
  {
    label: 'WhatsApp',
    value: PROFILE.phone,
    href: WHATSAPP_URL,
    icon: FaWhatsapp,
  },
  {
    label: 'LinkedIn',
    value: 'nathanpiresdantas',
    href: LINKEDIN_URL,
    icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    value: 'thannth75',
    href: GITHUB_URL,
    icon: FaGithub,
  },
]

export const SOCIAL_LINKS = [
  { href: GITHUB_URL, icon: FaGithub, label: 'GitHub' },
  { href: LINKEDIN_URL, icon: FaLinkedin, label: 'LinkedIn' },
  { href: WHATSAPP_URL, icon: FaWhatsapp, label: 'WhatsApp' },
]

export const CERTIFICATIONS = [
  {
    title: 'Lean Seis Sigma Yellow Belt',
    issuer: 'FM2S',
    hours: '24 horas',
    image: '/certs/lean_yellow.svg',
  },
  {
    title: 'Lean Seis Sigma White Belt',
    issuer: 'FM2S',
    hours: '8 horas',
    image: '/certs/lean_white.svg',
  },
  {
    title: 'Fundamentos da Gestão da Qualidade',
    issuer: 'FM2S',
    hours: '9 horas',
    image: '/certs/gestao_qualidade.svg',
  },
]

export { CV_URL, PROFILE }
