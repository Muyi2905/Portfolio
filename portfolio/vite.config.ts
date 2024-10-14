import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './public',
  plugins: [react()],
  server: {
    port: 8080,
    open: true,
  },
  build: {
    outDir: 'build', // Set the output directory to 'build'
  },
});
