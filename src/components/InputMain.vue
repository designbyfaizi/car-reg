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
  <div class="flex flex-col gap-2">
    <label :for="props.name">{{ props.label }}</label>
    <input
      v-bind="$attrs"
      :value="props.value"
      @input="(event) => $emit('input', event)"
      class="bg-dark-100 hover:bg-dark-50 focus:bg-dark-50 text-2xl p-3 border-none outline-none ring-2 ring-light-900/40 focus:ring-light-900/70 text-light-900 rounded-lg"
    />
  </div>
</template>
