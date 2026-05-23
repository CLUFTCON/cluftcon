import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// GitHub Pages project sites live under /<repo>/; use GITHUB_PAGES_BASE in CI only.
function pagesBase(): string | undefined {
  const base = process.env.GITHUB_PAGES_BASE?.trim()
  if (!base) return '/'
  if (!base.endsWith('/')) return `${base}/`
  return base
}

// https://vite.dev/config/
export default defineConfig({
  base: pagesBase(),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
