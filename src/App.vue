<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useCounterStore } from '@/stores/counter';
import Navbar from '@/components/Navbar/NavbarComponent.vue';

const counter = useCounterStore();
</script>

<template>
  <div class="p-4 bg-light-700 min-h-screen">
    <Navbar />
    <main class="container mx-auto">
      <RouterView />
    </main>
    <!-- <header class="">Header</header>
    <RouterView />
    <h2>Count</h2>
    <h3>{{ counter.count }}</h3>
    <button @click="() => counter.increment()">Increment</button>
    <button @click="() => counter.decrement()">Decrement</button>

    <h3>Double : {{counter.doubleCount}}</h3>
    <h3>Squared : {{counter.squaredCount}}</h3> -->
  </div>
</template>

<style scoped></style>
