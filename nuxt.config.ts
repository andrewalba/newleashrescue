// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    /*petfinderApiKey: process.env.PETFINDER_API_KEY,
    petfinderApiSecret: process.env.PETFINDER_API_SECRET,*/
    public: {
      petfinderApiKey: process.env.PETFINDER_API_KEY,
      petfinderApiSecret: process.env.PETFINDER_API_SECRET,
      phone: process.env.PHONE,
      email: process.env.EMAIL,
      petfinderBaseUrl: process.env.PETFINDER_BASE_URL,
      petfinderOrgId: process.env.PETFINDER_ORGANIZATION_ID,
    }
  },
  ssr: false,
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    'vue3-carousel-nuxt'
  ],
  plugins: [
    '~/plugins/petfinder.ts'
  ],
  css: [
    '@/assets/sass/main.scss'
  ],
  image: {
    dir: 'assets/images',
    format: ['webp']
  },
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
