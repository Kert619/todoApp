<script setup>
import Input from "./Input.vue";
import Label from "./Label.vue";
import ErrorMessage from "./ErrorMessage.vue";
const emit = defineEmits(["update:modelValue", "enterPressed", "lostFocus"]);

const props = defineProps({
  label: String,
  required: Boolean,
  icon: String,
  error: String,
  modelValue: String,
});
</script>

<template>
  <Label
    :text="props.label"
    class="mb-1"
    :required="props.required"
    v-if="!!props.label"
  >
    {{ props.label }}
  </Label>
  <Input
    v-bind="$attrs"
    :icon="props.icon"
    :invalid="!!props.error"
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
    @enter-pressed="emit('enterPressed', $event)"
    @lost-focus="emit('lostFocus', $event)"
  />
  <ErrorMessage v-if="!!props.error">{{ props.error }}</ErrorMessage>
</template>
