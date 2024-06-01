<script setup lang="ts">

</script>

<template>
  <header id="header">
    <h1><a href="/" title="New Leash Rescue">New Leash Rescue</a></h1>
    <nav id="nav">
      <ul>
        <li><a href="/"><i class="far fa-home"></i> Home</a></li>
        <li>
          <NuxtLink to="/adopt" title="Adopt">Adopt</NuxtLink>
          <ul>
            <li><NuxtLink to="/adopt/dog">Dogs to Adopt</NuxtLink></li>
            <li><NuxtLink to="/adopt/cat">Cats to Adopt</NuxtLink></li>
<!--            <li><a href="/adopt/small-furry">Small Furries to Adopt</a></li>-->
            <li><NuxtLink to="/adopt/policy">Adoption Policy</NuxtLink></li>
            <li><NuxtLink to="/adopt/success">Success Stories</NuxtLink></li>
          </ul>
        </li>
        <li class="donate">
          <NuxtLink to="/donate/now" title="Donate">Donate</NuxtLink>
          <ul>
            <li><NuxtLink to="/donate/now">Now</NuxtLink></li>
            <li><NuxtLink to="/donate/gifts">Gifts</NuxtLink></li>
            <li><NuxtLink to="/donate/fundraising">Fundraising</NuxtLink></li>
            <li><NuxtLink to="/donate/memorial">Memorial</NuxtLink></li>
            <li><NuxtLink to="/volunteer">Volunteer</NuxtLink></li>
          </ul>
        </li>
        <li><NuxtLink to="/foster" title="Foster">Foster</NuxtLink></li>
        <li><NuxtLink to="/events" title="Events">Events</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

</style>
