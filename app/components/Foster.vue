<script setup lang="ts">
import { useFosterData } from "~/composables/useFosterData"
const { foster, featureBlocks } = useFosterData()
</script>

<template>
  <section id="foster">
    <div class="container mx-auto px-4">
      <template v-for="(block, index) in featureBlocks" :key="index">
        <div :class="['flex flex-wrap items-center mt-16', index % 2 !== 0 ? 'flex-row-reverse' : '']">
          <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <h3 :class="['text-2xl mb-2 font-semibold leading-normal font-luckiest-guy', index % 2 === 0 ? 'text-secondary' : 'text-primary']">{{ block.h3 }}</h3>
            <template v-for="(paragraph, _pIndex) in block.content" :key="_pIndex">
              <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                {{ paragraph }}
              </p>
            </template>
          </div>
          <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div class="relative flex flex-col min-w-0 wrap-break-word bg-white w-full mb-2 shadow-lg rounded-lg">
              <NuxtImg :src="block.img.src" :alt="block.img.alt" class="w-full align-middle rounded-lg" />
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>

</style>
