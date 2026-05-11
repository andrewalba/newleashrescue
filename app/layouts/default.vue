<script setup lang="ts">

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | New Leash Rescue` : 'New Leash Rescue';
  },
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Luckiest+Guy|Open+Sans&display=swap',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '57x57',
      href: '/apple-icon-57x57.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      href: '/apple-icon-60x60.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      href: '/apple-icon-72x72.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      href: '/apple-icon-76x76.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      href: '/apple-icon-114x114.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      href: '/apple-icon-120x120.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      href: '/apple-icon-144x144.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      href: '/apple-icon-152x152.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-icon-180x180.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '36x36',
      href: '/android-icon-36x36.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '48x48',
      href: '/android-icon-48x48.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '72x72',
      href: '/android-icon-72x72.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: '/android-icon-96x96.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '144x144',
      href: '/android-icon-144x144.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: '/android-icon-192x192.png'
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
