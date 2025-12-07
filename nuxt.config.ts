// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    runtimeConfig: {
        public: {
            apiUrl: process.env.API_URL,
            gtagId: process.env.GAG_ID,
        }
    },
    ssr: false,
    modules: [
    ],
    plugins: [],
    css: [
        'assets/sass/main.scss'
    ],
    nitro: {
        preset: 'aws-amplify',
        awsAmplify: {
            runtime: 'nodejs22.x'
        },
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
