<script setup lang="ts">
import { useSiteData } from "~/composables/useSiteData"

const { getEmailByAccount } = useSiteData()
const props = defineProps({
  account: {
    type: String,
    default: 'adopt',
  }
})

const adoptEmail = getEmailByAccount(props.account)

</script>

<template>
  <a :href="'mailto:' + adoptEmail!.account + '@' + adoptEmail!.domain" :title="adoptEmail!.display_name">email us</a>
</template>

<style scoped>

</style>
