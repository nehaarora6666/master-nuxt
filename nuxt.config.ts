// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['@/assets/css/tailwind.css'],
  
  hooks: {
    'pages:extend'(pages) {
      //add a route
      pages.push({
        name: 'login',
        path: '/',
        file: '~/pages/login.vue'
      },
        {
          name: 'employee',
          path: '/employee',
          file: '~/employee/pages/login.vue'
        }
      )
    }
  }
})
