import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Dominio personalizzato: giosueaiello.com
  server: {
    open: true, // Apre automaticamente il browser
  },
});