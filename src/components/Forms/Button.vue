<template>
  <button v-bind="$attrs" :class="btn">
    <slot>Button</slot>
  </button>
</template>

<script setup>
import { computed } from "vue";

const { variant = "primary", size = "base" } = defineProps(["variant", "size"]);

const btn = computed(() => {
  let styles = "px-3 py-1 rounded transition ";

  switch (size) {
    case "xs":
      styles = "px-2 py-1 text-xs rounded ";
      break;
    case "sm":
      styles += "text-sm ";
      break;
    case "base":
      styles += "text-base ";
      break;
    case "lg":
      styles += "text-lg ";
      break;
    case "xl":
      styles += "text-xl ";
      break;
    case "2xl":
      styles += "text-2xl ";
      break;
  }

  switch (variant) {
    case "primary":
      styles +=
        "bg-blue-500 border border-blue-500 text-white hover:bg-blue-600";
      break;
    case "primary-outline":
      styles +=
        "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white";
      break;
    case "error":
      styles += "bg-red-500 border border-red-500 text-white hover:bg-red-600";
      break;
    case "error-outline":
      styles +=
        "bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white";
      break;
    case "success":
      styles +=
        "bg-emerald-500 border border-emerald-500 text-white hover:bg-emerald-600";
      break;
    case "success-outline":
      styles +=
        "bg-transparent border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white";
      break;
    case "warning":
      styles +=
        "bg-yellow-500 border border-yellow-500 text-white hover:bg-yellow-600";
      break;
    case "warning-outline":
      styles +=
        "bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white";
      break;
  }

  return styles;
});
</script>
