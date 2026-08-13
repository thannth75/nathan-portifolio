import {
  Award,
  Bike,
  Briefcase,
  Church,
  Layers,
  MessageSquare,
  Palette,
  Sparkles,
  User,
  FolderKanban,
} from 'lucide-react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import type {
  CertificationItem,
  ContactItem,
  EducationItem,
  ExperienceItem,
  NavItem,
  ProjectItem,
  SkillCategory,
} from '../types'
import { CV_URL, GITHUB_URL, LINKEDIN_URL, PROFILE, WHATSAPP_URL } from './links'

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'Sobre', icon: User },
  { id: 'experience', label: 'Experiência', icon: Briefcase },
  { id: 'projects', label: 'Projetos', icon: FolderKanban },
  { id: 'skills', label: 'Competências', icon: Layers },
  { id: 'certifications', label: 'Certificações', icon: Award },
  { id: 'contact', label: 'Contato', icon: MessageSquare },
]

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    period: 'mai/2026 – Atual',
    title: 'Auxiliar de Monitoramento III',
    company: 'Grupo Golden Sat',
    context: 'Monitoramento em tempo real, relatórios operacionais e gestão de risco.',
  },
  {
    period: 'mar/2026 – jun/2026',
    title: 'Assistente de Logística I',
    company: 'DHL Supply Chain',
    context: 'Controle de dados logísticos, indicadores e melhoria contínua em operações.',
  },
  {
    period: 'set/2025 – dez/2025',
    title: 'Analista de Dados Júnior',
    company: 'Casale Equipamentos',
    context: 'Indicadores, SAP e CRM, automação de rotinas e análise de informações.',
  },
  {
    period: 'ago/2023 – ago/2025',
    title: 'Estagiário em Governança de Dados',
    company: 'Serasa Experian',
    context: 'Power Automate, LGPD, validação e governança de dados corporativos.',
    highlight: true,
    serasaGroup: true,
  },
  {
    period: 'ago/2022 – ago/2023',
    title: 'Aprendiz em Governança de Dados',
    company: 'Serasa Experian',
    context: 'Padronização de dados, controle de qualidade e melhoria contínua.',
    highlight: true,
    serasaGroup: true,
  },
  {
    period: 'fev/2021 – jul/2021',
    title: 'Jovem Aprendiz – Manutenção Eletroeletrônica',
    company: 'Piccin Máquinas Agrícolas',
    context: 'Base técnica em manutenção e disciplina operacional em ambiente industrial.',
  },
  {
    period: 'jul/2018 – jul/2020',
    title: 'Jovem Aprendiz – Mecânica de Manutenção',
    company: 'Honda Automóveis do Brasil',
    context: 'Formação inicial em processos industriais, qualidade e trabalho em equipe.',
  },
]

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    institution: 'Centro Universitário ETEP',
    status: 'Cursando',
  },
  {
    title: 'Extensão em Inteligência Artificial',
    institution: 'Centro Universitário ETEP',
    status: 'Cursando',
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Dados',
    skills: ['Power BI', 'Excel Avançado', 'SQL', 'Indicadores', 'Análise de Informações'],
  },
  {
    title: 'Governança',
    skills: [
      'Governança de Dados',
      'LGPD',
      'Qualidade de Dados',
      'Segurança da Informação',
    ],
  },
  {
    title: 'Processos',
    skills: [
      'Melhoria Contínua',
      'Automação de Processos',
      'Lean Six Sigma',
      'Processos e Operações',
      'SAP',
    ],
  },
  {
    title: 'Tecnologia',
    skills: ['Python', 'React', 'TypeScript', 'Git/GitHub', 'APIs', 'Power Automate'],
  },
]

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Arte em Crochê K&B',
    slug: 'arte-em-croche-kb',
    category: 'web',
    categoryLabel: 'Web / Sistemas',
    problem:
      'Presença digital limitada para um negócio de artesanato, sem catálogo visual organizado.',
    solution:
      'Site institucional com catálogo de produtos, identidade visual artesanal e navegação responsiva.',
    href: 'https://arteemcrochekeb.lovable.app',
    icon: Palette,
    tools: ['react', 'typescript', 'tailwind'],
    accent: 'from-amber-500/20 via-orange-600/10 to-gold/10',
  },
  {
    title: 'Vida em Cristo',
    slug: 'vida-em-cristo',
    category: 'web',
    categoryLabel: 'Web / Sistemas',
    problem:
      'Comunidade religiosa sem canal digital centralizado para conteúdo, eventos e comunicação.',
    solution:
      'Plataforma digital com estrutura de conteúdo, eventos e presença online consistente.',
    href: 'https://vidaemcristo.lovable.app',
    icon: Church,
    tools: ['react', 'typescript', 'tailwind'],
    accent: 'from-blue-500/20 via-indigo-600/10 to-purple-500/10',
  },
  {
    title: 'Moto Express',
    slug: 'moto-express',
    category: 'web',
    categoryLabel: 'Web / Sistemas',
    problem:
      'Serviço de delivery precisava de landing page clara para conversão e comunicação de valor.',
    solution:
      'Landing page focada em velocidade, clareza de oferta e experiência mobile-first.',
    href: 'https://nathan-moto-speedy.lovable.app',
    icon: Bike,
    tools: ['react', 'typescript', 'tailwind'],
    accent: 'from-red-500/20 via-orange-600/10 to-amber-500/10',
  },
  {
    title: 'Natha Digital Studio',
    slug: 'natha-digital-studio',
    category: 'web',
    categoryLabel: 'Web / Sistemas',
    problem:
      'Estúdio digital precisava de presença online profissional para apresentar serviços e portfolio.',
    solution:
      'Site institucional com identidade visual moderna, seções de serviços e experiência responsiva.',
    href: 'https://natha-digital-studio.lovable.app',
    icon: Sparkles,
    tools: ['react', 'typescript', 'tailwind'],
    accent: 'from-violet-500/20 via-purple-600/10 to-indigo-500/10',
  },
]

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Lean Six Sigma Yellow Belt',
    issuer: 'FM2S',
    pdfUrl: '/certs/lean-six-sigma-yellow-belt.pdf',
  },
  {
    title: 'Lean Six Sigma White Belt',
    issuer: 'FM2S',
    pdfUrl: '/certs/lean-six-sigma-white-belt.pdf',
  },
  {
    title: 'Fundamentos da Gestão da Qualidade',
    issuer: 'FM2S',
    pdfUrl: '/certs/fundamentos-gestao-qualidade.pdf',
  },
]

export const CONTACT_ITEMS: ContactItem[] = [
  {
    label: 'E-mail',
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

export const LANGUAGES = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Básico — em desenvolvimento' },
]

export { CV_URL, PROFILE }
