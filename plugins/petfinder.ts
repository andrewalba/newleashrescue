import { Client } from "@petfinder/petfinder-js";

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const petfinder = new Client(<any>{
        apiKey: config.public.petfinderApiKey,
        secret: config.public.petfinderApiSecret
    })
    petfinder.http.defaults.headers.common['Content-Type'] = 'application/json';

    nuxtApp.provide('petfinder', petfinder)
});

