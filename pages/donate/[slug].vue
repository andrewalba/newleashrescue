<script setup lang="ts">
import { useDonateData } from "~/composables/useDonateData"
import type { Pages } from '~/models/donate'

definePageMeta({
  layout: "default",
});

type PageKey = keyof Pages;

const { pages } = useDonateData()
const route = useRoute()
const slug = route.params.slug as PageKey
const page = pages.value[slug]
</script>

<template>
  <div>
    <!-- Donate-->
    <div class="wrapper style1">
      <section id="main" class="container">
        <header class="major">
          <h2>{{ page.h2 }}</h2>
        </header>

        <!-- Content -->
        <section id="content" class="box">
          <span class="image fit"><img :src="page.img" :alt="page.alt" /></span>
          <p v-for="content in page.content" v-html="content"></p>
        </section>

      </section>
    </div>
  </div>
</template>

<style scoped>

</style>
