import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import ElementPlus from 'unplugin-element-plus/vite'

import vue from '@vitejs/plugin-vue'

console.log('hi', process.env.NODE_ENV)

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const envConfig = loadEnv(mode, process.cwd(), '')
  envConfig.THEME = 'default'
  return {
    define: {
      __APP_ENV__: envConfig,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      },
      extensions: [".js", ".ts", ".json", ".vue"],
    },
    plugins: [
      ElementPlus(),
      vue(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./src/assets/style/theme.scss" as *;',
        }
      }
    },
    server: {
      port: envConfig.VITE_PORT,
      //设置代理
      proxy: {
        "/gateway": {
          target: "http://10.0.16.154:18080",
          changeOrigin: true,
        },
      }
    },
  }
})
