# Previews automáticos dos projetos

O portfólio gera screenshots dos sites dos projetos com Playwright e exibe nos cards.

## Como adicionar um novo projeto

1. Cadastre o projeto em `src/data/content.ts` (`PROJECTS`) com um `slug` único e a `href` (URL pública).
2. Adicione a mesma entrada em `src/data/projectPreviewSources.ts`:

```ts
{ slug: 'meu-projeto', url: 'https://meusite.com' },
```

3. Gere o preview:

```bash
npm run update-previews
```

O arquivo será salvo em `public/project-previews/meu-projeto.jpg`.

## Prioridade de imagem no card

1. Preview automático (`/project-previews/{slug}.jpg`)
2. Imagem estática opcional (`image` no cadastro do projeto)
3. Placeholder com ícone (fallback atual)

## Executar localmente

```bash
npm install
npx playwright install chromium
npm run update-previews
```

## GitHub Actions

Workflow: `.github/workflows/update-project-previews.yml`

- **Manual:** Actions → Update Project Previews → Run workflow
- **Automático:** a cada 6 horas (schedule)

O workflow **não** roda em `push` para evitar loop infinito quando faz commit das imagens.

## Onde os previews ficam

`public/project-previews/{slug}.jpg`

## Falhas

Se um site estiver offline ou lento, o script mantém o preview anterior e continua com os outros projetos.
