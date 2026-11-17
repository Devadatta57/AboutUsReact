import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // `npm run dev` also listens on every network interface,
  // so other devices on the LAN can open http://<this-machine-ip>:5173
  server: {
    host: true,
    port: 5173,
    open: false,
  },
  // `npm run preview` serves the production build on every network interface,
  // so other devices on the LAN can open http://<this-machine-ip>:4173
  preview: {
    host: true,
    port: 4173,
    strictPort: true,
  },
});
