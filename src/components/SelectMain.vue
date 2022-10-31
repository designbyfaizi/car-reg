<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <label :for="props.name">{{ props.label }}</label>
    <select
      v-bind="$attrs"
      class="bg-dark-100 text-2xl p-3 border-none outline-none ring-3 ring-light-900/40 focus:ring-light-900/70 text-light-900 rounded-lg"
    >
      <option disabled value="">Please select an option</option>
      <option v-for="(option, index) in props.options" :key="index">
        {{ option }}
      </option>
    </select>
  </div>
</template>
