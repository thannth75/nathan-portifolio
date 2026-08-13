import { motion } from 'framer-motion'

export function AppLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="absolute inset-0 bg-grid opacity-20" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
        className="relative flex flex-col items-center gap-4"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-gold/15 blur-2xl" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-card avatar-glow">
            <span className="font-sora text-xl font-bold text-gold">NP</span>
          </div>
        </div>
        <p className="font-sora text-sm font-medium text-white">Nathan Pires Dantas</p>
        <p className="text-[11px] text-muted/60 font-inter">Carregando portfólio…</p>
      </motion.div>
    </motion.div>
  )
}
