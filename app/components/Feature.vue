<script setup lang="ts">
import { useFeatureData } from "../composables/useFeatureData"
const { feature, featureCards } = useFeatureData()
</script>

<template>
  <!-- Section: With Details -->
  <div class="bg-white dark:bg-gray-950 dark:text-gray-100">
    <div
        class="container mx-auto flex flex-col gap-10 px-4 py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-24 lg:px-8 lg:py-32 xl:max-w-7xl"
    >
      <!-- Heading -->
      <div class="text-center lg:text-left">
        <div class="mb-5 font-['Caveat'] text-[1.625rem] text-blue-600 dark:text-blue-400">{{ feature.title }}</div>
        <h2 class="text-4xl font-black dark:text-white">{{ feature.h2 }}</h2>
        <template v-for="(paragraph, index) in feature.content" :key="index">
          <p class="mx-auto mt-4 w-full max-w-3xl text-md/relaxed font-medium text-gray-700 dark:text-gray-300">
          {{ paragraph }}</p>
        </template>
      </div>
      <!-- END Heading -->

      <!-- Cards -->
      <div
          class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 lg:w-3/5 lg:flex-none"
      >
        <template v-for="(card, index) in featureCards" :key="index">
          <!-- Card -->
          <div class="size-full bg-card shadow-lg rounded-lg p-5 text-center">
            <div class="mb-3 flex flex-col items-center gap-y-4">
              <div
                  class="flex size-15.5 shrink-0 items-center justify-center rounded-full border-4 border-primary-100 bg-primary-200 text-primary-800 dark:border-primary-900 dark:bg-primary-800 dark:text-primary-400"
              >
                <UIcon :name="card.icon" />
              </div>
              <h3 class="w-full text-center text-lg font-semibold text-foreground">
                {{ card.h3 }}
              </h3>
            </div>
            <template v-for="(paragraph, index) in card.content" :key="index">
              <p class="text-muted-foreground-2">{{ paragraph }}</p>
            </template>
          </div>
          <!-- End Card -->
        </template>
      </div>
      <!-- END Cards -->
    </div>
  </div>
  <!-- END Section: With Details -->
</template>

<style scoped>

</style>
