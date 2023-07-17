<template>
  <div class="font-nunito">
    <navbar></navbar>
    <tasks-page></tasks-page>
    <app-footer></app-footer>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import TasksPage from "./views/TasksPage.vue";
import AppFooter from "./components/Footer.vue";
</script>

<style scoped></style>
