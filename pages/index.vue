<script setup lang="ts">

import Email from "~/components/Email.vue";
</script>

<template>
  <div>
    <!-- Banner -->
    <section id="banner">
      <h2>New Leash Rescue</h2>
      <p>Giving dogs a new leash on life</p>
      <!--<ul class="actions special">
        <li><NuxtLink data-scroll to="#one" class="button">Our Mission</NuxtLink></li>
      </ul>-->
    </section>

    <!-- One -->
    <div id="one" class="wrapper style1">
      <section class="container">
        <header class="major">
          <h2>Our Mission</h2>
          <p>Our mission is to help the dogs and cats who cannot help themselves.  Animals in need come to us from shelters, impounds, and owner surrenders and receive the veterinary care and behavioral support they need to place them in permanent, loving homes.  We collaborate with other rescues, veterinary clinics, and trainers to ensure the best placement for each animal, while also providing support and resources for families after adoption.</p>
        </header>
        <div class="row gtr-uniform">
          <div class="col-4 col-12-narrower">
            <section class="box special">
              <div class="icon major">
                <i class="large far fa-paw" />
              </div>
              <h3>Adopt</h3>
              <p>New Leash Rescue holds adoption events most Saturdays at the Lakeville PetSmart. There are also several other events throughout the year so please check our calendar and follow us on Facebook for upcoming event notices.</p>
              <ul class="actions special">
                <li><NuxtLink to="/adopt" class="button alt">Learn More</NuxtLink></li>
              </ul>
            </section>
          </div>
          <div class="col-4 col-12-narrower ">
            <section class="box special">
              <div class="icon major">
                <i class="large far fa-users" />
              </div>
              <h3>Foster</h3>
              <p>We are greatly in need of more foster parents! There are many animals in need waiting to come into rescue and the more fosters we have, the more we can help. Contact us today if you are able to foster!</p>
              <ul class="actions special">
                <li><NuxtLink to="/foster" class="button alt">Learn More</NuxtLink></li>
              </ul>
            </section>
          </div>
          <div class="col-4 col-12-narrower">
            <section class="box special">
              <div class="icon major">
                <i class="large far fa-gift" />
              </div>
              <h3>Donate</h3>
              <p>All proceeds go to rescue, rehabilitation, and rehoming of the animals in our care. Your donation can help us save animals in need in many ways! Consider a monthly donation to help us save more.<br/></p>
              <ul class="actions special">
                <li><NuxtLink to="/donate/now" class="button alt">Learn More</NuxtLink></li>
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
          <h2>Why New Leash Rescue</h2>
          <p>New Leash Rescue was formed to assist dogs in need of care and placement in a loving home. We have expanded our reach to include cats. We are a 100% non-profit 501c(3) organization dedicated to saving animals in need from desperate situations that deserve a new leash on life! Follow us on <NuxtLink to="https://www.facebook.com/newleash2018/" target="_blank">Facebook</NuxtLink>!</p>
        </header>
        <div class="row gtr-uniform">
          <div class="col-6 col-12-narrower">
            <section class="box special">
              <div class="icon major alt">
                <i class="large far fa-life-ring" />
              </div>
              <h3>Rescue</h3>
              <p>We connect with local partners to find positive solutions for the animals in need. Once they are secured in a foster home you can look into their eyes and see things are going to get better for them.</p>
            </section>
          </div>
          <div class="col-6 col-12-narrower">
            <section class="box special">
              <div class="icon major alt">
                <i class="large far fa-medkit" />
              </div>
              <h3>Rehabilitate</h3>
              <p>If a dog or cat needs medical attention, extra time to understand they’re in a safe place, or simply better social skills, our team at NLR is up for the challenge. Each animal is individually assessed and cared for by our experienced team.</p>
            </section>
          </div>
          <div class="col-6 col-12-narrower">
            <section class="box special">
              <div class="icon major alt">
                <i class="large far fa-home" />
              </div>
              <h3>Homing</h3>
              <p>Any foster parent will tell you how wonderful it is to find the right home for the pet they've been caring for. They will also tell you it's tough to let them go! That's simply because our hearts are in the right place.</p>
            </section>
          </div>
          <div class="col-6 col-12-narrower">
            <section class="box special">
              <div class="icon major alt">
                <i class="large far fa-book" />
              </div>
              <h3>Educate</h3>
              <p>We are active in the communities we serve and participate in programs to help educate the public about animals in need, rescue, and responsibilities. If you are looking for someone to participate in an educational event, please contact us.</p>
            </section>
          </div>
        </div>
      </section>
    </div>

    <!-- Three -->
    <div class="wrapper style3">
      <section class="container">
        <header class="major">
          <h2>Canines for the win!</h2>
          <p><em>"A fresh start."</em> <em>"A new beginning".</em> <em>"Happily ever after."</em></p>
          <p>This is our favorite part. Sharing our triumphant success! We love to hear from the wonderful people who have adopted from New Leash Rescue and all about their new lives together. Please <Email /> your New Leash Rescue success story.</p>
        </header>
        <div class="row">
          <div class="col-4 col-12-narrower">
            <section class="special">
              <NuxtLink to="#" class="image fit"><NuxtImg src="/ftw/rizzo.jpg" alt="Rizzo" /></NuxtLink>
              <h3>Rizzo</h3>
              <p>Cute baby Rizzo is now Esther and went from being left alone at an impound to a brand-new loving family to call her own fur-ever!</p>
            </section>
          </div>
          <div class="col-4 col-12-narrower">
            <section class="special">
              <NuxtLink to="#" class="image fit"><NuxtImg src="/ftw/max.jpg" alt="Max" /></NuxtLink>
              <h3>Max</h3>
              <p>Sweet little Max came from a southern rescue where they have more pups than then can find families. After bringing him up to New Leash Rescue, he found his new family and is living happily fur-ever after!</p>
            </section>
          </div>
          <div class="col-4 col-12-narrower">
            <section class="special">
              <NuxtLink to="#" class="image fit"><NuxtImg src="/ftw/teddy.jpg" alt="Teddy" /></NuxtLink>
              <h3>Teddy</h3>
              <p>Teddy was part of an out of control breeding operation in Missouri. New Leash Rescue took him in, gave him care, and he now has a posh new home and family in Minnesota that loves him like he deserves!</p>
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
