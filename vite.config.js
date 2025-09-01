import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',                 // custom domain -> use root
  build: { outDir: 'docs' }, // GitHub Pages will serve /docs
  plugins: [react()],
})
