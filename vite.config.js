import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve :{
    alias: {
      '@':'/src',
      '@pages':'/src/pages',
      '@components':'/src/components',
      '@routes':'/src/routes',
      '@utils':'/src/utils',
      '@assets':'/src/assets' 
    }
  }
})
