<script setup>
const props = defineProps({
  error: String,
});
</script>

<template>
  <div
    class="text-center font-bold text-red-500 text-2xl"
    v-if="!!error"
    v-bind="$attrs"
  >
    {{ error }}
  </div>
</template>
