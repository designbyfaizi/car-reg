<script setup lang="ts">
import NavItems from './NavItems.vue';
import NavLink from '@/components/Navbar/NavLink.vue';
import ButtonMain from '@/components/ButtonMain.vue';
import { RouterLink } from 'vue-router';

import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();

const handleLogout = () => {
  console.log({ isLoggedIn: auth.isLoggedIn.value });
  console.log('Logging Out');
  auth.logOut();
};
</script>

<template>
  <header
    class="sticky top-4 h-[100px] bg-light-50 bg-opacity-60 backdrop-blur-lg container mx-auto max-w-screen-lg p-4 rounded-xl flex justify-between items-center border-1 border-teal-600"
  >
    <RouterLink
      to="/"
      class="flex items-center no-underline hover:scale-105 active:scale-95 transition-all duration-125 ease-in-out"
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
      <NavLink v-if="auth.isLoggedIn" to="/cars" name="Cars" />
      <NavLink to="/about" name="About" />
    </NavItems>
    <NavItems>
      <NavLink v-if="!auth.isLoggedIn" to="/login" name="Login" />
      <NavLink
        v-if="!auth.isLoggedIn"
        to="/signup"
        name="Sign Up"
        class="!bg-teal-700 !text-teal-100 !rounded-xl"
      />
      <ButtonMain
        v-if="auth.isLoggedIn"
        label="Logout"
        class="!bg-red-600 !text-red-2 hover:!bg-red-500 focus:!ring-red-300"
        @click="handleLogout()"
      />
    </NavItems>
  </header>
</template>
