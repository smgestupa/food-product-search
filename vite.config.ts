import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/variables.scss" as *;',
      },
    },
  },

  resolve: {
    alias: {
      "@components": resolve(__dirname, "./src/components"),
      "@lib": resolve(__dirname, "./src/lib"),
      "@routes": resolve(__dirname, "./src/routes"),
      "@semantics": resolve(__dirname, "./src/semantics"),
    }
  }
})
