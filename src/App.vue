<template>
  <div class="font-nunito">
    <Navbar />
    <router-view />
    <Footer />
  </div>

  <Loading v-if="loading" />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Loading from "./components/Loading.vue";
import { useLoadingStore } from "./stores/loading";
import { storeToRefs } from "pinia";

const loadingStore = useLoadingStore();
const { loading } = storeToRefs(loadingStore);
</script>
