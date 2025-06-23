// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel'; // /serverless

// https://astro.build/config
export default defineConfig({
  // Default: 'static' 
  output: 'static', // static / server 

  vite: {
    plugins: [tailwindcss()],
    // Optimize dev server performance
    server: {
      hmr: {
        overlay: false // Disable the HMR overlay for faster refreshes
      },
      watch: {
        usePolling: false // Make sure polling is disabled for better performance
      }
    },
    // Optimize build performance
    build: {
      target: 'esnext', // Modern browsers for better performance
    },
    // Optimize caching and performance
    optimizeDeps: {
      // Force inclusion of these dependencies in the optimization step
      include: ['react', 'react-dom'],
      // Reduce dependency scanning for better startup
      force: true
    }
  },

  // Improve dev server startup time
  server: {
    port: 4321,
    host: 'localhost'
  },

  // Content collection optimization
  experimental: {
    clientPrerender: true, // Prerender where possible
    responsiveImages: true // Optimize images
  },

  integrations: [react()],
  adapter: vercel()
});