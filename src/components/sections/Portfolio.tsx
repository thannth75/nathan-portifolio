import { PROJECTS } from '../../data/content'
import { ProjectCard } from '../cards/ProjectCard'
import { Command } from '../ui/Command'
import { SectionTitle } from '../ui/SectionTitle'
import { Section } from '../layout/MainLayout'

export function Portfolio() {
  const visibleProjects = PROJECTS.filter((p) => p.href || p.image)

  return (
    <Section id="portfolio">
      <Command>$ ls portfolio/</Command>
      <SectionTitle>Portfolio</SectionTitle>

      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleProjects.length > 0 ? (
          visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              tags={project.tags}
              icon={project.icon}
              index={index}
              href={project.href}
              image={project.image}
            />
          ))
        ) : (
          <p className="text-sm text-muted">Nenhum projeto disponível no momento.</p>
        )}
      </div>
    </Section>
  )
}
