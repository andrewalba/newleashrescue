<script setup lang="ts">
const applicationHref = '/files/NLR-Foster-Application-20191112.docx'
const applicationFilename = 'NLR-Foster-Application.docx'
</script>

<template>
  <div>
    <a
      :href="applicationHref"
      :download="applicationFilename"
      title="Download the New Leash Rescue foster application"
      class="w-full sm:w-auto py-4 px-6 inline-flex justify-center items-center gap-x-2 text-xl font-medium text-nowrap rounded-xl border border-secondary-line text-white bg-secondary hover:bg-secondary-hover focus:outline-hidden focus:bg-secondary-focus transition disabled:opacity-50 disabled:pointer-events-none"
    >
      <UIcon name="i-material-symbols-download-rounded" class="size-6" />
      Download Foster Application
    </a>
  </div>
</template>

<style scoped>

</style>
