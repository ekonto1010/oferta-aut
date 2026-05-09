import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/oferta-aut/', // Tu wpisz dokładnie nazwę swojego repo na GitHubie
})
