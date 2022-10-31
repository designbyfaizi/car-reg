<script setup lang="ts">
import { ref } from 'vue';
import NavItems from './NavItems.vue';
import NavLink from '@/components/Navbar/NavLink.vue';
import ButtonMain from '@/components/ButtonMain.vue';
import { RouterLink, useRouter } from 'vue-router';

import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();
const router = useRouter();
const loading = ref(false);

const handleLogout = async () => {
  console.log('Logging Out');
  loading.value = true;
  try {
    await auth.logOut();
    router.push('/');
  } catch (error) {
    console.error(error``);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <header
    class="sticky top-4 h-[100px] bg-dark-500 bg-opacity-80 backdrop-blur-md container mx-auto max-w-screen-lg p-4 rounded-xl flex justify-between items-center ring-2 ring-black/50"
  >
    <RouterLink
      to="/"
      class="flex items-center no-underline hover:scale-101 active:scale-99 transition-all duration-125 ease-in-out"
    >
      <img
        src="@/assets/logo.svg"
        alt="car-reg"
        class="min-w-16 max-h-[100%]"
      />
      <h1 class="text-teal-600">CarReg</h1>
    </RouterLink>
    <NavItems>
      <NavLink to="/" name="Home" />
      <NavLink v-if="auth.isLoggedIn" to="/vehicles" name="Vehicles" />
      <NavLink v-if="auth.isLoggedIn" to="/categories" name="Categories" />
      <NavLink to="/about" name="About" />
    </NavItems>
    <NavItems>
      <NavLink v-if="!auth.isLoggedIn" to="/login" name="Login" />
      <NavLink
        v-if="!auth.isLoggedIn"
        to="/signup"
        name="Sign Up"
        :class="`!text-dark-700 !rounded-xl ${
          $route.path == '/signup' ? '!bg-light-900/100' : '!bg-light-900/40'
        }`"
      />
      <NavLink v-if="auth.isLoggedIn" to="/my-vehicles" name="My Vehicles" />
      <ButtonMain
        v-if="auth.isLoggedIn"
        label="Logout"
        :loading="loading"
        class="!bg-red-600 !text-red-2 hover:!bg-red-500 focus:!ring-red-300"
        @click="handleLogout()"
      />
    </NavItems>
  </header>
</template>
