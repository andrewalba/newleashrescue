<script>
export default {
  mounted() {
    console.log('loaded');
    const droptronScript = document.createElement('script')
    droptronScript.setAttribute('type', 'text/javascript')
    droptronScript.setAttribute('src', '/assets/js/jquery.dropotron.min.js')
    document.body.appendChild(droptronScript)

    const scrollexScript = document.createElement('script')
    scrollexScript.setAttribute('type', 'text/javascript')
    scrollexScript.setAttribute('src', '/assets/js/jquery.scrollex.min.js')
    document.body.appendChild(scrollexScript)

    const utilScript = document.createElement('script')
    utilScript.setAttribute('type', 'text/javascript')
    utilScript.setAttribute('src', '/assets/js/util.js')
    document.body.appendChild(utilScript)

    const mainScript = document.createElement('script')
    mainScript.setAttribute('type', 'text/javascript')
    mainScript.setAttribute('src', '/assets/js/main.js')
    document.body.appendChild(mainScript)
  }
}
</script>

<template>
  <!-- Footer -->
  <footer id="footer">
    <ul class="menu">
      <li><a href="/about" title="About">About</a></li>
      <li><a href="/sponsors" title="Our Friends">Our Friends</a></li>
      <li><a href="/terms" title="Terms of Use">Terms of Use</a></li>
      <li><a href="/privacy" title="Privacy Policy">Privacy Policy</a></li>
      <li><a href="/contact-us" title="Contact Us">Contact Us</a></li>
    </ul>
    <div class="copyright">
      &copy; 2018-2024 New Leash Rescue. All rights reserved.
    </div>
  </footer>
</template>

<style scoped>

</style>
