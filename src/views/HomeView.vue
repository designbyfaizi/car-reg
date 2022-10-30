<script setup lang="ts">
import MainSection from '@/components/MainSection.vue';
import ButtonMain from '@/components/ButtonMain.vue';
import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();
console.log('isLoggedIn: ', auth.isLoggedIn);

const welcomeMessage = auth.isLoggedIn
  ? 'You are logged in. You can view all cars and list your cars as well.'
  : 'You need an account to view and list your cars.';
</script>

<template>
  <MainSection>
    <div class="flex items-baseline gap-2">
      <h1 class="text-[#11181c] text-4xl">Home</h1>
      <h2 class="text-[#11181c] text-2xl text-teal-600">CarReg</h2>
    </div>
    <h3 :class="auth.isLoggedIn && 'text-teal-600'">{{ welcomeMessage }}</h3>
    <div class="flex items-center gap-3">
      <ButtonMain
        v-if="!auth.isLoggedIn"
        label="Login"
        @click="$router.push('/login')"
      />
      <ButtonMain
        v-if="auth.isLoggedIn"
        label="View All Cars"
        @click="$router.push('/cars')"
      />
      <ButtonMain
        v-if="auth.isLoggedIn"
        label="Manage your Cars"
        @click="$router.push('/cars')"
        class="!bg-teal-700 !hover:bg-teal-800"
      />
    </div>
  </MainSection>
</template>
