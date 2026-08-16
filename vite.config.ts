import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/** Configuration Vite — React + Tailwind CSS v4 */
export default defineConfig({
  // Domaine personnalisé espace-verdi.fr servi à la racine
  base: '/',
  plugins: [react(), tailwindcss()],
});
