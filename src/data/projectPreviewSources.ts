export interface ProjectPreviewSource {
  slug: string
  url: string
}

/** URLs usadas pelo script de captura (Playwright). Manter sincronizado com PROJECTS em content.ts. */
export const PROJECT_PREVIEW_SOURCES: ProjectPreviewSource[] = [
  { slug: 'arte-em-croche-kb', url: 'https://arteemcrochekeb.lovable.app' },
  { slug: 'vida-em-cristo', url: 'https://vidaemcristo.lovable.app' },
  { slug: 'moto-express', url: 'https://nathan-moto-speedy.lovable.app' },
  { slug: 'natha-digital-studio', url: 'https://natha-digital-studio.lovable.app' },
]

export function getProjectPreviewPath(slug: string): string {
  return `/project-previews/${slug}.jpg`
}
