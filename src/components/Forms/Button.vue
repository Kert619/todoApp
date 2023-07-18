<template>
  <button v-bind="$attrs" :class="btn">
    <slot>Button</slot>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["variant"]);

const btn = computed(() => {
  let styles = "px-3 py-1 rounded border transition ";

  switch (props.variant) {
    case "primary":
      styles += "bg-blue-500 border-blue-500 text-white hover:bg-blue-600";
      break;
    case "primary-outline":
      styles +=
        "bg-transparent border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white";
      break;
    case "error":
      styles += "bg-red-500 border-red-500 text-white hover:bg-red-600";
      break;
    case "error-outline":
      styles +=
        "bg-transparent border-red-500 text-red-500 hover:bg-red-500 hover:text-white";
      break;
    case "success":
      styles +=
        "bg-emerald-500 border-emerald-500 text-white hover:bg-emerald-600";
      break;
    case "success-outline":
      styles +=
        "bg-transparent border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white";
      break;
    case "warning":
      styles +=
        "bg-yellow-500 border-yellow-500 text-white hover:bg-yellow-600";
      break;
    case "warning-outline":
      styles +=
        "bg-transparent border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white";
      break;
  }

  return styles;
});
</script>
