import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: 'https://github.com/rockiny4n/Pembayaran-GO',
  plugins: [react(), tailwindcss()],
})