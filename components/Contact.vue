<script setup lang="ts">

</script>

<template>
  <div>
    <!-- Contact -->
    <div class="wrapper style1">
      <section class="container medium">
        <header class="major">
          <h2>Connect with us</h2>
          <p>We share events and other gems through our social media as well. We would love if you would take some time and connect with us through one of our social channels.</p>
        </header>
        <div id="contact" class="box">
          <div class="row gtr-uniform">
            <div class="col-7 col-12-narrower">
              <form method="post" action="/contact/general">
                <div class="row gtr-uniform gtr-50">
                  <div class="col-12">
                    <input type="text" name="name" id="name" placeholder="Name" />
                  </div>
                  <div class="col-12">
                    <input type="email" name="email" id="email" placeholder="Email" />
                  </div>
                  <div class="col-12">
                    <textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
                  </div>
                  <div class="col-12">
                    <ul class="actions">
                      <li><input type="submit" value="Send" /></li>
                      <li><input type="reset" class="alt" value="Reset" /></li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-5 col-12-narrower">
              <ul class="labeled-icons">
                <li>
                  <h3 class="icon"><i class="far fa-map-marker"></i> <span class="label">Address</span></h3>
                  New Leash Rescue<br />
                  Farmington, MN 55024
                </li>
                <li>
                  <h3 class="icon"><i class="far fa-phone"></i> <span class="label">Phone</span></h3>
                  <Phone />
                </li>
                <li>
                  <h3 class="icon"><i class="far fa-envelope"></i> <span class="label">Email</span></h3>
                  <Email />
                </li>
                <li>
                  <h3 class="icon"><i class="fab fa-twitter"></i> <span class="label">Twitter</span></h3>
                  <a href="https://twitter.com/newleashrescue">twitter.com/newleashrescue</a>
                </li>
                <li>
                  <h3 class="icon"><i class="fab fa-facebook"></i> <span class="label">Facebook</span></h3>
                  <a href="https://www.facebook.com/newleash2018/">facebook.com/newleash2018</a>
                </li>
                <!--<li>
                  <h3 class="icon fa-linkedin"><span class="label">LinkedIn</span></h3>
                  <a href="#">linkedin.com/untitled-tld</a>
                </li>-->
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>

</style>
