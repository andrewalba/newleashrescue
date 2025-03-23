import { defineStore } from 'pinia';
import { tokenStore } from "~/stores/tokenStore";
import type { Animal, Pagination } from "~/models";
import type { UnwrapRefSimple } from "@vue/reactivity";

interface AnimalCache {
    data: Animal[] | null;
    pagination: Pagination | null;
    timestamp: number;
}

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
        getCacheKey(params: Record<string, any>): string {
            const paramString = Object.entries(params)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([key, value]) => `${key}=${value}`)
                .join('&');
            return `petfinder_animals_cache_${paramString}`;
        },
        isCacheValid(cacheItem: AnimalCache): boolean {
            const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes in milliseconds
            return cacheItem &&
                cacheItem.data !== null &&
                (Date.now() - cacheItem.timestamp) < CACHE_DURATION;
        },

        saveToCache(params: Record<string, any>, response: {
            animals: Array<UnwrapRefSimple<Animal>> | null;
            pagination: UnwrapRefSimple<Pagination> | null
        }): void {
            const cacheKey = this.getCacheKey(params);
            const cacheItem: AnimalCache = {
                data: response.animals,
                pagination: response.pagination,
                timestamp: Date.now()
            };

            try {
                localStorage.setItem(cacheKey, JSON.stringify(cacheItem));
            } catch (error) {
                console.warn('Failed to save to localStorage', error);
            }
        },

        getFromCache(params: Record<string, any>): AnimalCache | null {
            const cacheKey = this.getCacheKey(params);
            try {
                const cachedData = localStorage.getItem(cacheKey);
                if (cachedData) {
                    const parsedCache: AnimalCache = JSON.parse(cachedData);
                    return this.isCacheValid(parsedCache) ? parsedCache : null;
                }
            } catch (error) {
                console.warn('Failed to retrieve from localStorage', error);
            }
            return null;
        },

        async hydrate(query: any): Promise<void> {
            const page = query.page ?? 1
            const limit = query.limit ?? 20

            const params: Record<string, any> = {
                organization: useRuntimeConfig().public.petfinderOrgId,
                page: page,
                limit: limit
            }

            if (query.hasOwnProperty('type')) {
                params.type = query.type
            }

            // Try to get cached data first
            const cachedData = this.getFromCache(params);
            if (cachedData) {
                this.animals = cachedData.data;
                this.pagination = cachedData.pagination;
                return;
            }

            // If no valid cache, fetch from API
            if (tokenStore().getApiToken === undefined) {
                await this.accessToken()
            }

            const { $petfinder }: any = useNuxtApp();
            try {
                const response = await $petfinder.animal.search(params)
                if (response) {
                    this.animals = response.data.animals;
                    this.pagination = response.data.pagination;

                    this.saveToCache(params, {
                        animals: this.animals,
                        pagination: this.pagination
                    });
                }
            } catch (error) {
                console.error('Failed to fetch animals', error);
            }
        },

        clearCache(params?: Record<string, any>): void {
            if (params) {
                const cacheKey = this.getCacheKey(params);
                localStorage.removeItem(cacheKey);
            } else {
                Object.keys(localStorage)
                    .filter(key => key.startsWith('petfinder_animals_cache_'))
                    .forEach(key => localStorage.removeItem(key));
            }
        },

        async show(id: number): Promise<void> {
            if (tokenStore().getApiToken === undefined) { //  || (Math.floor(Date.now()) / 1000) > this.token.expires
                await this.accessToken()
            }
            const petfinder: any = useNuxtApp().$petfinder
            const response = await petfinder.animal.show(id)
            if (response.data) {
                this.animal = response.data.animal
            }
        },
        async accessToken(): Promise<void> {
            const { $petfinder }: any = useNuxtApp();
            await $petfinder.authenticate()
                .then( (resp: any) => {
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
