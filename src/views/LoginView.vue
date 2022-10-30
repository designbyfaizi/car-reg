<script setup lang="ts">
import MainSection from '@/components/MainSection.vue';
import InputMain from '@/components/InputMain.vue';
import ButtonMain from '@/components/ButtonMain.vue';
import AlertMain from '@/components/AlertMain.vue';

import { ref } from 'vue';
import { supabase } from '@/utils/supabase';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();

const router = useRouter();

const email = ref('');
const password = ref('');
const loading = ref(false);
const errorMessage = ref('');

const clearAlerts = () => {
  errorMessage.value = '';
};

const handleLogin = async () => {
  console.log('Login Process Starts :D');
  clearAlerts();
  try {
    loading.value = true;
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    });

    if (error) {
      throw error;
    }
    console.log(data.session);
    auth.setSession(data.session);
    auth.setUser(data.user);
    router.push('/');
  } catch (err: any) {
    console.error(err.message);
    errorMessage.value = err.message;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <MainSection>
    <h1 class="text-[#11181c] text-4xl">Login</h1>
    <h2 class="text-[#11181c] text-2xl text-teal-600">CarReg</h2>
    <form
      @submit.prevent="handleLogin"
      class="loginForm flex flex-col gap-2 my-4"
    >
      <InputMain
        required
        type="text"
        label="Email"
        name="email"
        :value="email"
        @input="(event) => (email = event.target.value)"
      />
      <InputMain
        required
        type="password"
        label="Password"
        name="password"
        :value="password"
        @input="(event) => (password = event.target.value)"
      />
      <ButtonMain label="Login" type="submit" :loading="loading" />
      <AlertMain type="error" :message="errorMessage" />
    </form>
    <p>Don't have an Account? <RouterLink to="/signup">Sign Up</RouterLink></p>
  </MainSection>
</template>
