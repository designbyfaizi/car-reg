<script setup lang="ts">
import Navbar from '@/components/Navbar/NavbarComponent.vue';

import { RouterView, useRouter } from 'vue-router';
import { supabase } from '@/utils/supabase';
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();


onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    const { session } = data;
    const { user } = session;
    auth.setSession(session);
    auth.setUser(user);
  });

  supabase.auth.onAuthStateChanged((_, _session) => {
    // console.log({_session})
    // auth.setSession(_session);
    // auth.setUser(_session.user);
  });
});
// import { useCounterStore } from '@/stores/counter';
// const counter = useCounterStore();
</script>

<template>
  <div class="p-4 bg-light-700 min-h-screen">
    <Navbar />
    <main class="container mx-auto max-w-screen-lg">
      <RouterView />
      <!-- <p>User: {{ auth?.accessToken }}</p> -->
    </main>
  </div>
</template>

<style scoped></style>
