import { createPinia } from 'pinia'
import { tokenStore } from "~/stores/tokenStore";
import { H3Event } from 'h3';
import type { AccessToken, Animals } from "~/models";

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event) => {
    const url = event.node.req.url?.replace(/^\/api\/petfinder/gm, '') || '';
    console.log(`url: `, url)
    switch (url) {
        case '/oauth2/token':
            return getAccessToken();
        case '/animals':
            return getAnimals(event);
        default: {
            return getAnimals(event);
        }
    }
})

const getAccessToken = async () => {
    const pinia = createPinia()
    const petfinderUrl: string =  runtimeConfig.public.petfinderBaseUrl
    const clientId: string = runtimeConfig.public.petfinderApiClientId as string
    const clientSecret: string = runtimeConfig.petfinderApiSecret as string

    const response = await $fetch<AccessToken>(petfinderUrl + '/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'grant_type': 'client_credentials',
            'client_id': clientId,
            'client_secret': clientSecret
        })
    })

    console.log(`getAccessToken response: `, response)

    tokenStore().storeToken(response)

}

const getAnimals = async (event: H3Event) => {
    const pinia = createPinia()
    const petfinderUrl: string =  runtimeConfig.public.petfinderBaseUrl
    const orgId: string = runtimeConfig.public.petfinderOrgId

    if (tokenStore().getApiToken === undefined) { //  || (Math.floor(Date.now()) / 1000) > this.token.expires
        await getAccessToken()
    }

    console.log(`tokenStore().getApiToken: `, tokenStore().getApiToken)

    return await $fetch<Animals>(petfinderUrl + '/v2/animals', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '
        },
        params: {
            organization_id: orgId,
            status: 'adoptable',
            page: 1,
            count: 100
        }
    })
}
