import path from 'path'

import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { defineConfig } from 'vite'

function resolve(p: string) {
  return path.resolve(__dirname, p)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue(), UnoCSS({}), ElementPlus({})],
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: { vue: ['vue'], 'vue-router': ['vue-router'] }
      }
    }
  },
  server: {
    host: '0.0.0.0'
  }
})
