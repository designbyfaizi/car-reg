<script setup lang="ts">
import NavItems from './NavItems.vue';
import NavLink from '@/components/Navbar/NavLink.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <header
    class="sticky top-4 h-[100px] bg-light-50 bg-opacity-60 backdrop-blur-lg container mx-auto p-4 rounded-xl flex justify-between items-center border-1 border-teal-600"
  >
    <RouterLink to="/">
      <img
        src="@/assets/logo.svg"
        alt="car-reg"
        class="min-w-16 max-h-[100%] hover:scale-90 transition-all duration-125 ease-in-out"
      />
    </RouterLink>
    <NavItems>
      <NavLink to="/" name="Home" />
      <NavLink to="/about" name="About" />
    </NavItems>
    <NavItems>
      <NavLink to="/login" name="Login" />
      <NavLink to="/signup" name="Sign Up" class="!bg-teal-700 !text-teal-100 !rounded-xl" />
    </NavItems>
  </header>
</template>
