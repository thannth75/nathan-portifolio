import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import {
  PROJECT_PREVIEW_SOURCES,
  getProjectPreviewPath,
} from '../src/data/projectPreviewSources.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const PREVIEWS_DIR = join(ROOT, 'public', 'project-previews')

const VIEWPORT = { width: 1440, height: 900 }
const NAVIGATION_TIMEOUT_MS = 45_000
const WAIT_AFTER_LOAD_MS = 4_000
const CONTENT_WAIT_TIMEOUT_MS = 12_000

function hashBuffer(buffer: Buffer): string {
  return createHash('sha256').update(buffer).digest('hex')
}

function hashFile(path: string): string | null {
  if (!existsSync(path)) return null
  return hashBuffer(readFileSync(path))
}

function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'https:' || parsed.protocol === 'http:'
  } catch {
    return false
  }
}

function previewFilePath(slug: string): string {
  const publicPath = getProjectPreviewPath(slug)
  return join(ROOT, 'public', publicPath.replace(/^\//, ''))
}

async function capturePreview(
  browser: Awaited<ReturnType<typeof chromium.launch>>,
  slug: string,
  url: string,
): Promise<boolean> {
  const filePath = previewFilePath(slug)
  const previousHash = hashFile(filePath)

  if (!isValidUrl(url)) {
    console.warn(`[skip] ${slug}: URL inválida "${url}"`)
    return false
  }

  const page = await browser.newPage({ viewport: VIEWPORT })

  try {
    await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: NAVIGATION_TIMEOUT_MS,
    })

    await page.waitForTimeout(WAIT_AFTER_LOAD_MS)

    try {
      await page.waitForFunction(
        () => {
          const body = document.body
          if (!body) return false
          const text = body.innerText?.trim() ?? ''
          return text.length > 40
        },
        { timeout: CONTENT_WAIT_TIMEOUT_MS },
      )
    } catch {
      console.warn(`[warn] ${slug}: conteúdo pode não ter carregado completamente`)
    }

    const buffer = Buffer.from(
      await page.screenshot({
        type: 'jpeg',
        quality: 85,
        fullPage: false,
      }),
    )

    const newHash = hashBuffer(buffer)

    if (newHash === previousHash) {
      console.log(`[unchanged] ${slug}`)
      return false
    }

    writeFileSync(filePath, buffer)
    console.log(`[updated] ${slug} -> ${getProjectPreviewPath(slug)}`)
    return true
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.warn(`[failed] ${slug}: ${message}`)
    if (previousHash) {
      console.warn(`[keep] ${slug}: mantendo preview existente`)
    }
    return false
  } finally {
    await page.close()
  }
}

async function main() {
  console.log('Atualizando previews dos projetos...')
  mkdirSync(PREVIEWS_DIR, { recursive: true })

  const browser = await chromium.launch({ headless: true })

  let updated = 0
  let failed = 0

  try {
    for (const { slug, url } of PROJECT_PREVIEW_SOURCES) {
      const result = await capturePreview(browser, slug, url)
      if (result) updated += 1
      else if (!existsSync(previewFilePath(slug))) failed += 1
    }
  } finally {
    await browser.close()
  }

  console.log(`\nResumo: ${updated} atualizado(s), ${failed} sem preview`)
  process.exit(0)
}

main().catch((error) => {
  console.error('Erro fatal no script de previews:', error)
  process.exit(1)
})
