<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
  label: {
    type: String,
    default: ''
  }
});

const hovered = ref(false);

const setHovered = (boolean) => {
  hovered.value = boolean;
};

const print = (event) => {
  console.log(event);
};
</script>

<template>
  <div
    @mouseover="setHovered(true)"
    @mouseleave="setHovered(false)"
    class="relative w-max flex flex-col items-center"
  >
    <p
      v-if="hovered && label"
      class="whitespace-nowrap text-teal-500 text-center bg-teal-200 font-medium absolute top-[-40px] rounded-lg w-fit py-1 px-2"
    >
      {{ props.label }}
    </p>
    <slot></slot>
  </div>
</template>
