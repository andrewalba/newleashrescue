<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | New Leash Rescue` : 'New Leash Rescue';
  },
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Luckiest+Guy|Open+Sans'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '57x57',
      href: '/assets/icons/apple-icon-57x57.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      href: '/assets/icons/apple-icon-60x60.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      href: '/assets/icons/apple-icon-72x72.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      href: '/assets/icons/apple-icon-76x76.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      href: '/assets/icons/apple-icon-114x114.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      href: '/assets/icons/apple-icon-120x120.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      href: '/assets/icons/apple-icon-144x144.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      href: '/assets/icons/apple-icon-152x152.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/assets/icons/apple-icon-180x180.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '36x36',
      href: '/assets/icons/android-icon-36x36.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '48x48',
      href: '/assets/icons/android-icon-48x48.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '72x72',
      href: '/assets/icons/android-icon-72x72.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: '/assets/icons/android-icon-96x96.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '144x144',
      href: '/assets/icons/android-icon-144x144.png'
    },
    ,
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: '/assets/icons/android-icon-192x192.png'
    }
  ],
  script: [
    {
      src: '/assets/js/browser.min.js',
      type: 'text/javascript',
      defer: true,
      body: true
    },
    {
      src: '/assets/js/breakpoints.min.js',
      type: 'text/javascript',
      defer: true,
      body: true
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/smooth-scroll/14.2.0/smooth-scroll.polyfills.js',
      type: 'text/javascript',
      defer: true,
      body: true
    },
    /*{
      src: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.js',
      type: 'text/javascript',
      body: true
    },*/
    /*{
      src: '/assets/js/util.js',
      type: 'text/javascript',
      defer: true,
      body: true
    },
    {
      src: '/assets/js/main.js',
      type: 'text/javascript',
      defer: true,
      body: true
    }*/
  ],
  bodyAttrs: {
    class: ["loading", "is-preloaded"]
  }
});
</script>
<template>
  <div>

    <Header />

    <!-- Content -->
    <NuxtPage />

    <Footer />
  </div>
</template>
