<script setup>
import { computed, ref } from "vue";
import Tasks from "../components/Tasks/Tasks.vue";
import NewTask from "../components/Tasks/NewTask.vue";
import Error from "../components/Error.vue";
import { onMounted } from "vue";
import { useTaskStore } from "../stores/task";
import { useErrorStore } from "../stores/error";
import { storeToRefs } from "pinia";

const store = useTaskStore();
const errorStore = useErrorStore();

const { completedTasks, uncompletedTasks } = storeToRefs(store);

const { getAllTasks } = store;
const { error } = storeToRefs(errorStore);

const hasCompletedTasks = computed(() => completedTasks.value.length > 0);
const showCompletedTasks = ref(false);

onMounted(async () => {
  try {
    await getAllTasks();
  } catch (err) {
    error.value = "Error fetching tasks. Please try again later.";
  }
});
</script>

<template>
  <main
    class="container p-3 mx-auto mt-[70px] h-[calc(100vh-140px)] overflow-y-auto"
  >
    <div class="mt-5 max-w-2xl mx-auto">
      <NewTask />
      <Error class="mt-2" v-if="!!error">{{ error }}</Error>

      <Tasks :tasks="uncompletedTasks" />

      <div class="text-center mt-6" v-show="hasCompletedTasks">
        <button
          class="btn btn-accent btn-sm text-white"
          @click="showCompletedTasks = !showCompletedTasks"
        >
          <span v-if="!showCompletedTasks">Show Completed</span>
          <span v-else>Hide Completed</span>
        </button>
      </div>

      <Tasks
        :tasks="completedTasks"
        :show="showCompletedTasks && hasCompletedTasks"
      />
    </div>
  </main>
</template>
