// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    petfinderApiSecret: process.env.PETFINDER_API_SECRET,
    public: {
      apiUrl: process.env.API_URL,
      petfinderApiKey: process.env.PETFINDER_API_KEY,
      petfinderBaseUrl: process.env.PETFINDER_BASE_URL,
      petfinderOrgId: process.env.PETFINDER_ORGANIZATION_ID,
      gtagId: process.env.GAG_ID,
    }
  },
  ssr: false,
  modules: [
      '@pinia/nuxt',
    'vue3-carousel-nuxt'
  ],
  plugins: [
    '~/plugins/petfinder.ts'
  ],
  css: [
    'assets/sass/main.scss'
  ],
  vite: {
    build: {
      minify: 'esbuild',
      chunkSizeWarningLimit: 1000,
      cssCodeSplit: true,
    },
    server: {
      watch: {
        usePolling: true,
      },
    }
  }
})
