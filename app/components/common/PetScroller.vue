<script lang="ts">
const PET_SCROLLER_TAG = 'pet-scroller'
const PET_SCROLLER_SRC = 'https://www.petfinder.com/pet-scroller.bundle.js'

// Kept at module scope so the vendor bundle is fetched and evaluated once per page
// load. Re-executing it throws on the duplicate customElements.define() call.
let bundleRequest: Promise<void> | null = null

function loadPetScrollerBundle(): Promise<void> {
  if (bundleRequest) return bundleRequest

  bundleRequest = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${PET_SCROLLER_SRC}"]`)
    if (existing) {
      resolve()
      return
    }

    const script = document.createElement('script')
    script.src = PET_SCROLLER_SRC
    script.async = true
    script.addEventListener('load', () => resolve())
    script.addEventListener('error', () => reject(new Error('Failed to load the Petfinder pet-scroller bundle')))
    document.body.appendChild(script)
  })

  return bundleRequest
}
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{
  s3Url?: string
  apiBase?: string
  organization?: string
  status?: string
  petfinderUrl?: string
  hideBreed?: string
  limit?: number | string
  petListTitle?: string
}>(), {
  s3Url: 'https://dbw3zep4prcju.cloudfront.net/',
  apiBase: 'https://psl.petfinder.com/graphql',
  organization: '["ef14e030-9d27-4d78-bd47-a85a80372b56"]',
  status: 'adoptable',
  petfinderUrl: 'https://www.petfinder.com/',
  hideBreed: 'true',
  limit: 24,
  petListTitle: '',
})

const host = ref<HTMLElement | null>(null)

onMounted(async () => {
  if (!host.value) return

  // The widget reads its configuration from HTML attributes. Rendering the tag in a
  // Vue template assigns them as DOM properties instead once the custom element has
  // been defined by a previous visit, so the widget starts up unconfigured and its
  // Petfinder request fails. Building the element by hand keeps them as attributes.
  const element = document.createElement(PET_SCROLLER_TAG)
  const attributes: Record<string, string> = {
    s3Url: props.s3Url,
    apiBase: props.apiBase,
    organization: props.organization,
    status: props.status,
    petfinderUrl: props.petfinderUrl,
    hideBreed: props.hideBreed,
    limit: String(props.limit),
    petListTitle: props.petListTitle,
  }

  for (const [name, value] of Object.entries(attributes)) {
    element.setAttribute(name, value)
  }

  host.value.replaceChildren(element)

  try {
    await loadPetScrollerBundle()
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div ref="host" />
</template>

<style scoped>

</style>
