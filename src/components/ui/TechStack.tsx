import { motion } from 'framer-motion'
import { MAIN_TECH_STACK } from '../../data/techStack'
import { TechIcon } from './TechIcon'

export function TechStack() {
  return (
    <div className="mt-10">
      <motion.p
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-mono text-xs text-gold/70 mb-5"
      >
        $ skills --icons
      </motion.p>

      <div className="relative rounded-2xl border border-border bg-card/20 p-5 sm:p-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 cinematic-shimmer opacity-40" />
        <div className="relative flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-8 pb-2">
          {MAIN_TECH_STACK.map((id, index) => (
            <TechIcon key={id} id={id} index={index} size="lg" />
          ))}
        </div>
      </div>
    </div>
  )
}
