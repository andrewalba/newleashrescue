<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
import Phone from "~/components/Phone.vue"

const email = runtimeConfig.public.email
console.log(email)
</script>

<template>
  <div>
    <!-- Volunteer-->
    <div class="wrapper style1">
      <section id="main" class="container">
        <header class="major">
          <h2>Volunteer Opportunities</h2>
          <p>There are many short and long term opportunities to volunteer with us.</p>
        </header>

        <!-- Content -->
        <section id="content" class="box">
          <span class="image fit"><NuxtImg src="/volunteer.jpg" alt="volunteer" /></span>
          <p>Some of the things we can always use help with are: </p>
          <ul>
            <li>assisting with adoption days (must be at least 18 years old)</li>
            <li>making phone calls</li>
            <li>taking photos and working with photo editing software</li>
            <li>website help</li>
            <li>fund raising</li>
            <li>special events - pet expos, state fair, county fairs, etc</li>
            <li>newsletters and mailings</li>
          </ul>
          <p>There are so many things that need doing that we always need volunteers.</p>

          <ul class="alt">
            <li><i class="far fa-phone"></i> <Phone /></li>
            <li><i class="far fa-envelope"></i> <NuxtLink :to="'mailto:' + email" class="link email" title="click here to send email" data-contacttype="volunteer">Send us an e-mail</NuxtLink></li>
          </ul>
        </section>

      </section>
    </div>

    <!-- Volunteer Donate -->
    <div class="wrapper style2">
      <section class="container medium">
        <header class="major">
          <h3>Donate to New Leash Rescue</h3>
          <p>If you cannot foster or volunteer, please consider making a <NuxtLink to="/donate/now" title="donate">donation to New Leash Rescue</NuxtLink>. Thank you!</p>
        </header>
      </section>
    </div>
  </div>
</template>

<style scoped>

</style>
