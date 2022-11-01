<template>
  <section class="min-h-2xl flex justify-center items-center">
    <div
      v-bind="$attrs"
      class="!min-w-[700px] bg-dark-500 bg-opacity-70 backdrop-blur-lg ring-2 ring-black/50 text-light-900 shadow-xl p-4 rounded-xl flex flex-col"
    >
      <slot></slot>
    </div>
  </section>
</template>
