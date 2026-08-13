import { useCallback, useEffect, useState } from 'react'
import type { SectionId } from '../types'

const SECTIONS: SectionId[] = [
  'about',
  'experience',
  'projects',
  'skills',
  'certifications',
  'contact',
]

function getRelativeTop(element: HTMLElement, container: HTMLElement | null) {
  if (!container) return element.getBoundingClientRect().top + window.scrollY

  return (
    element.getBoundingClientRect().top -
    container.getBoundingClientRect().top +
    container.scrollTop
  )
}

function useIsDesktopPanel() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches,
  )

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')

    const handleChange = () => setIsDesktop(media.matches)
    handleChange()

    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [])

  return isDesktop
}

export function useActiveSection(scrollRef: React.RefObject<HTMLElement | null>) {
  const [activeSection, setActiveSection] = useState<SectionId>('about')
  const [scrollProgress, setScrollProgress] = useState(0)
  const isDesktop = useIsDesktopPanel()

  const scrollToSection = useCallback(
    (id: SectionId) => {
      const element = document.getElementById(id)
      const container = scrollRef.current
      const useContainer = isDesktop && container

      if (!element) return

      if (useContainer) {
        const top = getRelativeTop(element, container) - 8
        container.scrollTo({ top, behavior: 'smooth' })
        return
      }

      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    [isDesktop, scrollRef],
  )

  const handleScroll = useCallback(() => {
    const container = scrollRef.current
    const useContainer = isDesktop && container
    const scrollTop = useContainer ? container.scrollTop : window.scrollY
    const offset = useContainer ? 100 : 140

    if (useContainer) {
      const maxScroll = container.scrollHeight - container.clientHeight
      setScrollProgress(maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0)
    } else {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0)
    }

    for (let i = SECTIONS.length - 1; i >= 0; i--) {
      const section = document.getElementById(SECTIONS[i])
      if (!section) continue

      const sectionTop = getRelativeTop(section, useContainer ? container : null)

      if (sectionTop <= scrollTop + offset) {
        setActiveSection(SECTIONS[i])
        return
      }
    }
  }, [isDesktop, scrollRef])

  useEffect(() => {
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    const container = scrollRef.current
    container?.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      container?.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll, scrollRef, isDesktop])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return
      }

      const currentIndex = SECTIONS.indexOf(activeSection)

      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault()
        scrollToSection(SECTIONS[Math.min(currentIndex + 1, SECTIONS.length - 1)])
      }

      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollToSection(SECTIONS[Math.max(currentIndex - 1, 0)])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeSection, scrollToSection])

  return { activeSection, scrollToSection, scrollProgress }
}
