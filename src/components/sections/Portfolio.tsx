import { PROJECTS } from '../../data/content'
import { ProjectCard } from '../cards/ProjectCard'
import { Command } from '../ui/Command'
import { SectionTitle } from '../ui/SectionTitle'
import { Section } from '../layout/MainLayout'

export function Portfolio() {
  return (
    <Section id="portfolio">
      <Command>$ ls portfolio/</Command>
      <SectionTitle>Portfolio</SectionTitle>

      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            tags={project.tags}
            icon={project.icon}
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}
