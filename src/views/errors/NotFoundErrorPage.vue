<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route);
</script>
<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center">
    <h1 class="text-4xl font-bold text-red-500">404</h1>
    <p>
      Sorry, the page
      <code class="text-red-500">{{ route.params.notFound }}</code> you're
      looking for is not found
    </p>
    <router-link :to="{ name: 'tasks' }" class="btn btn-link"
      >Go to tasks</router-link
    >
  </div>
</template>
