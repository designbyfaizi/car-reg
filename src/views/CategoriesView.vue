<script setup lang="ts">
import { ref } from 'vue';
import ButtonMain from '@/components/ButtonMain.vue';
import TooltipMain from '@/components/TooltipMain.vue';
import MainSection from '@/components/MainSection.vue';
import DataTable from '@/components/DataTable.vue';
import { fetchAllCategories } from '@/utils/category';
import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();

const categories = ref([]);
const loading = ref(true);

fetchAllCategories()
  .then(({ data, error }) => {
    if (error) throw error;
    console.log({ data });
    categories.value = [...data];
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    loading.value = false;
  });
</script>

<template>
  <MainSection class="gap-4">
    <div class="flex items-baseline gap-2">
      <h1 class="text-4xl">Categories</h1>
      <h2 class="text-2xl text-teal-500">CarReg</h2>
    </div>
    <div>
      <h1 v-if="categories.length <= 0" class="text-lg">
        {{ loading ? 'Loading...' : 'No categories Added yet.' }}
      </h1>
      <div v-else>
        <DataTable :data="categories" disableHeader />
      </div>
    </div>
    <TooltipMain class="ml-auto" label="Add Category">
      <ButtonMain
        v-if="auth.isLoggedIn"
        @click="() => $router.push('/add-category')"
        class="self-end !w-70px !aspect-square text-5xl"
        label="+"
      />
    </TooltipMain>
  </MainSection>
</template>
