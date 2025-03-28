<script setup lang="ts">
import { ref } from 'vue';
const apiUrl = useRuntimeConfig().public.apiUrl

import { useSiteData } from "~/composables/useSiteData"
import Phone from './Phone.vue'
import Email from './Email.vue'

const { site } = useSiteData()

interface formData {
  name: string,
  email: string,
  message: string,
}
const show_overlay = ref(false);
const show_success = ref(false);
const show_validation = ref(false);
const form: formData = {
  name: "",
  email: "",
  message: "",
}
/*let form: formData = {
  name: "",
  email: "",
  message: "",
}*/

const submitForm = async () => {
  show_overlay.value = true
  show_validation.value = false
  // validate
  if (!form.name.trim() || !form.email.trim()) {
    show_validation.value = true
    show_overlay.value = false
    return;
  }
  try{
    const response = await fetch(`${apiUrl}/contact-form`, {
      method: "POST",
      body: JSON.stringify(form),
    } )
    if (!response.ok){
      //Do something when request fails
      return
    }
    onReset()
    show_success.value = true
    show_overlay.value = false
    clearSuccess()
  } catch (e) {
    console.log(e);
    show_overlay.value = false
  }
}
const onReset = () => {
  // Reset our form values
  form.name = "";
  form.email = "";
  form.message = "";
}
const clearSuccess = () => {
  window.setTimeout( () => {
    show_success.value = false;
  }, 12000);
}

const accountData = ref('adopt');
</script>

<template>
  <div>
    <div v-if="show_overlay" class="overlay"></div>
    <!-- Contact -->
    <div class="wrapper style1">
      <section class="container medium">
        <header class="major">
          <h2>Connect with us</h2>
          <p>We share events and other gems through our social media as well. We would love if you would take some time and connect with us through one of our social channels.</p>
        </header>
        <div id="contact" class="box">
          <div class="row" v-if="show_success">
            <div class="col-12 align-center mb-4">
              <strong class="text-xl text-success">Thank you for messaging us!</strong>
            </div>
          </div>
          <div class="row" v-if="show_validation">
            <div class="col-12 align-center mb-4">
              <strong class="text-xl text-danger">Please complete the form!</strong>
            </div>
          </div>
          <div class="row gtr-uniform">
            <div class="col-7 col-12-narrower">
              <form @submit.prevent="submitForm">
                <div class="row gtr-uniform gtr-50">
                  <div class="col-12">
                    <input v-model="form.name" type="text" name="name" id="name" placeholder="Name" autocomplete="true" />
                  </div>
                  <div class="col-12">
                    <input v-model="form.email" type="email" name="email" id="email" placeholder="Email" autocomplete="true" />
                  </div>
                  <div class="col-12">
                    <textarea v-model="form.message" name="message" id="message" placeholder="Message" rows="7"></textarea>
                  </div>
                  <div class="col-12">
                    <ul class="actions">
                      <li><input @click.prevent="submitForm" type="submit" value="Send" /></li>
                      <li><input @reset="onReset" type="reset" class="alt" value="Reset" /></li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-5 col-12-narrower">
              <ul class="labeled-icons">
                <li>
                  <h3 class="icon"><i class="far fa-map-marker"></i> <span class="label">Address</span></h3>
                  {{  site.legalName }}<br />
                  {{ site.address.city }}, {{ site.address.state }} {{ site.address.postal_code }}
                </li>
                <li>
                  <h3 class="icon"><i class="far fa-phone"></i> <span class="label">Phone</span></h3>
                  <Phone />
                </li>
                <li>
                  <h3 class="icon"><i class="far fa-envelope"></i> <span class="label">Email</span></h3>
                  <Email :account="accountData" />
                </li>
                <li v-for="link in site.social_links">
                  <h3 class="icon"><i :class="link.icon"></i> <span class="label">{{ link.label }}</span></h3>
                  <a :href="link.href" title="{{ link.label }}" target="_blank">{{ link.display_title }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
}
</style>
