import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['class-variance-authority'],
  },
  server: {
    port: 5173,
    host: true,
  },
});