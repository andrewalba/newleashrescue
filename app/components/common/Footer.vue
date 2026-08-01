<script setup lang="ts">
import { useSiteData } from "~/composables/useSiteData"
const { site, footer_links, social_links } = useSiteData()
</script>

<template>
  <footer class="mt-auto w-full max-w-340 py-10 px-4 sm:px-6 lg:px-8 mx-auto">
    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
      <div>
        <ULink :to="site.url" class="flex-none text-xl font-semibold text-foreground focus:outline-hidden font-luckiest-guy text-primary hover:text-primary-400" :aria-label="site.title">{{ site.title }}</ULink>
      </div>
      <!-- End Col -->

      <ul class="text-center">
        <template v-for="(link, index) in footer_links" :key="index">
          <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:inset-e-3 before:-translate-y-1/2 before:content-['|'] before:text-muted-foreground">
            <ULink :to="link.to" :title="link.title" class="inline-flex gap-x-2 text-sm text-muted-foreground-1 hover:text-foreground focus:outline-hidden focus:text-foreground">{{ link.displayText }}</ULink>
          </li>
        </template>
      </ul>
      <!-- End Col -->

      <!-- Social Brands -->
      <div class="md:text-end space-x-2">
        <template v-for="(link, idx) in social_links" :key="idx">
          <ULink
            :href="link.to"
            target="_blank"
            class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-muted-foreground-1 [&_svg]:size-5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground-1 hover:bg-muted-hover focus:outline-hidden focus:bg-muted-focus disabled:opacity-50 disabled:pointer-events-none"
          >
            <UIcon :name="link.icon" />
          </ULink>
        </template>
      </div>
      <!-- End Social Brands -->
    </div>
    <!-- End Grid -->
  </footer>
</template>

<style scoped>

</style>
