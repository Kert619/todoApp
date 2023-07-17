<script setup>
const props = defineProps({
  error: String,
});
</script>

<template>
  <div class="text-center mt-5 font-bold text-red-500 text-2xl" v-if="!!error">
    {{ error }}
  </div>
</template>
