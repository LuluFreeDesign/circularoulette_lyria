import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/**
 * Plugin Vite pour résoudre les imports figma:asset/* générés par Figma Make.
 * En local, renvoie un petit SVG placeholder transparent.
 */
function figmaAssetPlugin(): Plugin {
  return {
    name: 'figma-asset-placeholder',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) return id;
    },
    load(id) {
      if (id.startsWith('figma:asset/')) {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><rect width="80" height="80" fill="none"/></svg>`;
        const dataUri = `data:image/svg+xml,${encodeURIComponent(svg)}`;
        return `export default "${dataUri}"`;
      }
    },
  };
}

export default defineConfig({
  base: '/circularoulette_sncf/',
  plugins: [
    figmaAssetPlugin(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
