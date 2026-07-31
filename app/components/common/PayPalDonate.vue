<script setup lang="ts">

</script>

<template>
  <div>
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" rel="noopener noreferrer">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="VVED4Z8PFZFLC" />
      <button name="submit" title="PayPal - The safer, easier way to pay online!" class="py-2 px-3 inline-flex items-center gap-x-2 text-lg font-medium text-nowrap rounded-xl text-white bg-primary border border-primary-line hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus transition disabled:opacity-50 disabled:pointer-events-none">
        <UIcon name="i-material-symbols-credit-card-heart-rounded" /> Donate
      </button>
      <img alt="PayPal" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
           style="border-width: medium; border-style: none; border-color: currentcolor; border-image: initial; width: 1px; height: 1px;">
    </form>
  </div>
</template>

<style scoped>

</style>
