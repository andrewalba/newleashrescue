<script setup lang="ts">
definePageMeta({
  layout: "default",
});
import { useFosterData } from "~/composables/useFosterData"

const { foster, featureBlocks } = useFosterData()
</script>

<template>
  <div>
    <Foster />
  </div>
</template>

<style scoped>

</style>
