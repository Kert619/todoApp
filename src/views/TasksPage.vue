<script setup>
import { computed, ref } from "vue";
import Button from "../components/Forms/Button.vue";
import Tasks from "../components/Tasks/Tasks.vue";
import NewTask from "../components/Tasks/NewTask.vue";
import Loading from "../components/Loading.vue";
import Error from "../components/Error.vue";
import { allTasks, createTask } from "../http/task-api";
import { onMounted } from "vue";

const tasks = ref([]);
const error = ref(null);
const showLoading = ref(false);
const showError = ref(false);

onMounted(async () => {
  try {
    showLoading.value = true;
    showError.value = false;
    const { data } = await allTasks();
    tasks.value = data.data;
  } catch (err) {
    showError.value = true;
    error.value = "Error fetching tasks. Please try again later.";
  } finally {
    showLoading.value = false;
  }
});

const uncompletedTasks = computed(() =>
  tasks.value.filter((task) => !task.is_completed)
);

const completedTasks = computed(() =>
  tasks.value.filter((task) => task.is_completed)
);

const hasCompletedTasks = computed(() => completedTasks.value.length > 0);

const showCompletedTasks = ref(false);

const handleAddedTask = async (newTask) => {
  try {
    showLoading.value = true;
    showError.value = false;
    const { data: createdTask } = await createTask(newTask);
    tasks.value.unshift(createdTask.data);
  } catch (err) {
    showError.value = true;
    error.value = "Error adding task. Please try again later.";
  } finally {
    showLoading.value = false;
  }
};
</script>

<template>
  <main
    class="container p-3 mx-auto mt-[70px] h-[calc(100vh-140px)] overflow-y-auto"
  >
    <div class="mt-5 max-w-xl mx-auto">
      <NewTask @added="handleAddedTask" />

      <Error :error="error" v-if="showError" />
      <Loading v-if="showLoading" />

      <Tasks :tasks="uncompletedTasks" />

      <div class="text-center mt-6" v-show="hasCompletedTasks">
        <Button
          variant="primary"
          @click="showCompletedTasks = !showCompletedTasks"
        >
          <span v-if="!showCompletedTasks">Show Completed</span>
          <span v-else>Hide Completed</span>
        </Button>
      </div>

      <Tasks
        :tasks="completedTasks"
        :show="showCompletedTasks && hasCompletedTasks"
      />
    </div>
  </main>
</template>
