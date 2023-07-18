<script setup>
import TaskItem from "./TaskItem.vue";
const emit = defineEmits(["updated", "remove"]);
const props = defineProps({
  tasks: Array,
  show: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <ul class="mt-5" v-if="tasks.length > 0 && show">
    <TaskItem
      :task="task"
      v-for="task in tasks"
      :key="task.id"
      @updated="emit('updated', $event)"
      @remove="emit('remove', $event)"
    />
  </ul>
</template>
