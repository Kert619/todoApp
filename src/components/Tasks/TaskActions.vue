<script setup>
import Button from "../Forms/Button.vue";
const emit = defineEmits(["edit", "remove"]);
</script>

<template>
  <div class="flex gap-1">
    <Button variant="primary" class="py-0 text-sm" @click.prevent="emit('edit')"
      >Edit</Button
    >
    <Button variant="error" class="py-0 text-sm" @click.prevent="emit('remove')"
      >Remove</Button
    >
  </div>
</template>
