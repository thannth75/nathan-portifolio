import { motion } from 'framer-motion'

interface ExperienceCardProps {
  period: string
  title: string
  company: string
  context: string
  highlight?: boolean
  index?: number
}

export function ExperienceCard({
  period,
  title,
  company,
  context,
  highlight = false,
  index = 0,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{
        y: -3,
        borderColor: highlight ? 'rgba(214, 178, 94, 0.45)' : 'rgba(214, 178, 94, 0.35)',
      }}
      className={`glass-card relative rounded-2xl border p-5 sm:p-6 transition-colors duration-300 ${
        highlight ? 'border-gold/30 bg-gold/[0.03]' : 'border-border'
      }`}
    >
      <div
        className={`absolute left-0 top-5 bottom-5 w-0.5 rounded-full ${
          highlight
            ? 'bg-gradient-to-b from-gold to-gold/30'
            : 'bg-gradient-to-b from-gold/60 to-gold/10'
        }`}
      />
      <div className="pl-4">
        <span className="text-xs text-gold font-inter">{period}</span>
        <h3 className="font-sora text-base sm:text-lg font-semibold text-white mt-1">{title}</h3>
        <p className="text-sm text-gold/80 font-inter mt-0.5">{company}</p>
        <p className="text-sm text-muted font-inter mt-1.5 leading-relaxed">{context}</p>
      </div>
    </motion.div>
  )
}
