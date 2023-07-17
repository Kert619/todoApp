<template>
  <div class="flex items-center gap-2">
    <input
      type="checkbox"
      class="cursor-pointer rounded focus:ring-0"
      :checked="checked"
    />
    <label class="block text-slate-800">{{ props.text }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  checked: {
    type: Boolean,
    default: false,
  },
});
</script>
