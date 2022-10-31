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

const nonActiveClass = 'bg-transparent text-light-600 font-normal';
const activeClass = 'bg-light-900 text-dark-700 font-bold';
</script>

<template>
  <RouterLink
    :to="props.to"
    :class="`no-underline ring-2 ring-transparent active:scale-96 text-lg px-4 py-1 rounded-full transition-all duration-150 ease-in-out ${
      route.path == to
        ? `${props.class} ${activeClass}`
        : `${props.class} ${nonActiveClass}`
    }`"
  >
    {{ props.name }}
  </RouterLink>
</template>
