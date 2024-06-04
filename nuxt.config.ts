// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  imports: {
    dirs: ['stores'],
  },
  css: [
      '@/assets/common/app.scss',
      '@/assets/common/pagination.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:  '@import "@/assets/common/variables.scss";',
        },
      },
    },
  },
})
