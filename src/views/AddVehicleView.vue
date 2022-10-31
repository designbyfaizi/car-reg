<script setup lang="ts">
import { ref } from 'vue';
import MainSection from '@/components/MainSection.vue';
import InputMain from '@/components/InputMain.vue';
import SelectMain from '@/components/SelectMain.vue';
import ButtonMain from '@/components/ButtonMain.vue';

const formData = ref({
  category: '',
  make: '',
  model: '',
  registrationNumber: ''
});

const categories = ref([
  'Bus',
  'Sedan',
  'Coupe',
  'Convertible',
  'SUV',
  'Hatchback',
  'Wagon'
]);
const loading = ref(false);

const handleSubmit = () => {
  console.log({ formData: formData.value });
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
        @input="(event) => (formData.category = event.target.value)"
        :options="categories"
      />
      <InputMain
        required
        label="Make"
        @input="(event) => (formData.make = event.target.value)"
      />
      <InputMain
        required
        label="Model"
        @input="(event) => (formData.model = event.target.value)"
      />
      <InputMain
        required
        label="Registration Number"
        type="number"
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
    </form>
  </MainSection>
</template>
