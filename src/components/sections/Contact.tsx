import { motion } from 'framer-motion'
import { CONTACT_ITEMS, PROFILE } from '../../data/content'
import { ContactCard } from '../cards/ContactCard'
import { Section } from '../layout/MainLayout'
import { SectionTitle } from '../ui/SectionTitle'

export function Contact() {
  return (
    <Section id="contact">
      <SectionTitle>Vamos conversar?</SectionTitle>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 max-w-2xl text-[15px] text-muted font-inter leading-relaxed"
      >
        {PROFILE.contactIntro}
      </motion.p>

      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {CONTACT_ITEMS.map((item, index) => (
          <ContactCard
            key={item.label}
            label={item.label}
            value={item.value}
            href={item.href}
            icon={item.icon}
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}
