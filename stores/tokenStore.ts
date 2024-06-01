import {defineStore} from "pinia";

export const tokenStore = defineStore('token', {
    state: () => ({
        apiToken:useCookie('token')
    }),
    getters: {
        getApiToken: state => {
            return state.apiToken
        }
    },
    actions: {
        storeToken(token: any){
            this.apiToken = token.access_token
            const newCookie = useCookie('token', {
                maxAge: token.expires_in,
                sameSite: true,
                secure: true,
            })
            newCookie.value = this.apiToken
        },
    }
})
