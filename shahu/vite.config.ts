import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
import fs from 'fs'
import dayjs from 'dayjs'
import { nanoid } from 'nanoid'

let base = '/'
// const assetsDir = 'assets'
if (process.env.NODE_ENV === 'production') {
  const prefix = '/' + nanoid(10) + dayjs().format('YYYYMMDD') + '/'
  fs.writeFileSync('./.base', prefix)
  base = prefix
  // assetsDir = prefix + '/assets'
}
// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [reactRefresh()],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '~~',
        replacement: __dirname
      }
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
  // build: {
  //   assetsDir
  // }

  // esbuild: {
  //   jsxInject: 'import React from \'react\''
  // }
})
