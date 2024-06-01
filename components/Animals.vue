<script setup lang="ts">

</script>

<template>
  <tr v-for="animal in animals" role="row" class="odd">
    <td class=" text-center">
      <a href="/detail/pet.id" class="btn btn-default"><i class="fa fa-paw"></i> View</a>
    </td>
    <td class=" text-center">
      <a href="/detail/pet.id"><img src="" class="image fit" alt="pet.id"/></a>
      <span class="fa-stack fa-lg"><i class="fa fa-camera-retro fa-stack-1x"></i><i class="fa fa-ban fa-stack-2x"></i></span>
    </td>
    <td>pet.name</td>
    <td>pet.animal</td>
    <td>
      breed
    </td>
    <td>pet.animalSize</td>
    <td>pet.age</td>
    <td>pet.sex</td>
  </tr>
</template>

<style scoped>

</style>
