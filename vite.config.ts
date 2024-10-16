import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve("src", 'ThaiPopover.tsx'),
      name: 'react-thai-popover',
      fileName: (format) => `react-thai-popover.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          "react-dom": "ReactDOM"
        }
      }
    }
  },
  plugins: [react(), dts({
    rollupTypes: true,
    tsconfigPath: "./tsconfig.app.json",
  })]
})