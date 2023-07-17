<template>
  <header
    class="bg-slate-800 p-5 h-[70px] flex items-center fixed top-0 w-full z-50"
  >
    <nav class="container mx-auto flex items-center justify-between gap-5">
      <h1 class="text-gray-100 text-xl">
        Todo <span class="font-medium">List</span> App
      </h1>

      <button
        class="text-white inline-block md:hidden"
        @click.prevent="collapsed = !collapsed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>

      <div
        class="flex flex-col md:flex-row gap-3 md:gap-5 justify-center md:justify-between grow absolute md:static left-0 w-full md:w-auto pb-5 md:pb-0 bg-slate-800 transition-[top] duration-500"
        :class="{ 'top-[70px]': collapsed, 'top-[-400%]': !collapsed }"
      >
        <ul class="flex flex-col md:flex-row items-center gap-2 md:gap-5">
          <li>
            <a
              href=""
              class="text-gray-300 text-lg font-normal hover:text-gray-400 transition"
              >Tasks</a
            >
          </li>
          <li>
            <a
              href=""
              class="text-gray-300 text-lg font-normal hover:text-gray-400 transition"
              >Summary</a
            >
          </li>
        </ul>

        <div class="flex justify-center gap-2">
          <Button variant="primary-outline" class="self-center">Login</Button>
          <Button variant="primary" class="self-center">Register</Button>
          <Button variant="primary-outline" class="self-center">Logout</Button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import Button from "./Forms/Button.vue";

const collapsed = ref(false);
</script>
