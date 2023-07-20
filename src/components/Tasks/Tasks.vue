<script setup>
import TaskItem from "./TaskItem.vue";
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
    <TaskItem :task="task" v-for="task in tasks" :key="task.id" />
  </ul>
</template>
