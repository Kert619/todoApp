<script setup>
import { computed, ref } from "vue";
import Button from "../components/Forms/Button.vue";
import Tasks from "../components/Tasks/Tasks.vue";
import NewTask from "../components/Tasks/NewTask.vue";
import Loading from "../components/Loading.vue";
import { onMounted } from "vue";
import { useTaskStore } from "../stores/task";
import { storeToRefs } from "pinia";

const store = useTaskStore();
const { showLoading, completedTasks, uncompletedTasks } = storeToRefs(store);
const { getAllTasks } = store;

const hasCompletedTasks = computed(() => completedTasks.value.length > 0);
const showCompletedTasks = ref(false);

onMounted(async () => {
  try {
    showLoading.value = true;
    await getAllTasks();
  } catch (err) {
  } finally {
    showLoading.value = false;
  }
});
</script>

<template>
  <main
    class="container p-3 mx-auto mt-[70px] h-[calc(100vh-140px)] overflow-y-auto"
  >
    <div class="mt-5 max-w-2xl mx-auto">
      <NewTask />

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

  <Loading v-if="showLoading" />
</template>
