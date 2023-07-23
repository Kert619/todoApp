<script setup>
import TaskActions from "../Tasks/TaskActions.vue";
import { ref } from "vue";
import { useTaskStore } from "../../stores/task";
import { useErrorStore } from "../../stores/error";
import { storeToRefs } from "pinia";

const errorStore = useErrorStore();
const store = useTaskStore();

const { error } = storeToRefs(errorStore);
const { handleUpdatedTask, handleCompletedTask, handleDeleteTask } = store;

const props = defineProps({
  task: Object,
});

const isEdit = ref(false);
const onLostFocus = () => {
  setTimeout(() => (isEdit.value = false), 150);
};

const updateTask = async (event) => {
  try {
    const updatedTask = { ...props.task, name: event.target.value };
    isEdit.value = false;
    await handleUpdatedTask(updatedTask);
  } catch (err) {
    error.value = "Error updating task. Please try again later.";
  }
};

const markAsCompleted = async (event) => {
  try {
    const updatedTask = { ...props.task, is_completed: event.target.checked };
    await handleCompletedTask(updatedTask);
  } catch (err) {
    error.value = "Error updating task. Please try again later.";
  }
};

const removeTask = async () => {
  try {
    await handleDeleteTask(props.task.id);
  } catch (err) {
    error.value = "Error deleting task. Please try again later.";
  }
};

const vFocus = {
  mounted: (el) => el.focus(),
};
</script>

<template>
  <li class="text-slate-800 border-b border-gray-300 p-3">
    <div class="flex justify-between items-center gap-3">
      <div class="w-full" v-if="isEdit">
        <input
          class="input input-bordered input-sm w-full focus:outline-blue-500"
          @blur="onLostFocus"
          @keydown.enter="updateTask"
          :value="task.name"
          v-focus
        />
      </div>

      <div class="form-control" v-if="!isEdit">
        <label class="label cursor-pointer">
          <input
            type="checkbox"
            class="checkbox checkbox-primary checkbox-xs me-2 rounded"
            :checked="props.task.is_completed"
            @change="markAsCompleted"
          />
          <span
            :class="{
              'line-through': props.task.is_completed,
              'text-gray-400': props.task.is_completed,
            }"
            >{{ props.task.name }}</span
          >
        </label>
      </div>

      <TaskActions
        @edit="isEdit = true"
        v-show="!isEdit"
        @remove="removeTask"
      />
    </div>
  </li>
</template>
