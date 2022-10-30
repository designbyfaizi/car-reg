import { supabase } from '@/utils/supabase';
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

interface userTypes {
  email?: string;
  id?: string;
  aud?: string;
  fullName?: string;
}

interface sessionTypes {
  access_token?: string;
  refresh_token?: string;
  token_type?: string;
}

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref('');
  const refreshToken = ref('');
  const tokenType = ref('');
  const user = ref<userTypes>();

  const isLoggedIn = computed(() => {
    return accessToken.value && user.value ? true : false;
  })

  const setSession = (payload: sessionTypes) => {
    accessToken.value = payload.access_token as string;
    refreshToken.value = payload.refresh_token as string;
    tokenType.value = payload.token_type as string;
  }

  const setUser = (payload: userTypes) => {
    user.value = payload;
  }

  const logOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setSession({});
      setUser({});
    }
    catch (error) {
      console.error(error)
    }
  }

  return {
    isLoggedIn,
    accessToken,
    refreshToken,
    tokenType,
    user,
    setSession,
    setUser,
    logOut
  }
})