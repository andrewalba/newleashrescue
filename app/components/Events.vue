<script setup lang="ts">
import { useEventData } from "~/composables/useEventData"
const { event, eventBlocks } = useEventData()
</script>

<template>
  <section id="events">
    <div class="py-8 px-4 mx-auto max-w-7xl sm:py-16 lg:px-6">
      <div class="mx-auto text-center">
        <h2 class="font-luckiest-guy text-primary mb-4 text-4xl tracking-tight font-extrabold leading-tight">{{ event.h2 }}</h2>
        <template v-for="(paragraph, index) in event.content" :key="index">
          <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg" v-html="paragraph" />
        </template>
      </div>
    </div>

    <div class="container mx-auto px-4 mb-16">
      <template v-for="(block, index) in eventBlocks" :key="index">
        <div :class="['flex flex-wrap items-center mt-16', index % 2 !== 0 ? 'flex-row-reverse' : '']">
          <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <h3 :class="['text-2xl mb-2 font-semibold leading-normal font-luckiest-guy', index % 2 === 0 ? 'text-secondary' : 'text-primary']">{{ block.h3 }}</h3>
            <template v-for="(paragraph, _pIndex) in block.content" :key="_pIndex">
              <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                {{ paragraph }}
              </p>
            </template>
          </div>
          <div class="md:w-5/12 px-4 text-center">
            <UButton :to="block.cta.to"
                     :icon="block.cta.icon"
                     :external="block.cta.external"
                     :class="['mt-4 text-lg text-white mx-auto', index % 2 === 0 ? 'bg-primary' : 'bg-secondary']">{{ block.cta.displayText }}</UButton>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>

</style>
