import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite o acesso a partir de outros dispositivos na rede local
    port: 5173, // Porta que o Vite usará
  },  
})
