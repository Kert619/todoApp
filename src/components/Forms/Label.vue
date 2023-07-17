<template>
  <label class="block text-slate-800"
    ><slot /> <span class="text-red-500" v-if="props.required">*</span></label
  >
</template>

<script setup>
const props = defineProps({
  required: Boolean,
});
</script>
