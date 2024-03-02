// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/test-utils/module',
    '@nuxt/devtools',
    '@nuxt/fonts',
    '@nuxt/ui',
  ],
  devtools: { enabled: true },
  tailwindcss: {
    cssPath: '~/assets/global.css',
  },
})
