import { AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { About } from './components/sections/About'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'
import { Experience } from './components/sections/Experience'
import { Portfolio } from './components/sections/Portfolio'
import { Skills } from './components/sections/Skills'
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
    const timer = window.setTimeout(() => setIsReady(true), 700)
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
          <About onNavigate={scrollToSection} />
          <Experience />
          <Portfolio />
          <Skills />
          <Certifications />
          <Contact />
        </MainLayout>
      </div>
    </>
  )
}

export default App
