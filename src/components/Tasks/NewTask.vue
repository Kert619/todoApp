<script setup>
import { reactive, ref } from "vue";
import { useTaskStore } from "../../stores/task";
import { useErrorStore } from "../../stores/error";
import { storeToRefs } from "pinia";

const errorStore = useErrorStore();
const store = useTaskStore();

const { handleAddedTask } = store;
const { error } = storeToRefs(errorStore);

const task = ref("");
const newTask = reactive({
  name: "",
  is_completed: false,
});

const addNewTask = async () => {
  try {
    if (task.value.trim()) {
      newTask.name = task.value;
      await handleAddedTask(newTask);
    }
  } catch (err) {
    error.value = "Error adding task. Please try again later.";
  } finally {
    task.value = "";
  }
};

const vFocus = {
  mounted: (el) => el.focus(),
};
</script>

<template>
  <input
    type="text"
    placeholder="Enter a task. Press enter to save."
    class="input input-bordered w-full focus:outline-blue-500"
    v-model="task"
    @keydown.enter="addNewTask"
    v-focus
  />
</template>
