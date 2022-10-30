<script setup lang="ts">
// interface TextInputProps {
//   type: 'text' | 'number' | 'password';
//   name: string;
//   label?: string;
//   value: any;
// }
// const props = defineProps<TextInputProps>();

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  value: {
    type: [String, Number],
    default: ''
  }
});
</script>

<template>
  <div class="flex flex-col">
    <label :for="props.name" class="text-gray-600">{{ props.label }}</label>
    <input
      v-bind="$attrs"
      :value="props.value"
      @input="(event) => $emit('input', event)"
      class="text-2xl p-3 border-none outline-none ring-2 ring-teal-900 ring-opacity-10 focus:ring-opacity-70 text-teal-600 rounded-lg"
    />
  </div>
</template>
