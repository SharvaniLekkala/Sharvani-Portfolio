import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages base path — must match the repository name
  base: '/Sharvani-Portfolio/',
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
});
