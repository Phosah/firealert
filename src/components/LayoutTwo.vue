<script setup lang="ts">
defineProps({
  page: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="grid grid-cols-2 items-center bg-brand-blue-1">
    <div class="py-12 px-12 text-white">
      <h3 class="mb-6 text-xl font-bold">{{ page.title }}</h3>
      <p>
        {{ page.text }}
      </p>
    </div>
    <div class="bg-white py-4">
      <div class="flex justify-center">
        <p
          class="inline-block w-10 h-10 mb-1 py-2 text-center text-red-200 border border-red-300 rounded-full"
        >
          {{ page.alpha }}
        </p>
      </div>
      <img :src="page.img" alt="Device" />
    </div>
  </section>
</template>
