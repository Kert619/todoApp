import { defineStore } from "pinia";
import {
  allTasks,
  createTask,
  updateTask,
  removeTask,
  completeTask,
} from "../http/task-api";
import { computed, ref } from "vue";

export const useTaskStore = defineStore("task", () => {
  const showLoading = ref(false);
  const tasks = ref([]);

  const uncompletedTasks = computed(() =>
    tasks.value.filter((task) => !task.is_completed)
  );

  const completedTasks = computed(() =>
    tasks.value.filter((task) => task.is_completed)
  );

  const getAllTasks = async () => {
    const { data } = await allTasks();
    tasks.value = data.data;
  };

  const handleAddedTask = async (newTask) => {
    const { data: createdTask } = await createTask(newTask);
    tasks.value.unshift(createdTask.data);
  };

  const handleUpdatedTask = async (task) => {
    const { data: updatedTask } = await updateTask(task.id, {
      name: task.name,
    });

    const currentTask = tasks.value.find((item) => item.id == task.id);
    currentTask.name = updatedTask.data.name;
  };

  const handleDeleteTask = async (id) => {
    await removeTask(id);
    const index = tasks.value.findIndex((item) => item.id === id);
    tasks.value.splice(index, 1);
  };

  const handleCompletedTask = async (task) => {
    const { data: updatedTask } = await completeTask(task.id, {
      is_completed: task.is_completed,
    });

    const currentTask = tasks.value.find((item) => item.id == task.id);
    currentTask.is_completed = updatedTask.data.is_completed;
  };

  return {
    showLoading,
    tasks,
    uncompletedTasks,
    completedTasks,
    getAllTasks,
    handleAddedTask,
    handleUpdatedTask,
    handleDeleteTask,
    handleCompletedTask,
  };
});
