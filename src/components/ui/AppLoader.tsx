import { motion } from 'framer-motion'

export function AppLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center gap-5"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-gold/20 blur-2xl" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/30 bg-card avatar-glow">
            <span className="font-sora text-2xl font-bold text-gold">NP</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="font-sora text-sm font-medium text-white">Nathan Pires Dantas</p>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F57]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
          </div>
          <p className="font-mono text-[11px] text-muted/60">loading portfolio...</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
