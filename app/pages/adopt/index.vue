<script setup lang="ts">

import AdoptionApplication from "~/components/common/AdoptionApplication.vue";
import AdoptPolicy from "~/components/AdoptPolicy.vue";
import { useAdoptData } from "~/composables/useAdoptData"

const { adopt } = useAdoptData()

definePageMeta({
  layout: "default",
});

useHead({
  script: [
    {
      src: 'https://www.petfinder.com/pet-scroller.bundle.js',
      // Using bodyClose ensures the script loads after the HTML is parsed, similar to placing it in the body
      tagPosition: 'bodyClose'
    }
  ]
})
</script>

<template>
  <!-- Adopt-->
  <section id="adopt" class="mt-24">
    <template v-for="(paragraph, index) in adopt.content" :key="index">
      <p class="my-8 mx-8 text-blue-violet dark:text-amber-gold text-center text-lg text-muted-foreground-1" v-html="paragraph"></p>
    </template>

    <div class="flex justify-center px-4 my-8">
      <AdoptionApplication />
    </div>

    <!-- Pet List Widget - Start -->
    <pet-scroller
        s3Url="https://dbw3zep4prcju.cloudfront.net/"
        apiBase="https://psl.petfinder.com/graphql"
        organization='["ef14e030-9d27-4d78-bd47-a85a80372b56"]'
        status="adoptable"
        petfinderUrl="https://www.petfinder.com/"
        hideBreed="true"
        limit=24
        petListTitle="">
    </pet-scroller>
    <!-- Pet List Widget - End -->
  </section>

  <AdoptPolicy />

  <div class="flex justify-center px-4 my-8">
    <AdoptionApplication />
  </div>

</template>

<style scoped>

</style>
