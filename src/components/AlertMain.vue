<script setup lang="ts">
const props = defineProps({
  type: {
    type: [String],
    default: 'info'
  },
  message: {
    type: String,
    default: ''
  }
});

const infoColor = 'bg-blue-200 text-blue-500';
const successColor = 'bg-green-200 text-green-500';
const errorColor = 'bg-red-200 text-red-500';
</script>

<template>
  <div
    v-if="props.message"
    :class="`p-4 rounded-lg ${
      props.type == 'success'
        ? successColor
        : props.type == 'error'
        ? errorColor
        : infoColor
    }`"
  >
    <p>{{ props.message }}</p>
  </div>
</template>
