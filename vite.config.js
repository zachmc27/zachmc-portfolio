import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Set alias '@' to 'src' folder
    },
  },
  build: {
    assetsDir: 'assets',
    chunkSizeWarningLimit: 16000
  }
  
})
