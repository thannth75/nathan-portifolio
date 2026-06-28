import { AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Portfolio } from './components/sections/Portfolio'
import { Resume } from './components/sections/Resume'
import { MainLayout } from './components/layout/MainLayout'
import { Sidebar } from './components/layout/Sidebar'
import { Topbar } from './components/layout/Topbar'
import { AppLoader } from './components/ui/AppLoader'
import { useActiveSection } from './hooks/useActiveSection'

function App() {
  const [isReady, setIsReady] = useState(false)
  const scrollRef = useRef<HTMLElement>(null)
  const { activeSection, scrollToSection, scrollProgress } = useActiveSection(scrollRef)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), 900)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">{!isReady && <AppLoader key="loader" />}</AnimatePresence>

      <div
        className={`transition-opacity duration-500 ${isReady ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <MainLayout
          scrollRef={scrollRef}
          activeSection={activeSection}
          scrollProgress={scrollProgress}
          sidebar={<Sidebar />}
          topbar={
            <Topbar activeSection={activeSection} onNavigate={scrollToSection} />
          }
        >
          <About />
          <Resume />
          <Portfolio />
          <Contact />
        </MainLayout>
      </div>
    </>
  )
}

export default App
