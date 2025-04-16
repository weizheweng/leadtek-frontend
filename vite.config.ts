import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      terminal: true,
      overlay: {
        initialIsOpen: false,
      },
      typescript: {
        root: './',
        buildMode: true,
      },
      eslint: {
        useFlatConfig: true,
        lintCommand: 'eslint ./**/*.{ts,tsx}',
      },
    }),
  ],
})
