<script setup lang="ts">
import { ref } from 'vue';
import ButtonMain from '@/components/ButtonMain.vue';
import TooltipMain from '@/components/TooltipMain.vue';
import MainSection from '@/components/MainSection.vue';
import DataTable from '@/components/DataTable.vue';
import { fetchAllVehicles } from '@/utils/vehicle';
import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();

const vehicles = ref([]);
const loading = ref(true);

fetchAllVehicles()
  .then(({ data, error }) => {
    if (error) throw error;
    console.log({ data });
    vehicles.value = [...data];
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
      <h1 class="text-4xl">Registered Vehicles</h1>
      <h2 class="text-2xl text-teal-500">CarReg</h2>
    </div>
    <div>
      <h1 v-if="vehicles.length <= 0" class="text-lg">
        {{ loading ? 'Loading...' : 'No vehicle Added yet.' }}
      </h1>
      <div v-else>
        <DataTable :data="vehicles" />
      </div>
    </div>
    <TooltipMain class="ml-auto" label="Add Vehicle">
      <ButtonMain
        v-if="auth.isLoggedIn"
        @click="() => $router.push('/add-vehicle')"
        class="self-end !w-70px !aspect-square text-5xl"
        label="+"
      />
    </TooltipMain>
  </MainSection>
</template>
