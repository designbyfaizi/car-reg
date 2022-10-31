<script setup lang="ts">
import { ref } from 'vue';
import MainSection from '@/components/MainSection.vue';
import InputMain from '@/components/InputMain.vue';
import SelectMain from '@/components/SelectMain.vue';
import ButtonMain from '@/components/ButtonMain.vue';
import { fetchAllCategories } from '@/utils/category';
import AlertMain from '@/components/AlertMain.vue';
import { addVehicle } from '@/utils/vehicle';

const categories = ref([]);

const formData = ref({
  category: categories.value[0],
  make: '',
  model: '',
  registrationNumber: ''
});
const successMessage = ref('');
const errorMessage = ref('');
const loading = ref(true);

const clearInputs = () => {
  formData.value.make = '';
  formData.value.model = '';
  formData.value.registrationNumber = '';
};

const clearAlerts = () => {
  successMessage.value = '';
  errorMessage.value = '';
};

fetchAllCategories()
  .then(({ data, error }) => {
    if (error) throw error;
    console.log({ data });
    categories.value = [...data];
    formData.value.category = data[0].name;
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    loading.value = false;
  });

const handleSubmit = async () => {
  clearAlerts();
  loading.value = true;
  console.log({ formData: formData.value });
  try {
    const { data, error } = await addVehicle(formData.value);
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
      <h1 class="text-4xl">Add Vehicle</h1>
      <h2 class="text-2xl text-teal-500">CarReg</h2>
    </div>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <SelectMain
        required
        label="Vehicle Category"
        @change="(event) => (formData.category = event.target.value)"
        :options="categories"
      />
      <InputMain
        required
        label="Make"
        :value="formData.make"
        @input="(event) => (formData.make = event.target.value)"
      />
      <InputMain
        required
        label="Model"
        :value="formData.model"
        @input="(event) => (formData.model = event.target.value)"
      />
      <InputMain
        required
        label="Registration Number"
        type="number"
        :value="formData.registrationNumber"
        @input="
          (event) =>
            (formData.registrationNumber = event.target.value.toString())
        "
      />
      <ButtonMain
        label="Add Vehicle"
        type="submit"
        :loading="loading"
        class="my-4"
      />
      <AlertMain type="success" :message="successMessage" />
      <AlertMain type="error" :message="errorMessage" />
    </form>
  </MainSection>
</template>
