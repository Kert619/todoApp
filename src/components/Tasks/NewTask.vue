<script setup>
import { reactive, ref } from "vue";
import Input from "../Forms/Input.vue";
import Loading from "../Loading.vue";
import Error from "../Error.vue";
import { useTaskStore } from "../../stores/task";

const showLoading = ref(false);
const showError = ref(false);
const error = ref("");
const store = useTaskStore();
const { handleAddedTask } = store;

const task = ref("");
const newTask = reactive({
  name: "",
  is_completed: false,
});

const addNewTask = async () => {
  try {
    showLoading.value = true;
    showError.value = false;
    if (task.value.trim()) {
      newTask.name = task.value;
      await handleAddedTask(newTask);
    }
  } catch (err) {
    error.value = "Error adding task. Please try again later.";
    showError.value = true;
  } finally {
    task.value = "";
    showLoading.value = false;
  }
};
</script>

<template>
  <Input
    type="text"
    placeholder="Enter a task. Press enter to save."
    icon="fa-regular fa-square-plus"
    :model-value="task"
    v-model="task"
    @enter-pressed="addNewTask"
  />
  <Loading v-if="showLoading" />
  <Error v-if="showError" :error="error" class="mt-3" />
</template>
