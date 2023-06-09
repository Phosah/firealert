<script setup lang="ts">
defineProps({
  page: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section id="application" class="">
    <div class="hidden md:grid grid-cols-2 items-center bg-brand-blue-1">
      <div class="bg-white">
        <div class="max-w-7xl ml-auto py-4">
          <div class="flex justify-center items-center">
            <p
              class="flex items-center justify-center w-10 h-10 text-center text-red-500 border-4 border-red-400 rounded-full font-bold text-xl"
            >
              {{ page.alpha }}
            </p>
          </div>
          <img :src="page.img" alt="Device" class="lg:h-[900px]" />
        </div>
      </div>
      <div class="bg-brand-blue-1">
        <div class="max-w-7xl py-12 px-12 text-white">
          <h3 class="mb-6 text-xl font-bold">{{ page.title }}</h3>
          <p>
            {{ page.text }}
          </p>
        </div>
      </div>
    </div>

    <!-- Mobile version -->
    <div class="md:hidden bg-brand-blue-1">
      <div class="bg-brand-blue-1">
        <div class="max-w-7xl py-12 px-12 text-white">
          <h3 class="mb-6 text-xl font-bold">{{ page.title }}</h3>
          <p>
            {{ page.text }}
          </p>
        </div>
      </div>
      <div class="bg-white">
        <div class="max-w-7xl ml-auto py-4">
          <div class="flex justify-center items-center">
            <p
              class="flex items-center justify-center w-10 h-10 text-center text-red-500 border-4 border-red-400 rounded-full font-bold text-xl"
            >
              {{ page.alpha }}
            </p>
          </div>
          <img :src="page.img" alt="Device" class="md:h-[900px]" />
        </div>
      </div>
    </div>
  </section>
</template>
