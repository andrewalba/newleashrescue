<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

const email = runtimeConfig.public.email
</script>

<template>
  <a :href="'mailto:' + email" :title="email">email us</a>
</template>

<style scoped>

</style>
