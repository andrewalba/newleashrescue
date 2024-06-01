<script setup lang="ts">
  let event_dates: Date[] = []
  const first_saturday = new Date()
  const saturday_day = 6
  const currentDay = first_saturday.getDay()
  const distance = saturday_day - currentDay
  first_saturday.setDate(first_saturday.getDate() + distance)
  let week_count = 0
  while (week_count < 5) {
    const event_date = new Date(first_saturday.getTime());
    event_dates.push(event_date)
    first_saturday.setDate(first_saturday.getDate() + 7)
    week_count++
  }

  function formatDate(date: Date): string {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return date.toLocaleString('en-US', options)
  }
</script>

<template>
  <!-- Events-->
  <div class="wrapper style3">
    <section class="container">
      <header class="major">
        <h2>Events Schedule</h2>
        <p></p>
      </header>

      <section id="content" class="box">
        <h2>Weekly PetSmart Adoption Event</h2>
        <ul class="alt">
          <li v-for="event in event_dates">
            <h3>{{ formatDate(event) }}</h3>
            <strong>Dog Adoption Event at PetSmart in Lakeville</strong>
            <p>
              When: {{ formatDate(event) }} from 11:00 AM to 2:00 PM<br/>
              Address: 16001 Elmhurst Lane, Lakeville, MN 55044
            </p>
          </li>
        </ul>
      </section>

    </section>
  </div>

</template>

<style scoped>

</style>
