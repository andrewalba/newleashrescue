<script setup lang="ts">
import {useAdoptData} from "~/composables/useAdoptData"

const {adoptPolicy} = useAdoptData()
</script>

<template>
  <section id="adoption-policy">
    <!-- Features -->
    <div class="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="aspect-[16/7]">
        <NuxtImg :src="adoptPolicy.img.src" :alt="adoptPolicy.img.alt" class="size-full object-cover rounded-xl"/>
      </div>

      <!-- Grid -->
      <div class="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div class="lg:col-span-1">
          <h2 class="font-luckiest-guy text-primary dark:text-secondary font-bold text-2xl md:text-3xl text-foreground">{{ adoptPolicy.h2 }}</h2>
          <template v-for="(paragraph, index) in adoptPolicy.content" :key="index">
            <p class="mt-2 md:mt-4 text-muted-foreground-1">{{ paragraph }}</p>
          </template>
        </div>
        <!-- End Col -->

        <div class="lg:col-span-2">
          <div class="grid sm:grid-cols-2 gap-8 md:gap-12">
            <template v-for="(block, index) in adoptPolicy.featureBlocks" :key="index">
              <!-- Icon Block -->
              <div class="flex gap-x-5">
                <UIcon :name="block.icon" class="shrink-0 mt-1 size-6 text-blaze-orange" />
                <div class="grow">
                  <h3 class="text-lg font-semibold text-foreground text-blue-violet dark:text-amber-gold">{{ block.h3 }}</h3>
                  <template v-for="(paragraph, index) in block.content" :key="index">
                    <p class="mt-1 text-muted-foreground-2 font-light">{{ paragraph }}</p>
                  </template>
                </div>
              </div>
              <!-- End Icon Block -->
            </template>
          </div>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Features -->
  </section>
</template>

<style scoped>

</style>
