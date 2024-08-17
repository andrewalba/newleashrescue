<script setup lang="ts">
import { useSiteData } from "~/composables/useSiteData"

const { phone } = useSiteData()
</script>

<template>
<a :href="'tel:' + phone.raw" title="phone">{{ phone.formatted }}</a>
</template>

<style scoped>

</style>
