<script setup>
const props = defineProps({
  icon: String,
  modelValue: String,
  invalid: Boolean,
});

const emit = defineEmits(["update:modelValue", "enterPressed", "lostFocus"]);

const vFocus = {
  mounted: (el) => el.focus(),
};
</script>

<template>
  <div class="relative w-full flex items-center border-0 p-0">
    <i
      class="text-xl text-gray-500 absolute ml-3 pointer-events-none"
      :class="props.icon"
      v-if="props.icon"
    ></i>
    <input
      v-bind="$attrs"
      autocomplete="off"
      class="w-full text-slate-800 rounded border-0 ring-1 ring-gray-400 focus:ring-indigo-500"
      :class="{
        'pl-10': props.icon,
        'ring-red-500': props.invalid,
        'focus:ring-red-500': props.invalid,
      }"
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      @keydown.enter="emit('enterPressed', $event.target.value)"
      @blur="emit('lostFocus', $event.target.value)"
      v-focus
    />
  </div>
</template>
