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
    chunkSizeWarningLimit: 16000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core vendor libraries
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor';
            }
            if (id.includes('@chakra-ui') || id.includes('@emotion') || id.includes('framer-motion')) {
              return 'chakra';
            }
            return 'vendor';
          }
          
          // Route-based code splitting
          if (id.includes('/pages/Portfolio')) {
            return 'portfolio-page';
          }
          if (id.includes('/pages/Resume')) {
            return 'resume-page';
          }
          if (id.includes('/pages/Contact')) {
            return 'contact-page';
          }
          
          // Component-level lazy loading
          if (id.includes('/components/CardModal')) {
            return 'card-modal-chunk';
          }
          
          // Other component chunks
          if (id.includes('/components/')) {
            return 'components';
          }
        }
      }
    }
  }
  
})
