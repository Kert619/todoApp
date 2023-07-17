<script setup>
import Check from "../Forms/Check.vue";

const props = defineProps({
  task: Object,
});
</script>

<template>
  <li class="text-slate-800 border-b border-gray-300 p-3">
    <div class="flex justify-between items-center">
      <Check
        :text="props.task.name"
        :checked="props.task.is_completed"
        class="font-bold"
        :class="{ 'line-through': props.task.is_completed }"
      />
      <span class="text-sm text-gray-600 whitespace-nowrap"></span>
    </div>
  </li>
</template>
