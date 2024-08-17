<script setup lang="ts">
definePageMeta({
  layout: "default",
});
import { useFosterData } from "~/composables/useFosterData"

const { main, donate } = useFosterData()
</script>

<template>
  <div>
    <!-- Foster-->
    <div class="wrapper style1">
      <section id="main" class="container">
        <header class="major">
          <h2>{{ main.header.h2 }}</h2>
          <p v-for="content in main.header.content" v-html="content"></p>
        </header>

        <!-- Content -->
        <section id="content" class="box">
          <h3>{{ main.subSection.content.h3 }}</h3>
          <p v-for="content in main.subSection.content.content" v-html="content"></p>
        </section>

      </section>
    </div>

    <div class="wrapper style3">
      <section class="container medium">
        <header class="major">
          <h3>{{ donate.header.h3 }}</h3>
        </header>
        <section>
          <p v-for="content in donate.subSection.content" v-html="content">
          </p>
          <ul class="actions">
            <li v-for="link in donate.subSection.links">
              <NuxtLink :to="link.to" class="button" :title="link.title"><i :class="link.icon"></i> {{ link.displayText }}</NuxtLink>
            </li>
          </ul>
        </section>
      </section>
    </div>

  </div>
</template>

<style scoped>

</style>
