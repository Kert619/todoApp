<script setup>
const emit = defineEmits(["edit", "remove"]);
</script>

<template>
  <div class="flex gap-1">
    <button
      class="btn btn-xs btn-warning rounded"
      @click.prevent="emit('edit')"
    >
      Edit
    </button>

    <button
      class="btn btn-xs btn-error rounded"
      @click.prevent="emit('remove')"
    >
      Remove
    </button>
  </div>
</template>
