<script setup lang="ts">
import { useAnimalsStore } from "~/stores/animals.store"
import type { Animal } from "~/models/animal"
import { PetfinderPagination } from "#components";
const route = useRoute()
const router = useRouter()
const currentRoute = router.currentRoute._rawValue
let params = route.query
params.type = route.params.animal_type


const animalStore = useAnimalsStore()

await animalStore.hydrate(params)
const animals = animalStore.getAnimals()
const pagination = animalStore.getPagination
function primary_photo(animal: Animal) {
  if (animal.primary_photo_cropped !== null) {
    return animal.primary_photo_cropped.small
  } else {
    return '/empty-image.jpg'
  }
}

function getBreeds(animal: Animal) {
  let _breeds = []
  if (animal.breeds) {

    for (const [key, value] of Object.entries(animal.breeds)) {
      if (['primary','secondary'].includes(key)) {
        if (value !== null) {
          _breeds.push(value)
        }
      }
      if (key === 'mixed' && value === true) {
        _breeds.push('Mixed')
      }
    }
  }
  return _breeds.join(', ')
}


</script>

<template>
  <!-- Adopt-->
  <div class="wrapper style1">
    <section id="main" class="container">
      <!-- Content -->
      <section id="content" class="box">
        <table class="table table-striped table-condensed table-responsive" id="petFinderTable" style="width:100%;border: 1px solid #ddd;" data-offset="0" data-count="100">
          <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Name</th>
            <th>Animal</th>
            <th>Breed</th>
            <th>Size</th>
            <th>Age</th>
            <th>Sex</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="animal in animals"
              role="row" class="odd">
            <td class=" text-center">
              <NuxtLink :to="'/adopt/detail/' + animal.id" class="btn btn-default"><i class="far fa-paw"></i> View</NuxtLink>
            </td>
            <td class="text-center px-0">
              <NuxtLink :to="'/adopt/detail/' + animal.id">
                <NuxtImg :src="primary_photo(animal)"
                         :alt="animal.name"
                         height="120"/>
              </NuxtLink>
            </td>
            <td>{{ animal.name }}</td>
            <td>{{ animal.type }}</td>
            <td>
              <div v-if="animal.breeds">
                <span>{{ getBreeds(animal) }}</span>
              </div>
            </td>
            <td>{{ animal.size }}</td>
            <td>{{ animal.age }}</td>
            <td>{{ animal.gender }}</td>
          </tr>

          </tbody>
        </table>
        <PetfinderPagination v-if="pagination" :pagination="pagination" :route="currentRoute.path" />
      </section>

    </section>
  </div>

</template>

<style scoped>

</style>
