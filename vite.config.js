// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: '/websitetpr/',                  // custom domain
  build: { outDir: 'docs' },  // <-- important
  plugins: [react()]
})