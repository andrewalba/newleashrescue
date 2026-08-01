<script setup lang="ts">
const applicationHref = '/files/NLR-Adoption-Application-20191112.docx'
const applicationFilename = 'NLR-Adoption-Application.docx'
</script>

<template>
  <div>
    <a
      :href="applicationHref"
      :download="applicationFilename"
      title="Download the New Leash Rescue adoption application"
      class="w-full sm:w-auto py-4 px-6 inline-flex justify-center items-center gap-x-2 text-xl font-medium text-nowrap rounded-xl border border-primary-line text-white bg-primary hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus transition disabled:opacity-50 disabled:pointer-events-none"
    >
      <UIcon name="i-material-symbols-download-rounded" class="size-6" />
      Download Adoption Application
    </a>
  </div>
</template>

<style scoped>

</style>
