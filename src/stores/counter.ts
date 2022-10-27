// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  const squaredCount = computed(() => count.value * count.value);
  const increment = () => {
    count.value++;
  };
  const decrement = () => {
    count.value = count.value - 1;
  };

  return { count, doubleCount, squaredCount, increment, decrement };
});
