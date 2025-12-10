// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isCI = process.env.CI === 'true'

export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.PORT) || 5000,
    host: '0.0.0.0'
  },
  build: {
    outDir: isCI ? 'dist-ci' : 'dist',
    sourcemap: isCI,
  },
  define: {
    __CI__: JSON.stringify(isCI),
  },
})
