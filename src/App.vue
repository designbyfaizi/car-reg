<script setup lang="ts">
import Navbar from '@/components/Navbar/NavbarComponent.vue';
import { RouterView } from 'vue-router';
import { supabase } from '@/utils/supabase';
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();

onMounted(() => {
  console.log('Main onMounted!!!');
  supabase.auth.getSession().then(({ data }) => {
    const { session } = data;
    const { user } = session;
    auth.setSession(session);
    auth.setUser(user);
  });

  supabase.auth.onAuthStateChange((_, _session) => {
    if (_ == 'SIGNED_OUT') {
      return;
    }
    console.log({ _session });
    auth.setSession(_session);
    auth.setUser(_session.user);
  });
});
</script>

<template>
  <div class="p-4 bg-dark-900 min-h-screen bg-cover">
    <Navbar />
    <main class="container mx-auto max-w-screen-lg">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
