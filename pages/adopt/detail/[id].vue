<script setup lang="ts">
import { useAnimalsStore } from "~/stores/animals.store"
import type { Animal } from "~/models"
import {
  Carousel,
  Slide,
  Pagination,
  Navigation,
} from "#components";

const route = useRoute()
const animalStore = useAnimalsStore()

await animalStore.show(parseInt(route.params.id.toString(), 10))
const animal: Animal = animalStore.getAnimal
const attributes = animalStore.getAttributes
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
            <div v-if="animal.tags">
              <span class="badge badge-primary" v-for="tag in animal.tags">
                {{ tag }}
              </span>
            </div>
            <hr/>
            <div>
              <NuxtLink :to="animal.url" :title="animal.name" class="button" target="_blank">
                <i class="far fa-dog fa-initial" v-if="animal.species === 'Dog'"></i>
                <i class="far fa-cat fa-initial" v-if="animal.species === 'Cat'"></i>
                <i class="far fa-paw fa-initial" v-if="animal.species !== 'Dog' && animal.species !== 'Cat'"></i> More Details
              </NuxtLink>
              <NuxtLink :to="'https://sap.petfinderfoundation.com/sponsor-a-pet/' + petfinderOrgId + '/US/US/' + animal.id + '/'" class="button alt" target="_blank"><i class="far fa-donate"></i> Sponsor Me</NuxtLink>
              <NuxtLink :to="'https://www.petfinder.com/user/profile/create/?experience=loginAtEnd&source=adoptionInquiry&animalId=' + animal.id" class="button tertiary" target="_blank"><i class="far fa-paw"></i> Adopt Me</NuxtLink>
            </div>
            <!-- <ul class="icons">
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
            <section v-if="attributes">
              <h3>Characteristics</h3>
              <ul>
                <li v-for="attribute in attributes">
                  {{ attribute }}
                </li>
              </ul>
            </section>
            <hr />
            <section>
              <h3>Breed</h3>
              <ul class="alt">
                <li v-if="animal.breeds.primary">{{ animal.breeds.primary }}</li>
                <li v-if="animal.breeds.secondary">{{ animal.breeds.secondary }}</li>
                <li v-if="animal.breeds.mixed === true">Mixed</li>
              </ul>
            </section>
            <hr />
            <section>
              <h3>About</h3>
              <ul class="alt">
                <li>Age: {{ animal.age }}</li>
                <li>Gender: {{ animal.gender }}</li>
                <li>Size: {{ animal.size }}</li>
              </ul>
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
