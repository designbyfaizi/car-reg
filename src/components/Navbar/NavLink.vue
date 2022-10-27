<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
console.log({ path: route.path });

interface NavLinkProps {
  to: string;
  name: string;
  class?: string;
}
const props = defineProps<NavLinkProps>();

const nonActiveClass = 'bg-transparent text-teal-600 font-normal';
const activeClass = '!bg-teal-200 text-teal-700 font-bold';
</script>

<template>
  <RouterLink
    :to="props.to"
    :class="`no-underline ring-2 ring-transparent focus:ring-teal-500 hover:scale-105 active:scale-99 text-lg px-4 py-2 rounded-full transition-all duration-150 ease-in-out ${
      route.path == to
        ? `${props.class} ${activeClass}`
        : `${props.class} ${nonActiveClass}`
    }`"
  >
    {{ props.name }}
  </RouterLink>
</template>
