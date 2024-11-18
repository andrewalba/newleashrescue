  <script setup lang="ts">
  import { useSiteData } from "~/composables/useSiteData"
  import { useHomeData } from "~/composables/useHomeData";
  import Contact from "~/components/Contact.vue"
  import Banner from "~/components/Banner.vue";

  definePageMeta({
    layout: "default",
  })

  const { site } = useSiteData()
  const { mission, why, ftw } = useHomeData()
  const endDate = new Date(2024, 10, 22)

  </script>

  <template>
    <div>
      <Banner v-if="new Date() < endDate" />
      <!-- Banner -->
      <section v-else id="banner">
        <h2>{{  site.title }}</h2>
        <p>{{  site.tagLine }}</p>
      </section>

      <!-- One -->
      <div id="one" class="wrapper style1">
        <section class="container">
          <header class="major">
            <h2>{{ mission.h2 }}</h2>
            <p v-for="content in mission.content" v-html="content"></p>
          </header>
          <div class="row gtr-uniform">
            <div v-for="section in mission.specialSections" class="col-4 col-12-narrower">
              <section class="box special">
                <div class="icon major">
                  <i class="large" :class="section.icon" />
                </div>
                <h3>{{ section.h3 }}</h3>
                <p v-for="content in section.content" v-html="content"></p>
                <ul class="actions special">
                  <li><NuxtLink :to="section.link?.to" :title="section.link?.title" class="button alt">{{ section.link?.displayText }}</NuxtLink></li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </div>

      <!-- Two -->
      <div class="wrapper style2">
        <section class="container medium">
          <header class="major">
            <h2>{{ why.h2 }}</h2>
            <p v-for="content in why.content" v-html="content"></p>
          </header>
          <div class="row gtr-uniform">
            <div v-for="section in why.specialSections" class="col-6 col-12-narrower">
              <section class="box special">
                <div class="icon major alt">
                  <i class="large" :class="section.icon" />
                </div>
                <h3>{{ section.h3 }}</h3>
                <p v-for="content in section.content" v-html="content"></p>
              </section>
            </div>
          </div>
        </section>
      </div>

      <!-- Three -->
      <div class="wrapper style3">
        <section class="container">
          <header class="major">
            <h2>{{ ftw.h2 }}</h2>
            <p v-for="content in ftw.content" v-html="content"></p>
          </header>
          <div class="row">
            <div v-for="section in ftw.specialSections" class="col-4 col-12-narrower">
              <section class="special">
                <NuxtLink :to="ftw.link.to" :title="ftw.link.title" class="image fit"><img :src="section.img.src" :alt="section.img.alt" /></NuxtLink>
                <h3>{{ section.h3 }}</h3>
                <p v-for="content in section.content" v-html="content"></p>
              </section>
            </div>
          </div>
        </section>
      </div>

      <Contact />
    </div>
  </template>

  <style scoped>

  </style>
