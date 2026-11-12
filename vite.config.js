import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves the site under /FlowPilot/ (project page),
  // so asset URLs must be relative to that path.
  base: '/FlowPilot/',
  plugins: [react()],
})
