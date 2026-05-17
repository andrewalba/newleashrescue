<script setup lang="ts">
import { useSiteData } from "~/composables/useSiteData"
import { useNavigationData } from "~/composables/useNavigationData"

const { site, links } = useSiteData()
const { donateNavigation } = useNavigationData()
const activeClass = "before:absolute before:bottom-0.5 before:start-0 before:w-full before:h-1 before:bg-primary"
</script>

<template>
  <!-- ========== HEADER ========== -->
  <header class="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7 bg-navbar">
    <nav class="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
      <div class="lg:col-span-3 flex items-center">
        <!-- Logo -->
        <ULink :to="site.url" class="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80 font-luckiest-guy text-primary hover:text-primary-400" :aria-label="site.title">
          {{ site.title}}
        </ULink>
        <!-- End Logo -->

        <div class="ms-1 sm:ms-2">

        </div>
      </div>

      <!-- Button Group -->
      <div class="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
        <UButton icon="i-material-symbols-partner-heart-rounded" :to="donateNavigation.to" type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-lg font-medium text-nowrap rounded-xl text-white bg-primary border border-primary-line hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus transition disabled:opacity-50 disabled:pointer-events-none">
          {{ donateNavigation.displayText }}
        </UButton>

        <div class="lg:hidden">
          <button type="button" class="hs-collapse-toggle size-9.5 flex justify-center items-center text-sm font-semibold rounded-xl bg-layer border border-layer-line text-layer-foreground hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-hcail-collapse" aria-expanded="false" aria-controls="hs-pro-hcail" aria-label="Toggle navigation" data-hs-collapse="#hs-pro-hcail">
            <svg class="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
            <svg class="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
      </div>
      <!-- End Button Group -->

      <!-- Collapse -->
      <div id="hs-pro-hcail" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6" aria-labelledby="hs-pro-hcail-collapse" role="region">
        <div class="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
          <template v-for="(navigation, idx) in links">
            <div>
              <ULink :to="navigation.to" class="relative inline-block text-foreground focus:outline-hidden">{{ navigation.displayText }}</ULink>
            </div>
          </template>
        </div>
      </div>
      <!-- End Collapse -->
    </nav>
  </header>
  <!-- ========== END HEADER ========== -->
</template>

<style scoped>

</style>
