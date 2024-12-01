// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // Expose Vite server on all network interfaces
    port: 5173,        // Use port 5173
    watch: {
      usePolling: true,  // Use polling to avoid file system issues in Docker
      ignored: ['**/node_modules/**', '**/.git/**', '/proc/**', '/sys/**'] // Ignore unnecessary paths
    }
  }
})
