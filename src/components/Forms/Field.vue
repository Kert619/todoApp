<script setup>
import Input from "./Input.vue";
import Label from "./Label.vue";
import ErrorMessage from "./ErrorMessage.vue";
const emit = defineEmits(["update:modelValue", "enter-pressed"]);

const props = defineProps({
  label: String,
  required: Boolean,
  icon: String,
  error: String,
  modelValue: String,
});

const handleInputUpdate = (newValue) => {
  emit("update:modelValue", newValue);
};
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
    @update:model-value="handleInputUpdate"
    @enter-pressed="$emit('enter-pressed')"
  />
  <ErrorMessage v-if="!!props.error">{{ props.error }}</ErrorMessage>
</template>
