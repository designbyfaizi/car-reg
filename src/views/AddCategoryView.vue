<script setup lang="ts">
import { ref } from 'vue';
import MainSection from '@/components/MainSection.vue';
import InputMain from '@/components/InputMain.vue';
import ButtonMain from '@/components/ButtonMain.vue';
import AlertMain from '@/components/AlertMain.vue';
import { addCategory } from '@/utils/category';

const formData = ref({
  name: ''
});
const successMessage = ref('');
const errorMessage = ref('');
const loading = ref(false);

const clearInputs = () => {
  formData.value.name = '';
};

const clearAlerts = () => {
  successMessage.value = '';
  errorMessage.value = '';
};

const handleSubmit = async () => {
  clearAlerts();
  loading.value = true;
  try {
    const { data, error } = await addCategory(formData.value);
    if (error) throw error;
    console.log({ data });
    clearInputs();
    successMessage.value = 'Category Added Successfully';
  } catch (error) {
    console.error(error);
    errorMessage.value = error.message;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <MainSection>
    <div class="flex items-baseline gap-2">
      <h1 class="text-4xl">Add Category</h1>
      <h2 class="text-2xl text-teal-500">CarReg</h2>
    </div>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <InputMain
        required
        label="Category"
        :value="formData.name"
        @input="(event) => (formData.name = event.target.value)"
      />
      <ButtonMain
        label="Add Category"
        type="submit"
        :loading="loading"
        class="my-4"
      />
      <AlertMain type="success" :message="successMessage" />
      <AlertMain type="error" :message="errorMessage" />
    </form>
  </MainSection>
</template>
