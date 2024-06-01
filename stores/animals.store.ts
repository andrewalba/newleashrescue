import { defineStore } from 'pinia';
import { tokenStore } from "~/stores/tokenStore";
import type { Animal, Pagination } from "~/models";

export interface AnimalsState {
    animal: Animal | null
    animals: Animal[] | null
    pagination: Pagination | null
}

export const useAnimalsStore = defineStore('animals', {
    state: (): AnimalsState => ({
        animal: null,
        animals: null,
        pagination: null
    }),
    getters: {
        getAnimal(state) {
            return state.animal
        },
        getPagination(state) {
            return state.pagination
        }
    },
    actions: {
        async hydrate(query: any) {
            const page = query.page ?? 1
            const limit = query.limit ?? 20

            const params = {
                organization: useRuntimeConfig().public.petfinderOrgId,
                page: page,
                limit: limit
            }

            if (query.hasOwnProperty('type')) {
                Object.assign(params, {type: query.type})
            }

            if (tokenStore().getApiToken === undefined) { //  || (Math.floor(Date.now()) / 1000) > this.token.expires
                await this.accessToken()
            }

            const { $petfinder }: any = useNuxtApp();
            const response = await $petfinder.animal.search(params)
            if (response.data) {
                this.animals = response.data.animals
                this.pagination = response.data.pagination
            }
        },
        async show(id: number) {
            if (tokenStore().getApiToken === undefined) { //  || (Math.floor(Date.now()) / 1000) > this.token.expires
                await this.accessToken()
            }
            const petfinder: any = useNuxtApp().$petfinder
            const response = await petfinder.animal.show(id)
            if (response.data) {
                console.log(`animal: ${JSON.stringify(response.data)}`)
                this.animal = response.data.animal
            }
        },
        async accessToken() {
            const { $petfinder }: any = useNuxtApp();
            await $petfinder.authenticate()
                .then( (resp: any) => {
                    console.log(`resp.data:`, resp.data)
                    tokenStore().storeToken(resp.data)
                })
        },
        getAnimals(){
            return this.animals
        },
        getAnimalByType(type: string) {
            return this.animals?.filter((animal) => animal.type.toLowerCase() === type.toLowerCase())
        }
    }
})
