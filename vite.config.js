// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detecta entorno: 'production' o 'ci'
const isCI = process.env.CI === 'true'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: isCI ? 'dist-ci' : 'dist',
    sourcemap: isCI, // genera mapas solo en CI/CD
  },
  define: {
    __CI__: JSON.stringify(isCI),
