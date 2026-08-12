import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/** Configuration Vite — React + Tailwind CSS v4 */
export default defineConfig({
  // Requis pour GitHub Pages (repo project): assets sous /espace-verdi/
  base: '/espace-verdi/',
  plugins: [react(), tailwindcss()],
});
