<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | New Leash Rescue` : 'New Leash Rescue';
  },
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Luckiest+Guy|Open+Sans',
    },
    /*{
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css',
    },*/
  ],
  script: [
    {
      id: 'jquery',
      src: 'https://code.jquery.com/jquery-1.12.4.min.js',
      integrity: 'sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=',
      crossorigin: 'anonymous',
      /*src: '/assets/js/jquery.min.js',*/
      type: 'text/javascript',
      async: true,
    },
    /*{
      src: '/assets/js/jquery.dropotron.min.js',
      type: 'text/javascript',
      defer: true,
      body: true
    },
    {
      src: '/assets/js/jquery.scrollex.min.js',
      type: 'text/javascript',
      defer: true,
      body: true
    },*/
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
