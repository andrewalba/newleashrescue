<script setup lang="ts">

import AdoptionApplication from "~/components/common/AdoptionApplication.vue";
import AdoptPolicy from "~/components/AdoptPolicy.vue";
import PetScroller from "~/components/common/PetScroller.vue";
import { useAdoptData } from "~/composables/useAdoptData"

const { adopt } = useAdoptData()

definePageMeta({
  layout: "default",
});
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
    <PetScroller />
    <!-- Pet List Widget - End -->
  </section>

  <AdoptPolicy />

  <div class="flex justify-center px-4 my-8">
    <AdoptionApplication />
  </div>

</template>

<style scoped>

</style>
