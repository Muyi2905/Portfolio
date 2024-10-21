import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './public',  // Optional, if your project structure requires a custom root
  plugins: [react()],
  server: {
    port: 8080,
    open: true,
  },
  build: {
    outDir: '../dist',  // Set the output directory to 'dist'
  },
});
