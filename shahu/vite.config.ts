import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: path.resolve(__dirname, 'src')
      },
      // {
      //   find: /^~/,
      //   replacement: path.resolve(__dirname, 'src')
      // },
      {
        find: '~~',
        replacement: __dirname
      }
      // {
      //   find: /^@/,
      //   replacement: path.resolve(__dirname, 'src')
      // }
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      },
      scss: {
        additionalData: "@import '~/uni.scss';"
      }
    }
  }
  // esbuild: {
  //   jsxInject: 'import React from \'react\''
  // }
})
