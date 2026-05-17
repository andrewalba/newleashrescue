<script setup lang="ts">
import { useMissionData } from "~/composables/useMissionData"
const { mission } = useMissionData()
</script>

<template>
  <!-- Card Blog -->
  <div class="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Title -->
    <div class="max-w-4xl mx-auto text-center mb-10 lg:mb-14">
      <h2 class="text-2xl font-bold md:text-4xl md:leading-tight text-foreground font-luckiest-guy text-primary">{{ mission.h2 }}</h2>
      <template v-for="(paragraph, index) in mission.content" :key="index">
        <p class="mt-1 text-muted-foreground-2">{{ paragraph }}</p>
      </template>
    </div>
    <!-- End Title -->

    <!-- Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <template v-for="(card, index) in mission.cards" :key="index">
        <!-- Card -->
        <div class="group flex flex-col h-full bg-layer border border-layer-line hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5">
          <div class="aspect-w-16 aspect-h-11">
            <NuxtImg :src="card.img.src" :alt="card.img.alt" class="w-full object-cover rounded-xl" />
          </div>
          <div class="my-6">
            <h3 class="text-xl font-quicksand font-stretch-ultra-expanded font-bold text-foreground text-center">
              {{ card.h3 }}
            </h3>
            <template v-for="(paragraph, index) in card.content" :key="index">
              <p class="mt-5 text-muted-foreground-2">
                {{ paragraph }}
              </p>
            </template>
          </div>
          <div class="mt-auto flex items-center gap-x-3">
            <NuxtLink :to="card.link.to" class="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full bg-layer border border-layer-line text-primary shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 disabled:pointer-events-none mx-auto">
              Read more
              <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </NuxtLink>
          </div>
        </div>
        <!-- End Card -->
      </template>
    </div>
    <!-- End Grid -->
    <!-- End Card -->
  </div>
  <!-- End Card Blog -->
</template>

<style scoped>

</style>
