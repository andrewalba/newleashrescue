<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

const email = runtimeConfig.public.email
</script>

<template>
  <div>
    <!-- Foster-->
    <div class="wrapper style1">
      <section id="main" class="container">
        <header class="major">
          <h2>Foster Opportunities</h2>
          <p>Foster homes and volunteers are the lifeblood of New Leash Rescue, Inc. New Leash Rescue does not have any paid employees. All of the work is done by volunteer foster families and people who help with various tasks. That way all of the money and gifts that we receive go directly to the care and rehabilitation of the animals. We would love to welcome you into our New Leash Rescue family as a new volunteer or foster family. Please read the information below.</p>
        </header>

        <!-- Content -->
        <section id="content" class="box">
          <h3>Fostering Dogs</h3>
          <p>
            Woof woof! We're currently in the process of reviewing and updating our applications to make sure we're providing the best possible care for our furry friends. As a result, we've temporarily removed them from our website. Don't worry though, they'll be back online shortly. In the meantime, you can <NuxtLink :to="'mailto:' + email" title="email us">email us</NuxtLink> or <NuxtLink to="/adopt" title="adopt">take a look at some of our adorable pups</NuxtLink> who are looking for their forever homes. We promise they'll bring a smile to your face and a wag to your tail. Thanks for your understanding and support!
          </p>
        </section>

      </section>
    </div>

    <div class="wrapper style3">
      <section class="container medium">
        <header class="major">
          <h3>Donate</h3>
        </header>
        <section>
          <p>If you cannot foster or volunteer, please consider making a <NuxtLink to="/donate/now" title="Donate Now">donation</NuxtLink>. There are various ways you can donate to help.</p>
          <ul class="actions">
            <li><NuxtLink to="/donate/now" class="button" title="Donate Now"><i class="far fa-money-bill"></i> Donate Now</NuxtLink></li>
            <li><NuxtLink to="/donate/fundraising" class="button" title="Fundraising"><i class="far fa-thermometer-half"></i>  Fundraising</NuxtLink></li>
            <li><NuxtLink to="/donate/gifts" class="button" title="Corporate Gifts"> <i class="far fa-gift"></i> Corporate gifts</NuxtLink></li>
            <li><NuxtLink to="/donate/memorial" class="button" title="Memorial"> <i class="far fa-heart"></i> Memorial</NuxtLink></li>
          </ul>
        </section>
      </section>
    </div>

  </div>
</template>

<style scoped>

</style>
