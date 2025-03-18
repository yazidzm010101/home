// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/content', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
  devtools: { enabled: true },
  srcDir: './src',
  compatibilityDate: '2024-11-01',
  telemetry: {
    enabled: false,
  },
})
