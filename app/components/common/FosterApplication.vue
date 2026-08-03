<script setup lang="ts">
import { useFosterData } from '~/composables/useFosterData'
const { fosterApplication } = useFosterData()
</script>

<template>
  <div class="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 px-4">
    <template v-for="application in fosterApplication">
    <a
      :href="application.href"
      :download="application.filename"
      :title="application.title"
      class="w-full sm:w-auto py-4 px-6 inline-flex justify-center items-center gap-x-2 text-xl font-medium text-nowrap rounded-xl border border-secondary-line text-white bg-secondary hover:bg-secondary-hover focus:outline-hidden focus:bg-secondary-focus transition disabled:opacity-50 disabled:pointer-events-none"
    >
      <UIcon name="i-material-symbols-download-rounded" class="size-6" />
      {{ application.cta }}
    </a>
    </template>
  </div>
</template>

<style scoped>

</style>
