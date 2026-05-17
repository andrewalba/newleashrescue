<script setup lang="ts">
import { useSiteData } from "~/composables/useSiteData"
import { useNavigationData } from "~/composables/useNavigationData"

const { site, links } = useSiteData()
const { donateNavigation } = useNavigationData()
const light_logo = '/banner-small-light.svg'
const dark_logo = '/banner-small-dark.svg'

const showMenu = shallowRef(false)
const toggleNav = () => (showMenu.value = !showMenu.value)

const route = useRoute()

function normalizeNavPath(value: string): string {
    const pathOnly = value.split("#")[0]?.split("?")[0] ?? ""
    return pathOnly.length > 1 && pathOnly.endsWith("/") ? pathOnly.slice(0, -1) : pathOnly
}

function isPathActive(currentPath: string, linkPath: string): boolean {
    const target = normalizeNavPath(linkPath)
    if (!target) {
        return false
    }
    const current = normalizeNavPath(currentPath)
    return current === target || current.startsWith(`${target}/`)
}

/** Matches exact path or a nested segment (e.g. /adopt/foo under /adopt), without prefix clashes like /contact vs /contact-us. */
const primaryNavLinks = computed(() =>
    links.value.map((navigation) => ({
        ...navigation,
        isActive: isPathActive(route.path, navigation.to),
    })),
)
</script>

<template>
  <nav class="bg-neutral-900 fixed w-full z-20 top-0 inset-s-0 border-b border-default">
    <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
      <ULink :to="site.url" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="font-luckiest-guy text-primary hover:text-primary-300 self-center text-2xl text-heading font-semibold whitespace-nowrap hidden sm:inline">{{ site.title }}</span>
        <NuxtImg :src="light_logo" :alt="site.title + ' logo'" class="h-8 block dark:hidden" />
        <NuxtImg :src="dark_logo" :alt="site.title + ' logo'" class="h-8 hidden dark:block" />
      </ULink>
      <div class="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <UButton icon="i-material-symbols-partner-heart-rounded" :to="donateNavigation.to" type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-lg font-medium text-nowrap rounded-xl text-white bg-primary border border-primary-line hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus transition disabled:opacity-50 disabled:pointer-events-none">
          {{ donateNavigation.displayText }}
        </UButton>
        <button @click="toggleNav" data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-cta" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
        </button>
      </div>
      <div :class="['items-center justify-between w-full md:w-auto md:order-1', showMenu ? 'md:flex' : 'hidden']" id="navbar-cta">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
          <template v-for="navigation in primaryNavLinks" :key="navigation.to">
            <li
              :class="[
                'max-md:rounded-base transition-colors duration-150 hover:bg-neutral-700',
                navigation.isActive
                  ? 'max-md:bg-brand md:bg-transparent'
                  : 'max-md:hover:bg-neutral-tertiary max-md:focus-within:bg-neutral-tertiary max-md:[&:has(a:active)]:bg-neutral-tertiary',
              ]"
            >
              <ULink
                :to="navigation.to"
                :class="[
                  'block py-2 px-3 rounded md:p-0 max-md:bg-transparent',
                  navigation.isActive
                    ? 'text-secondary md:text-fg-brand'
                    : 'text-heading md:border-0 md:hover:text-fg-brand md:dark:hover:bg-transparent',
                ]"
                :aria-current="navigation.isActive ? 'page' : undefined"
              >
                {{ navigation.displayText }}
              </ULink>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
