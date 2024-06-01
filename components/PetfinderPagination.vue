<script setup lang="ts">
defineProps<{
  pagination: {
    "count_per_page": number,
    "total_count": number,
    "current_page": number,
    "total_pages": number,
    "_links": {
      "next": {
        "href": string
      }
    }
  },
  route: string
}>();

function previous(route: string, current_page: number) {
  const page = (current_page > 1) ? current_page - 1: current_page
  return route + "?page=" + page.toString()
}

function current(route: string, current_page: number) {
  return route + "?page=" + current_page.toString()
}

function next(route: string, current_page: number, total_pages: number) {
  const page = (current_page < total_pages) ? current_page + 1: total_pages
  return route + "?page=" + page.toString()
}
</script>

<template>
  <nav aria-label="pagination">
    <ul class="pagination">
      <li><a :href="previous(route, pagination.current_page)"><span aria-hidden="true">«</span><span class="visuallyhidden">previous set of pages</span></a></li>
      <li v-for="n in pagination.total_pages" :key="n">
        <a :href="current(route, n)" :aria-current="(n === pagination.current_page) ? 'page' : ''"><span class="visuallyhidden">page </span>{{ n }}</a>
      </li>
      <li><a :href="next(route, pagination.current_page, pagination.total_pages)"><span class="visuallyhidden">next set of pages</span><span aria-hidden="true">»</span></a></li>
    </ul>
  </nav>
</template>

<style scoped>
.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: auto;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}

nav {
  display: flex;
  justify-content: center;
  border-top: 1px solid #eee;
  margin-top: 1em;
  padding-top: 0.5em;
}

.pagination {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.pagination li {
  margin: 0 1px;
}

.pagination a {
  display: block;
  padding: 0.5em 1em;
  border: 1px solid #999;
  border-radius: 0.2em;
  text-decoration: none;
}

.pagination a[aria-current="page"] {
  background-color: #333;
  color: #fff;
}
</style>
