<script setup lang="ts">
import { onMounted } from 'vue';
import MainSection from '@/components/MainSection.vue';
import ButtonMain from '@/components/ButtonMain.vue';
import TooltipMain from '@/components/TooltipMain.vue';
import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();
console.log('isLoggedIn: ', auth.isLoggedIn);

const loggedInMessage =
  'You are logged in. You can view all cars and list your cars as well.';
const loggedOutMessage = 'You need an account to view and list your cars.';

</script>

<template>
  <MainSection class="!gap-4">
    <div class="flex items-baseline gap-2">
      <h1 class="text-4xl">Home</h1>
      <h2 class="text-2xl text-teal-500">CarReg</h2>
    </div>
    <h3 :class="auth.isLoggedIn && 'text-teal-500'">
      {{ auth.isLoggedIn ? loggedInMessage : loggedOutMessage }}
    </h3>
    <div class="flex items-center gap-3">
      <ButtonMain
        v-if="!auth.isLoggedIn"
        label="Login"
        @click="$router.push('/login')"
      />
      <ButtonMain
        v-if="auth.isLoggedIn"
        label="View All Vehicles"
        @click="$router.push('/vehicles')"
      />
      <ButtonMain
        v-if="auth.isLoggedIn"
        label="Manage your Vehicles"
        @click="$router.push('/my-vehicles')"
        class="!bg-teal-700 !hover:bg-teal-800"
      />
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
