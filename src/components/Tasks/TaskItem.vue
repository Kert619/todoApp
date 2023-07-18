<script setup>
import { ref } from "vue";
import Check from "../Forms/Check.vue";
import TaskActions from "../Tasks/TaskActions.vue";
import Input from "../Forms/Input.vue";

const props = defineProps({
  task: Object,
});

const emit = defineEmits(["updated", "remove"]);

const isEdit = ref(false);
const onLostFocus = () => {
  setTimeout(() => (isEdit.value = false), 150);
};

const updateTask = (event) => {
  const updatedTask = { ...props.task, name: event };
  isEdit.value = false;
  emit("updated", updatedTask);
};

const removeTask = () => {
  emit("remove", props.task.id);
};
</script>

<template>
  <li class="text-slate-800 border-b border-gray-300 p-3">
    <div class="flex justify-between items-center gap-3">
      <div class="w-full" v-if="isEdit">
        <Input
          type="text"
          :modelValue="task.name"
          @lost-focus="onLostFocus"
          @enter-pressed="updateTask"
        />
      </div>
      <Check
        :text="props.task.name"
        :checked="props.task.is_completed"
        class="font-bold"
        :class="{ 'line-through': props.task.is_completed }"
        v-if="!isEdit"
      />

      <TaskActions
        @edit="isEdit = true"
        v-show="!isEdit"
        @remove="removeTask"
      />
    </div>
  </li>
</template>
