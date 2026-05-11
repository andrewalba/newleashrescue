<script setup lang="ts">
import { useDonateData } from "~/composables/useDonateData"
import BaseModal from "~/components/common/BaseModal.vue"
import PayPalDonate from "~/components/common/PayPalDonate.vue"
const { donateNow, donateOptions } = useDonateData()
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-7xl sm:py-16 lg:px-6">
      <div class="mx-auto text-center">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">{{ donateNow.h2 }}</h2>
        <template v-for="(paragraph, index) in donateNow.content" :key="index">
          <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">{{ paragraph }}</p>
        </template>
        <PayPalDonate />
      </div>
    </div>
    <template v-for="(option, index) in donateOptions" :key="index">
      <div class="gap-8 items-center py-8 px-4 mx-auto max-w-7xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <NuxtImg :src="option.img.src" :alt="option.img.alt" :class="['w-full', index % 2 !== 0 ? 'md:order-last' : '']" />
        <div class="mt-4 md:mt-0">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{{ option.h2 }}</h2>
          <template v-for="(paragraph, _pIndex) in option.content" :key="_pIndex">
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{{ paragraph }}</p>
          </template>
          <UButton v-if="option.cta" to="#" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
            {{ option.cta.displayText }}
            <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </UButton>
          <PayPalDonate v-else />
        </div>
      </div>
    </template>
  </section>
</template>

<style scoped>

</style>
