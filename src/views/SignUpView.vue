<script setup lang="ts">
import MainSection from '@/components/MainSection.vue';
import InputMain from '@/components/InputMain.vue';
import ButtonMain from '@/components/ButtonMain.vue';
import AlertMain from '@/components/AlertMain.vue';

import { ref } from 'vue';
import { supabase } from '@/utils/supabase';
import { useRouter } from 'vue-router';

const router = useRouter();

const fullName = ref('');
const email = ref('');
const password = ref('');
const loading = ref(false);
const errorMessage = ref('');
const successMessage = ref('');

const clearAlerts = () => {
  errorMessage.value = '';
  successMessage.value = '';
};

const clearInputs = () => {
  fullName.value = '';
  email.value = '';
  password.value = '';
};

const handleSignUp = async () => {
  console.log('Sign Up Process Starts :D');
  clearAlerts();
  try {
    loading.value = true;
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          fullName: fullName.value
        }
      }
    });

    if (error) {
      throw error;
    }
    console.log({ data, router });
    if (data.user) {
      clearInputs();
      successMessage.value = 'Success: Check your email, or proceed to Login';
    }
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
    <h1 class="text-4xl">Sign Up</h1>
    <h2 class="text-2xl text-teal-500">CarReg</h2>
    <form
      @submit.prevent="handleSignUp"
      class="signUpForm flex flex-col gap-3 my-4"
    >
      <InputMain
        required
        type="text"
        label="Full Name"
        name="fullName"
        :value="fullName"
        @input="(event) => (fullName = event.target.value)"
      />
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

      <ButtonMain
        label="Sign Up"
        type="submit"
        :loading="loading"
        class="my-4"
      />
      <AlertMain type="error" :message="errorMessage" />
      <AlertMain type="success" :message="successMessage" />
    </form>
    <p>
      Already Have an Account?
      <RouterLink to="/login" class="text-teal-500">Login</RouterLink>
    </p>
  </MainSection>
</template>
