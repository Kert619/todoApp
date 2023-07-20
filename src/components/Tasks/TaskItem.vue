<script setup>
import { ref } from "vue";
import Check from "../Forms/Check.vue";
import TaskActions from "../Tasks/TaskActions.vue";
import Input from "../Forms/Input.vue";
import { useTaskStore } from "../../stores/task";
import { storeToRefs } from "pinia";

const store = useTaskStore();
const { showLoading } = storeToRefs(store);
const { handleUpdatedTask } = store;

const props = defineProps({
  task: Object,
});

const isEdit = ref(false);
const onLostFocus = () => {
  setTimeout(() => (isEdit.value = false), 150);
};

const updateTask = async (event) => {
  try {
    showLoading.value = true;
    const updatedTask = { ...props.task, name: event };
    isEdit.value = false;
    await handleUpdatedTask(updatedTask);
  } catch (err) {
  } finally {
    showLoading.value = false;
  }
};

const markAsCompleted = (event) => {
  const updatedTask = { ...props.task, is_completed: event };
  emit("completed", updatedTask);
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
        @update:model-value="markAsCompleted"
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
