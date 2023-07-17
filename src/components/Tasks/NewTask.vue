<script setup>
import { reactive, ref } from "vue";
import Field from "../Forms/Field.vue";

const newTask = reactive({
  name: "",
  is_completed: false,
});

const task = ref("");

const emit = defineEmits(["added"]);

const addNewTask = () => {
  if (task.value.trim()) {
    newTask.name = task.value.trim();
    task.value = "";
    emit("added", newTask);
  }
};
</script>

<template>
  <Field
    autofocus
    type="text"
    placeholder="Enter a task. Press enter to save."
    icon="fa-regular fa-square-plus"
    :model-value="task"
    v-model="task"
    @enter-pressed="addNewTask"
  />
</template>
