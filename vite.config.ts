import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.1.100', 
    // https: false,
    // cors: false,
    hmr: {
        host: '192.168.1.100', 
    }
}
})
