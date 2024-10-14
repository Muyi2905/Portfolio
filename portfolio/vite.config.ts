import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './public',
  plugins: [react()],
  server: {
    port: 8080,
    open: true,
  },
});
