import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { PROFILE, SKILL_CARDS } from '../../data/content'
import { Command } from '../ui/Command'
import { TechStack } from '../ui/TechStack'
import { Section } from '../layout/MainLayout'

export function About() {
  return (
    <Section id="about">
      <Command>$ cat about.md</Command>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
        <div className="flex-1 min-w-0 order-2 lg:order-1">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sora text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-white leading-[1.15]"
          >
            Hello, I&apos;m{' '}
            <span className="bg-gradient-to-r from-gold via-[#E8C878] to-gold bg-clip-text text-transparent">
              Nathan
            </span>
            .
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 max-w-xl text-[15px] text-muted font-inter leading-relaxed"
          >
            {PROFILE.about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 hidden lg:flex items-center gap-2 text-muted/50"
          >
            <ChevronDown className="h-4 w-4 animate-float" />
            <span className="text-xs font-inter">Scroll para explorar</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto shrink-0 order-1 lg:order-2 lg:-mt-4 animate-float"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-500/20 via-gold/10 to-blue-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-gold/15 bg-card/40 p-1 shadow-[0_0_40px_rgba(214,178,94,0.08)]">
            <img
              src="/hero.png"
              alt="Nathan Pires — Developer"
              width={256}
              height={256}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 object-cover object-top rounded-xl"
            />
          </div>
        </motion.div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {SKILL_CARDS.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
            whileHover={{
              y: -4,
              scale: 1.01,
              borderColor: 'rgba(214, 178, 94, 0.4)',
            }}
            className="glass-card rounded-2xl border border-border p-5 transition-colors duration-300"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold mb-3.5">
              <card.icon className="h-5 w-5" />
            </div>
            <h3 className="font-sora text-base font-semibold text-white">{card.title}</h3>
            <p className="text-sm text-muted font-inter mt-1.5 leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>

      <TechStack />
    </Section>
  )
}
