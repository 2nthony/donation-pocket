import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, '..', 'widget', 'index.js'),
      name: 'donationPocket',
      fileName: () => 'widget.js',
      formats: ['umd'],
    },
    outDir: path.resolve(__dirname, '..', 'public'),
  },
  plugins: [svelte()],
})
