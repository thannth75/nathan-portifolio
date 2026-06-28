import { motion } from 'framer-motion'
import { Download, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { CV_URL, PROFILE, ROLES, SOCIAL_LINKS } from '../../data/content'
import { Badge } from '../ui/Badge'
import { Divider } from '../ui/Divider'
import { WindowChrome } from '../ui/WindowChrome'

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  compact = false,
}: {
  icon: typeof MapPin
  label: string
  value: string
  href?: string
  compact?: boolean
}) {
  const content = (
    <div
      className={`flex items-center gap-3 rounded-xl transition-colors hover:bg-white/[0.03] ${
        compact ? 'px-1 py-1' : 'px-2 py-2'
      }`}
    >
      <div
        className={`flex shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold ${
          compact ? 'h-8 w-8' : 'h-9 w-9'
        }`}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 text-left">
        <p className="text-[11px] text-muted font-inter">{label}</p>
        <p className={`text-white font-inter truncate ${compact ? 'text-xs' : 'text-sm'}`}>
          {value}
        </p>
      </div>
    </div>
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

export function Sidebar() {
  const [avatarError, setAvatarError] = useState(false)

  return (
    <aside className="panel-shell flex flex-col overflow-hidden lg:h-full">
      <WindowChrome title="profile — Nathan Pires" variant="sidebar" />

      <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6 lg:overflow-y-auto lg:overscroll-contain">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-center text-center lg:items-center"
        >
          <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:items-center sm:text-left lg:flex-col lg:text-center">
            <div className="relative shrink-0 animate-float">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-gold/20 via-purple-500/10 to-blue-500/10 blur-xl" />
              {avatarError ? (
                <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 items-center justify-center rounded-full border-2 border-gold/30 bg-card avatar-glow">
                  <span className="font-sora text-2xl lg:text-3xl font-bold text-gold">NP</span>
                </div>
              ) : (
                <img
                  src="/avatar.png"
                  alt={PROFILE.name}
                  width={128}
                  height={128}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  onError={() => setAvatarError(true)}
                  className="relative h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 rounded-full border-2 border-gold/30 object-cover avatar-glow"
                />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="font-sora text-base sm:text-lg font-semibold text-white leading-snug">
                {PROFILE.name}
              </h1>
              <div className="mt-2 flex flex-wrap justify-center gap-1.5 sm:justify-start lg:justify-center">
                {ROLES.map((role) => (
                  <Badge key={role}>{role}</Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <Divider />

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-0 sm:gap-1 lg:gap-0">
          <ContactRow icon={MapPin} label="Localização" value={PROFILE.location} compact />
          <ContactRow
            icon={Mail}
            label="Email"
            value={PROFILE.email}
            href={`mailto:${PROFILE.email}`}
            compact
          />
          <ContactRow
            icon={Phone}
            label="WhatsApp"
            value={PROFILE.phone}
            href={SOCIAL_LINKS[2].href}
            compact
          />
        </div>

        <Divider />

        <div className="flex items-center justify-center gap-2.5">
          {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/60 text-muted transition-all duration-300 hover:border-gold/40 hover:text-gold hover:shadow-[0_0_20px_rgba(214,178,94,0.12)]"
            >
              <Icon className="h-4 w-4" />
            </motion.a>
          ))}
        </div>

        <motion.a
          href={CV_URL}
          download="Nathan_Pires_Dantas_Curriculo.pdf"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="mt-4 lg:mt-5 flex items-center justify-center gap-2 rounded-xl border border-gold/30 bg-gradient-to-r from-gold/10 to-gold/5 px-4 py-2.5 text-sm font-medium text-gold font-inter no-underline transition-all duration-300 hover:border-gold/50 hover:shadow-[0_0_24px_rgba(214,178,94,0.1)]"
        >
          <Download className="h-4 w-4" />
          Download CV
        </motion.a>

        <p className="mt-auto pt-4 lg:pt-6 text-center text-[11px] text-muted/50 font-inter">
          © 2026 Nathan
        </p>
      </div>
    </aside>
  )
}
