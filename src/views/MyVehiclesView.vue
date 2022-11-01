<script setup lang="ts">
import { ref } from 'vue';
import MainSection from '@/components/MainSection.vue';
import ButtonMain from '@/components/ButtonMain.vue';
import TooltipMain from '@/components/TooltipMain.vue';
import DataTable from '@/components/DataTable.vue';

import { fetchMyVehicles } from '@/utils/vehicle';
import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();

const myVehicles = ref([]);
const loading = ref(true);

fetchMyVehicles({ email: auth.user?.email })
  .then(({ data, error }) => {
    if (error) throw error;
    console.log({ data });
    myVehicles.value = [...data];
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
      <h1 class="text-4xl">My Vehicles</h1>
      <h2 class="text-2xl text-teal-500">CarReg</h2>
    </div>
    <div>
      <h1 v-if="myVehicles.length <= 0" class="text-lg">
        {{ loading ? 'Loading...' : 'No vehicle Added yet. Add Now' }}
      </h1>
      <div v-else>
        <DataTable :data="myVehicles" enableClick />
        <!-- <h1 v-for="(vehicle, index) in myVehicles" :key="index">
          {{ vehicle.make }}
        </h1> -->
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
