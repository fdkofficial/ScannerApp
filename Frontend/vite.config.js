import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'es2015'
  },
  transpileDependencies: true,
  androidManifest: {
    // Set the screenOrientation attribute to "portrait"
    application: {
      theme: "@android:style/Theme.NoTitleBar",
      activity: {
        "android:screenOrientation": "portrait",
      },
    },
  },
})
