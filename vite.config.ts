import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'https://uvapoo2db2ava2front-abxdefaria.b4a.run', 
    // https: false,
    // cors: false,
    hmr: {
        host: 'https://uvapoo2db2ava2front-abxdefaria.b4a.run', 
    }
}
})
