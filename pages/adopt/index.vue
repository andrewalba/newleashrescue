<script setup lang="ts">

definePageMeta({
  layout: "default",
});

useHead({
  script: [
    {
      src: 'https://www.petfinder.com/pet-scroller.bundle.js',
      // Using bodyClose ensures the script loads after the HTML is parsed, similar to placing it in the body
      tagPosition: 'bodyClose'
    }
  ]
})
</script>

<template>
  <!-- Adopt-->
  <div class="wrapper style1">
    <section id="main" class="container">
      <!-- Content -->
      <section id="content">
        <!-- Pet List Widget - Start -->
        <pet-scroller
            s3Url="https://dbw3zep4prcju.cloudfront.net/"
            apiBase="https://psl.petfinder.com/graphql"
            organization='["ef14e030-9d27-4d78-bd47-a85a80372b56"]'
            status="adoptable"
            petfinderUrl="https://www.petfinder.com/"
            hideBreed="true"
            limit=24
            petListTitle="">
        </pet-scroller>
        <!-- Pet List Widget - End -->
      </section>

    </section>
  </div>

</template>

<style scoped>

</style>
