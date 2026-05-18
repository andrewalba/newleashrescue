<script setup lang="ts">

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | New Leash Rescue` : 'New Leash Rescue';
  },
  link: [
    {
      rel: 'android-chrome-192x192',
      sizes: '192x192',
      href: '/android-chrome-192x192.png'
    },
    {
      rel: 'android-chrome-512x512',
      sizes: '512x512',
      href: '/android-chrome-512x512.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/vnd.microsoft.icon',
      sizes: '16x16',
      href: '/favicon.ico',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    }
  ],
  script: [],
  bodyAttrs: {
    class: ["loading", "is-preloaded"]
  }
});
</script>
<template>
  <div>

    <CommonNavigation />
    <slot></slot>
    <CommonFooter />
  </div>
</template>
