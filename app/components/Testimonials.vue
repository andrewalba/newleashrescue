<script setup lang="ts">
import Testimonial from "~/components/Testimonial.vue";
import { useTestimonials } from '~/composables/useTestimonials'

const { testimonial, testimonials } = useTestimonials()


import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation, EffectFade } from 'swiper/modules';

// Define modules to be used
const modules = [Pagination, Navigation, EffectFade];

</script>

<template>
  <section id="testimonials" class="bg-white dark:bg-gray-900 py-24 ">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-16">
<!--        <span class="text-sm text-gray-600 dark:text-gray-400 font-medium text-center block mb-2 uppercase"></span>-->
        <h2 class="text-4xl text-center font-bold text-gray-700 dark:text-gray-300">{{ testimonial.title }}</h2>
        <template v-for="(paragraph, idx) in testimonial.content">
          <p class="text-lg text-gray-600 dark:text-gray-400">{{ paragraph }}</p>
        </template>
      </div>
      <!--Slider wrapper-->
      <Swiper
          :modules="modules"
          :slides-per-view="1"
          :spaceBetween="30"
          :navigation="true"
          :pagination="{
            clickable: true,
          }"
          :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
          }"
          :autoHeight="true"
          class="w-full md:w-4/5 lg:w-2/3"
      >
        <SwiperSlide v-for="(testimonial, idx) in testimonials" :key="idx">
          <Testimonial :testimonial="testimonial" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>

</template>

<style scoped>
:global(:root) {
  --swiper-pagination-bullet-inactive-color: #9ca3af;
  --swiper-pagination-bullet-opacity: 1;
  --swiper-pagination-color: #007aff;
  --swiper-theme-color: #007aff;
  --swiper-navigation-color: #007aff;
}
:global(.swiper-pagination-bullet) {
  background-color: var(--swiper-pagination-bullet-inactive-color);
  width: 1rem;
  height: 0.5rem;
  border-radius: .5rem;
}
:global(.swiper-pagination-bullet-active)  {
  opacity: var(--swiper-pagination-bullet-opacity, 1);
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
}
:global(.swiper-button-next) {
  color: var(--swiper-navigation-color);
}
:global(.swiper-button-prev) {
  color: var(--swiper-navigation-color);
}
</style>
