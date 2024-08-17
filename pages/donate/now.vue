<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div>
    <!-- Donate-->
    <div class="wrapper style1">
      <section id="main" class="container">
        <header class="major">
          <h2>Donate to New Leash Rescue</h2>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="VVED4Z8PFZFLC">
            <button name="submit" title="PayPal - The safer, easier way to pay online!" class="button donate special big"><i class="fab fa-paypal"></i> Paypal Donate</button>
            <img alt="PayPal" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" style="border:none; width:1px; height:1px" />
          </form>
        </header>

        <!-- Content -->
        <section id="content" class="box">
          <span class="image fit">
            <img src="/images/donate.jpg" alt="now" />
            <div class="align-right text-sm">
              Photo by <a href="https://unsplash.com/@kattyukawa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Katt Yukawa</a> on <a href="https://unsplash.com/photos/person-showing-both-hands-with-make-a-change-note-and-coins-K0E6E0a0R3A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </div>
          </span>
          <p>Our mission is to rescue dogs and cats that are in need of a home. We rescue animals in need from impounds, owners whom surrender and many other sources where a animal is found to be without a loving home. Working with volunteers, veterinary clinics, and trainers, we strive to place healthy adoptable animals in permanent homes. We also instruct and educate our communities about the importance of spay/neutering companion animals.</p>
          <p>There are several alternative ways to help New Leash Rescue. Please click any of the options below to find out more.</p>
          <ul class="actions">
            <li><NuxtLink to="/donate/gifts" class="button"><i class="far fa-gift"></i> Corporate Gifts</NuxtLink></li>
            <li><NuxtLink to="/donate/fundraising" class="button"><i class="far fa-thermometer-half"></i> Fundraising</NuxtLink></li>
            <li><NuxtLink to="/donate/memorial" class="button"><i class="far fa-heart"></i> Memorial</NuxtLink></li>
          </ul>
        </section>
      </section>
    </div>
  </div>
</template>

<style scoped>

</style>
