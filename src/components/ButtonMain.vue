<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: 'Click Me!'
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const activeClasses =
  'bg-teal-600 text-teal-200 hover:bg-teal-500 focus:ring-teal-400 ring-transparent ring-3 cursor-pointer disabled:cursor-default';
const nonActiveClasses = 'bg-teal-200 text-teal-500';
</script>

<template>
  <button
    v-bind="$attrs"
    :class="`text-2xl font-medium p-3 my-4 border-none rounded-lg ${
      props.loading ? nonActiveClasses : activeClasses
    }`"
    :disabled="props.loading"
  >
    {{ props.loading ? `Loading...` : label }}
  </button>
</template>
