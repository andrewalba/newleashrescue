<script setup lang="ts">
import { useAboutData } from "~/composables/useAboutData"
import PayPalDonate from "~/components/common/PayPalDonate.vue";
const { about, aboutCards } = useAboutData()
</script>

<template>
  <section id="foster">
    <div class="py-8 px-4 mx-auto max-w-7xl sm:py-16 lg:px-6">
      <div class="mx-auto text-center">
        <h2 class="font-luckiest-guy text-primary mb-4 text-4xl tracking-tight font-extrabold leading-tight">{{ about.h2 }}</h2>
        <template v-for="(paragraph, index) in about.content" :key="index">
          <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg" v-html="paragraph" />
        </template>
      </div>
    </div>
    <div class="container mx-auto px-4">
      <template v-for="(block, index) in aboutCards" :key="index">
        <div :class="['flex flex-wrap items-center mt-16', index % 2 !== 0 ? 'flex-row-reverse' : '']">
          <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <h3 :class="['text-2xl mb-2 font-semibold leading-normal font-luckiest-guy', index % 2 === 0 ? 'text-secondary' : 'text-primary']">{{ block.h3 }}</h3>
            <template v-for="(paragraph, _pIndex) in block.content" :key="_pIndex">
              <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600" v-html="paragraph" />
            </template>
          </div>
          <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded-lg">
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
