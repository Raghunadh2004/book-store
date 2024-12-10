import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Redirect to backend on localhost:5000
        changeOrigin: true,
        secure: false, // Only use if the backend uses HTTPS with a self-signed certificate
      },
    },
  },
})
