<script setup lang="ts">
import { useAnimalsStore } from "~/stores/animals.store"
import {
  Carousel,
  Slide,
  Pagination,
  Navigation,
} from "#components";

const route = useRoute()
const animalStore = useAnimalsStore()

await animalStore.show(parseInt(route.params.id.toString(), 10))
const animal = animalStore.getAnimal
const petfinderOrgId = useRuntimeConfig().public.petfinderOrgId
</script>

<template>
  <!-- Adopt-->
  <div class="wrapper style1">
    <section id="main" class="container">
      <header class="major">
        <h2>{{ animal.name }}</h2>
      </header>
      <div class="row">
        <div class="col-8 col-12-narrower">
          <!-- Content -->
          <section id="content" class="box">
            <Carousel>
              <Slide v-for="(photo, idx) in animal.photos" :key="idx">
                <div class="carousel__item">
                  <NuxtImg :src="photo.medium" :alt="animal.name" />
                </div>
              </Slide>
              <template #addons>
                <Navigation />
                <Pagination />
              </template>
            </Carousel>

            <h3>{{ animal.name }}</h3>
            <div class="h3">
              <span class="badge badge-primary" v-if="animal.breeds.primary">{{ animal.breeds.primary }}</span>
              <span class="badge" v-if="animal.breeds.secondary">{{ animal.breeds.secondary }}</span>
              <span class="badge" v-if="animal.breeds.mixed === true">Mixed</span>
            </div>
            <hr/>
            <p>{{ animal.description }}</p>
<!--            <ul class="icons">
              <li><NuxtLink :to="http://www.facebook.com/share.php?u={{ urlencode(@fbShareLink) }}" class="icon" title="Share on Facebook" target="_blank"><i class="fab fa-facebook"></i> <span class="label">Facebook</span></NuxtLink></li>
              <li><NuxtLink to="#" class="icon" title="" target="_blank"><i class="fab fa-twitter"></i> <span class="label">Twitter</span></NuxtLink></li>
              <li><NuxtLink to="#" class="icon" title="" target="_blank"><i class="fab fa-google"></i> <span class="label">Google</span></NuxtLink></li>
              <li><NuxtLink to="#" class="icon" title="" target="_blank"><i class="fab fa-pintrest"></i> <span class="label">Pintrest</span></NuxtLink></li>
            </ul>-->
            <p>Powered by <NuxtLink to="https://www.petfinder.com/" target="_blank" title="Petfinder">Petfinder</NuxtLink><sup>TM</sup></p>
          </section>

        </div>
        <div class="col-4 col-12-narrower">

          <!-- Sidebar -->
          <section id="sidebar" class="box">
            <section>
              <h3>Options</h3>
              <ul>
<!--                <check if="{{ @pet['options'] }}">
                  <repeat group="{{ @pet['options'] }}" value="{{ @option }}">
                      <li>{{ @option }}</li>
                  </repeat>
                </check>-->
              </ul>
              <footer>
                <ul class="actions">
                  <li><NuxtLink :to="'https://sap.petfinderfoundation.com/sponsor-a-pet/' + petfinderOrgId + '/US/US/' + animal.id + '/'" class="button small"><i class="far fa-donate"></i> Sponsor Me</NuxtLink></li>
                </ul>
              </footer>
            </section>
            <hr />
            <section>
              <h3>About</h3>
              <ul class="alt">
                <li>Age: {{ animal.age }}</li>
                <li>Gender: {{ animal.gender }}</li>
                <li>Size: {{ animal.size }}</li>
              </ul>
              <footer>
                <ul class="actions">
                  <li><NuxtLink to="#" data-btn="contact" :data-petid="animal.id" data-contacttype="adopt" data-subject="adopt" class="button small"><i class="far fa-paw"></i> Adopt Me</NuxtLink></li>
                </ul>
              </footer>
            </section>
          </section>

        </div>
      </div>
    </section>
  </div>
</template>

<style>
button.carousel__prev > svg,
button.carousel__next > svg {
  color: #3a3347;
}
.carousel__item > img {
  width: 300px;
}
@media screen and (min-width: 737px) {
  .carousel__item > img {
    width: 480px;
  }
}
@media screen and (min-width: 841px) {
  .carousel__item > img {
    width: 380px;
  }
}
@media screen and (min-width: 981px) {
  .carousel__item > img {
    width: 480px;
  }
}
@media screen and (min-width: 1281px) {
  .carousel__item > img {
    width: 580px;
  }
}
</style>
