<script>
export default {
  mounted() {
    const jqueryScript = document.createElement('script')
    jqueryScript.setAttribute('id', 'jquery')
    jqueryScript.setAttribute('type', 'text/javascript')
    jqueryScript.setAttribute('src', 'https://code.jquery.com/jquery-1.12.4.min.js')
    jqueryScript.setAttribute('integrity', 'sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=')
    jqueryScript.setAttribute('crossorigin', 'anonymous')
    document.body.appendChild(jqueryScript)

    document.getElementById('jquery')?.addEventListener('load', function () {
      const loadScripts = document.createElement('script')
      loadScripts.setAttribute('type', 'text/javascript')
      loadScripts.setAttribute('defer', 'defer')
      loadScripts.setAttribute('src', '/js/loadScripts.js')
      document.body.appendChild(loadScripts)
    });
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
