import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    // https://github.com/vitejs/vite/tree/main/packages/plugin-react#babel-configuration
    babel: {
      plugins: [['relay', { eagerESModules: true }]],
    },
  }),]
})
