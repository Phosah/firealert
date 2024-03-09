<script setup lang="ts">
import { ref } from "vue";
import Screen1 from "../assets/screen-1.png";
import Screen2 from "../assets/screen-2.png";
import Screen3 from "../assets/screen-3.png";
import Screen4 from "../assets/screen-4.png";
import Screen5 from "../assets/screen-5.png";

const screens = [Screen1, Screen2, Screen3, Screen4, Screen5];
const index = ref(2);
const switchScreen = (ix: number) => {
  index.value = ix;
};
</script>

<template>
  <section id="features" class="py-12 bg-brand-gray-1">
    <div class="max-w-7xl mx-auto text-center text-white">
      <h2 class="mb-6 text-3xl font-bold">App Features</h2>

      <div class="flex justify-center items-end">
        <div
          class="mb-6 transition-all ease-in-out duration-500"
          :class="index == ix ? 'w-1/4' : 'flex-1'"
          v-for="(screen, ix) in screens"
          :key="ix"
        >
          <img :src="screen" alt="screen" class="" />
        </div>
      </div>

      <p class="mb-4">View, export and manage events</p>

      <div class="flex items-center justify-center gap-4">
        <div v-for="(datum, ix) in screens.length" :key="ix">
          <button
            @click="switchScreen(ix)"
            :class="index == ix ? 'bg-brand-orange-1' : 'bg-white'"
            class="w-3 h-3 rounded-full transition-all ease-in-out duration-500"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>
