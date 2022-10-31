<script setup lang="ts">
import { ref, computed } from 'vue';
const props = defineProps({
  data: {
    type: Array,
    default: () => {}
  },
  disableHeader: {
    type: Boolean,
    default: false
  }
});

console.log(props.data);
const headers = computed(() => [...Object.keys(props.data[0])]);
const noOfColumns = computed(() => headers.value.length);
</script>

<template>
  <div :class="`grid grid-cols-1 gap-1`">
    <div
      v-if="!disableHeader"
      :class="`tableHeader grid grid-rows-1 grid-cols-${noOfColumns} gap-1`"
    >
      <h1
        v-for="(header, index) in headers"
        :key="index"
        class="bg-dark-200 w-full flex justify-center rounded-md text-sm px-4 py-2"
      >
        {{ header }}
      </h1>
    </div>
    <div :class="`tableData grid grid-rows-1 grid-cols-1 gap-1`">
      <div
        v-for="(row, index) in data"
        :key="index"
        :class="`grid grid-cols-${headers.length} hover:bg-light-900/10 rounded-md cursor-pointer active:bg-light-900/20`"
      >
        <h1
          v-for="(item, index) in row"
          :key="index"
          class="bg-dark-900/50 w-full flex justify-center items-center rounded-md text-xs py-2"
        >
          {{ item }}
        </h1>
      </div>
    </div>
  </div>
</template>
