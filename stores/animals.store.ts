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
        getAnimal(state): Animal | null {
            return state.animal
        },
        getPagination(state): Pagination | null {
            return state.pagination
        },
        getAttributes(state): (string | undefined)[] {
            interface Map {
                [key: string]: string | undefined
            }
            const ATTRIBUTES: Map = {
                spayed_neutered: "Spayed/Neutered",
                house_trained: "House Trained",
                declawed: "Declawed",
                special_needs: "Special Needs",
                shots_current: "Current on Shots",
                cats: "Good with Cats",
                dogs: "Good with Dogs",
                children: "Good with Children"
            }

            const _attributes = [];
            if (state.animal?.attributes) {
                for (const [key, value] of Object.entries(state.animal?.attributes)) {
                    if (value) {
                        _attributes.push(ATTRIBUTES[key]);
                    }
                }
            }
            if (state.animal?.environment) {
                for (const [key, value] of Object.entries(state.animal?.environment)) {
                    if (value) {
                        _attributes.push(ATTRIBUTES[key]);
                    }
                }
            }
            return _attributes;
        }
    },
    actions: {
        async hydrate(query: any): Promise<void> {
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

            /*console.log(`ApiToken before: `, tokenStore().getApiToken)*/
            if (tokenStore().getApiToken === undefined) { //  || (Math.floor(Date.now()) / 1000) > this.token.expires
                await this.accessToken()
            }

            /*console.log(`ApiToken after: `, tokenStore().getApiToken)*/
            const { $petfinder }: any = useNuxtApp();
            const response = await $petfinder.animal.search(params)
            /*console.log(`response: `, response)*/
            if (response.data) {
                this.animals = response.data.animals
                this.pagination = response.data.pagination
            }
        },
        async show(id: number): Promise<void> {
            if (tokenStore().getApiToken === undefined) { //  || (Math.floor(Date.now()) / 1000) > this.token.expires
                await this.accessToken()
            }
            const petfinder: any = useNuxtApp().$petfinder
            const response = await petfinder.animal.show(id)
            if (response.data) {
                /*console.log(`animal: ${JSON.stringify(response.data)}`)*/
                this.animal = response.data.animal
            }
        },
        async accessToken(): Promise<void> {
            const { $petfinder }: any = useNuxtApp();
            await $petfinder.authenticate()
                .then( (resp: any) => {
                    /*console.log(`resp.data:`, resp.data)*/
                    tokenStore().storeToken(resp.data)
                })
        },
        getAnimals(): Animal[] | null {
            return this.animals
        },
        getAnimalByType(type: string): Animal[] | null | undefined {
            return this.animals?.filter((animal) => animal.type.toLowerCase() === type.toLowerCase())
        }
    }
})
