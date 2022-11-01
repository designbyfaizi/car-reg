<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import ButtonMain from '@/components/ButtonMain.vue';
import TooltipMain from '@/components/TooltipMain.vue';
import MainSection from '@/components/MainSection.vue';
import DataTable from '@/components/DataTable.vue';
import { fetchSingleVehicle } from '@/utils/vehicle';
import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();
const route = useRoute();

console.log({ route });

const vehicle = ref({});
const loading = ref(true);

const info = ref((name, value) => {
  return `<h1>
    ${name}: <span class="text-teal-400">${value}</span>
  </h1>`;
});

fetchSingleVehicle({ registrationNumber: route.params.registrationNumber })
  .then(({ data, error }) => {
    if (error) throw error;
    console.log({ data });
    vehicle.value = data[0];
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    loading.value = false;
  });
</script>

<template>
  <MainSection class="gap-4">
    <div class="flex items-baseline gap-2">
      <h1 class="text-4xl">Vehicle Details</h1>
      <h2 class="text-2xl text-teal-500">CarReg</h2>
    </div>
    <div>
      <h1 v-if="!vehicle.make" class="text-lg">
        {{ loading ? 'Loading...' : 'No vehicle Found.' }}
      </h1>
      <div v-else class="flex flex-col">
        <div v-html="info('Category', vehicle.category)"></div>
        <div v-html="info('Make', vehicle.make)"></div>
        <div v-html="info('Model', vehicle.model)"></div>
        <div
          v-html="info('Registration Number', vehicle.registrationNumber)"
        ></div>
      </div>
    </div>
  </MainSection>
</template>
