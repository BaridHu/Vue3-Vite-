import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  //指定别名,__dtrname:拿到当前目录的路径
  resolve: {
    alias: {
      "~":path.resolve(__dirname, "src")
    }
  },
  //解决跨域的问题
  server: {
    proxy: {
      '/api': {
        target: 'http://ceshi13.dishait.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  
  plugins: [vue(), WindiCSS()],
})
