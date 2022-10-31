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

const infoColor = 'bg-blue-800/70 text-blue-200';
const successColor = 'bg-green-600/70 text-green-200';
const errorColor = 'bg-red-600/70 text-red-200';
</script>

<template>
  <div
    v-if="props.message"
    :class="`p-4 rounded-lg select-none ${
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
