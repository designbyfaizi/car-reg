<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
  data: {
    type: Array,
    default: () => {}
  },
  disableHeader: {
    type: Boolean,
    default: false
  },
  enableClick: {
    type: Boolean,
    default: false
  }
});

const handleClick = (event, data) => {
  if (props.enableClick) {
    console.log({ data });
    router.push(`/vehicles/${data.registrationNumber}`);
  }
};

console.log(props.data);
const headers = computed(() => [...Object.keys(props.data[0])]);
const noOfColumns = ref(0);
watchEffect(() => {
  return (noOfColumns.value = headers.value.length);
});
</script>

<template>
  <div :class="`grid grid-cols-1 gap-1`">
    <div
      v-if="!disableHeader && noOfColumns > 0"
      :class="`tableHeader grid grid-rows-1 grid-cols-[10%_10%_10%_30%_37.5%] gap-1`"
    >
      <h1
        v-for="(header, index) in headers"
        :key="index"
        class="bg-dark-200 w-full flex justify-center rounded-md text-sm px-4 py-2"
      >
        {{ header }}
      </h1>
    </div>
    <div :class="`tableData grid grid-cols-1 gap-1`">
      <div
        @click="handleClick(_, row)"
        v-for="(row, index) in data"
        :key="index"
        :class="`grid grid-cols-[10%_10%_10%_30%_40%] hover:bg-light-900/10 rounded-md cursor-pointer active:bg-light-900/20`"
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
