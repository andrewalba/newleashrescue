<script setup lang="ts">
import { useSponsorsData } from "~/composables/useSponsorsData";
definePageMeta({
  layout: "default",
});
const { sponsor } = useSponsorsData();


</script>

<template>
  <div>
    <!-- Sponsors-->
    <div class="wrapper style1">
      <section id="main" class="container">
        <header class="major">
          <h2>{{ sponsor.h2 }}</h2>
        </header>

        <div class="row gtr-uniform">
          <div v-for="_sponsor in sponsor.sponsors" class="col-6 col-12-narrower">
            <section class="box special">
              <span class="image" :class="_sponsor?.img_fit"><img :src="_sponsor.img.src" :alt="_sponsor.img.alt"/></span>
              <h3>{{ _sponsor.h3 }}</h3>
              <address>
                {{ _sponsor.address.address1 }}<br/>
                {{ _sponsor.address.city }}, {{ _sponsor.address.state }} {{ _sponsor.address.postcode }}<br/>
              </address>

              <ul class="alt">
                <li><i class="far fa-phone"></i> <abbr title="Phone">P:</abbr> <NuxtLink :to="'tel:' + _sponsor.phone.raw" :title="_sponsor.h3 + ' Phone'">
                  {{ _sponsor.phone.formatted }}</NuxtLink></li>
                <li><i class="far fa-external-link"></i> <NuxtLink :to="_sponsor.link.to" :title="_sponsor.link.title" target="_blank">
                  {{_sponsor.link.displayText }}</NuxtLink></li>
              </ul>


              <p v-for="content in _sponsor.content" v-html="content"></p>
            </section>
          </div>
        </div>
      </section>
    </div>

    <!-- Veterinarians-->
    <div class="wrapper style2">
      <section id="main" class="container medium">
        <header class="major">
          <h2>{{ sponsor.veterinarians.h2 }}</h2>
        </header>

        <div class="row gtr-uniform">
          <div v-for="vet in sponsor.veterinarians.vets" class="col-12 col-12-narrower">
            <section id="content" class="box">
              <span class="image"><img :src="vet.img.src" :alt="vet.img.alt" /></span>
              <h3>{{ vet.h3 }}</h3>
              <address>
                {{ vet.address.address1 }}<br/>
                {{ vet.address.city }}, {{ vet.address.state }} {{  vet.address.postcode }}<br/>
              </address>

              <ul style="list-style-type: none; margin: 1rem 0 3rem;">
                <li><i class="far fa-phone"></i> <abbr title="Phone">P:</abbr> <NuxtLink :to="'tel:' + vet.phone.raw" :title="vet.h3 + ' Phone'">
                  {{ vet.phone.formatted }}</NuxtLink></li>
                <li><i class="far fa-external-link"></i> <NuxtLink :to="vet.link.to" :title="vet.link.title" target="_blank">
                  {{ vet.link.displayText }}</NuxtLink></li>
              </ul>

              <h5>Location Hours:</h5>
              <dl class="horizontal">
                <div v-for="businessHour in vet.business_hours" :key="businessHour.date">
                  <dt>{{ businessHour.date }}</dt>
                  <dd>{{ businessHour.hours }}</dd>
                </div>
              </dl>
              <p v-for="content in vet.content" v-html="content"></p>
            </section>
          </div>
        </div>

      </section>
    </div>
  </div>
</template>

<style scoped>

</style>
