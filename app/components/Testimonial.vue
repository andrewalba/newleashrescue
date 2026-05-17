<script setup lang="ts">
import defaultProfileImgUrl from '/svg/empty-image.svg'
import type {Img} from "~/models/types";

const props = defineProps<{
  testimonial: {
    content: string
    name: string
    title: string
    image: Img
  }
}>()
</script>

<template>
  <div class="group bg-white border border-solid border-gray-300 rounded-xl px-16 w-full hover:shadow-sm">
    <div>
      <h3 class="pt-8 pb-6 text-2xl font-luckiest-guy text-primary">{{ testimonial.title }}</h3>
      <p class="text-base text-gray-600 leading-6 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
        {{ testimonial.content }}
      </p>
    </div>
    <div class="flex items-center gap-5 border-t border-solid border-gray-200 py-5 mb-6">
      <NuxtImg v-if="testimonial.image"
               :src="testimonial.image.src"
               :alt="testimonial.image.alt"
               class="rounded-full h-10 w-10"
      />
      <img
        v-else
        :src="defaultProfileImgUrl"
        :alt="testimonial.name"
        class="rounded-full h-10 w-10"
      />
      <div class="block">
        <h4 class="text-gray-900 font-medium mb-1">{{ testimonial.name }}</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
