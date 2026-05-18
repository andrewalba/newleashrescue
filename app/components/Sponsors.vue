<script setup lang="ts">
import { useSponsorsData } from "~/composables/useSponsorsData"
const { sponsor } = useSponsorsData()
</script>

<template>
<section id="sponsors">
  <div class="py-8 px-4 mx-auto max-w-7xl sm:py-16 lg:px-6">
    <div class="mx-auto text-center">
      <h2 class="font-luckiest-guy text-primary mb-4 text-4xl tracking-tight font-extrabold leading-tight">{{ sponsor.h2 }}</h2>
      <template v-for="(paragraph, index) in sponsor.content" :key="index">
        <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">{{ paragraph }}</p>
      </template>
    </div>
  </div>
  <!-- Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mx-auto max-w-4xl">
    <template v-for="(client, idx) in sponsor.sponsors" :key="idx">
      <div class="flex h-full flex-col items-center justify-center gap-2 p-4 text-center bg-card border border-card-line rounded-lg">
        <NuxtImg :src="client.img.src" :alt="client.img.alt" class="w-32 h-auto" />
        <h3 class="text-xl text-primary font-extrabold">{{ client.h3 }}</h3>

        <address class="font-semibold text-sm text-foreground">
          {{ client.address.address1 }}<br/>
          {{ client.address.city }}, {{ client.address.state }} {{ client.address.postcode }}
        </address>

        <NuxtLink :to="'tel:' + client.phone.raw" class="text-sm text-secondary hover:underline hover:text-secondary-600">{{ client.phone.formatted }}</NuxtLink><br/>
        <NuxtLink :to="client.link.to" :title="client.link.title" target="" class="text-sm text-secondary hover:underline hover:text-secondary-600">{{ client.link.displayText }}</NuxtLink>

      </div>
    </template>
  </div>
  <!-- Veterinarians -->
  <div class="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Grid -->
    <div class="grid md:grid-cols-2 items-center gap-12">
      <template v-for="(vet, idx) in sponsor.veterinarians.vets" :key="idx">
        <div>
          <h1 class="font-luckiest-guy text-secondary text-2xl font-bold text-foreground sm:text-3xl lg:leading-tight">{{ vet.h3 }}</h1>

          <address class="font-semibold text-sm text-foreground">
            {{ vet.address.address1 }}<br/>
            {{ vet.address.city }}, {{ vet.address.state }} {{ vet.address.postcode }}
          </address>

          <NuxtLink :to="'tel:' + vet.phone.raw" class="text-sm text-secondary hover:underline hover:text-secondary-600">{{ vet.phone.formatted }}</NuxtLink><br/>
          <NuxtLink :to="vet.link.to" :title="vet.link.title" target="" class="text-sm text-secondary hover:underline hover:text-secondary-600">{{ vet.link.displayText }}</NuxtLink>
        </div>
        <!-- End Col -->

        <div class="relative">
          <!-- Card -->
          <NuxtImg :src="vet.img.src" :alt="vet.img.alt" class="w-75 mx-auto block dark:hidden" />
          <NuxtImg :src="vet.img_dark.src" :alt="vet.img.alt" class="w-75 mx-auto hidden dark:block" />
            <!-- End Card -->
        </div>
        <!-- End Col -->
      </template>
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Hire Us -->
  <!-- End Grid -->
</section>
</template>

<style scoped>

</style>
