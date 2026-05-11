<script setup lang="ts">

import AdoptPolicy from "~/components/AdoptPolicy.vue";

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
  <section id="adopt">
    <p class="my-8 text-blue-violet dark:text-amber-gold text-center text-lg text-muted-foreground-1">Learn more about our <ULink to="/adopt/#adoption-policy" class="underline underline-offset-2 text-primary hover:text-primary-600">Adoption Policy</ULink></p>
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

</template>

<style scoped>

</style>
