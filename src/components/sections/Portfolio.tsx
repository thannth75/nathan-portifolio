import { PROJECTS } from '../../data/content'
import { getProjectPreviewPath } from '../../data/projectPreviewSources'
import { ProjectCard } from '../cards/ProjectCard'
import { Section } from '../layout/MainLayout'
import { SectionTitle } from '../ui/SectionTitle'

export function Portfolio() {
  return (
    <Section id="projects">
      <SectionTitle subtitle="Projetos reais e demonstráveis — soluções aplicadas a problemas concretos.">
        Projetos
      </SectionTitle>

      <p className="mt-4 max-w-2xl text-sm text-muted font-inter leading-relaxed">
        Seleção de projetos que demonstram capacidade de execução em web e sistemas,
        complementando minha atuação em processos, dados e operações.
      </p>

      <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            categoryLabel={project.categoryLabel}
            problem={project.problem}
            solution={project.solution}
            href={project.href}
            icon={project.icon}
            tools={project.tools}
            accent={project.accent}
            preview={getProjectPreviewPath(project.slug)}
            image={project.image}
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}
