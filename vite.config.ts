import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: false,
  base: './',
  build: {
    outDir: 'docs'
  },
  server: {
    strictPort: true
  }
})
