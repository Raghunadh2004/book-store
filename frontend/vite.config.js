import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',  // Exposes the server to the host machine and network
    port: 5173,       // You can change this if needed
    strictPort: true, // Ensures Vite fails if the port is already in use
    watch: {
      usePolling: true, // Required for some Docker setups to detect file changes
    },
  },
  plugins: [react()],
})