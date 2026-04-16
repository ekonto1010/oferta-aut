import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/projekt-baza/', // Tu wpisz dokładnie nazwę swojego repo na GitHubie
})
