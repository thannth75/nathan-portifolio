import { motion } from 'framer-motion'

interface ResumeCardProps {
  period: string
  title: string
  company: string
  subtitle?: string
  index?: number
}

export function ResumeCard({
  period,
  title,
  company,
  subtitle,
  index = 0,
}: ResumeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{
        y: -4,
        scale: 1.01,
        borderColor: 'rgba(214, 178, 94, 0.4)',
      }}
      className="glass-card relative rounded-2xl border border-border p-5 sm:p-6 transition-colors duration-300"
    >
      <div className="absolute left-0 top-5 bottom-5 w-0.5 rounded-full bg-gradient-to-b from-gold/60 to-gold/10" />
      <div className="pl-4">
        <span className="font-mono text-xs text-gold">{period}</span>
        <h3 className="font-sora text-base sm:text-lg font-semibold text-white mt-1">{title}</h3>
        <p className="text-sm text-gold/80 font-inter mt-0.5">{company}</p>
        {subtitle && (
          <p className="text-sm text-muted font-inter mt-1.5 leading-relaxed">{subtitle}</p>
        )}
      </div>
    </motion.div>
  )
}
