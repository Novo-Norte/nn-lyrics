// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    "@pinia/nuxt",
    "@nuxt/devtools",
    "@vueuse/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-lodash",
    "@nuxtjs/tailwindcss"
  ],
  content: {
    documentDriven: true
  }
})