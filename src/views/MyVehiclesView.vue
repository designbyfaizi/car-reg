<script setup lang="ts">
import MainSection from '@/components/MainSection.vue';
import ButtonMain from '@/components/ButtonMain.vue';
import TooltipMain from '@/components/TooltipMain.vue';

import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();

const vehicles = [];
</script>

<template>
  <MainSection class="gap-4">
    <div class="flex items-baseline gap-2">
      <h1 class="text-4xl">My Vehicles</h1>
      <h2 class="text-2xl text-teal-500">CarReg</h2>
    </div>
    <div>
      <h1 class="text-lg">No vehicle Added yet. Add Now</h1>
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
