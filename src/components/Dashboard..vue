<script setup lang="ts"></script>

<template>
  <section class="relative lg:h-[50rem] py-12 text-white text-center">
    <img
      class="absolute top-0 left-0 object-top h-full w-full"
      src="../assets/bg-layer.png"
      alt="bg layer"
    />
    <div class="max-w-2xl mx-auto relative z-10">
      <h2 class="mb-6 text-3xl font-bold">Desktop Dashboard</h2>
      <p class="mb-6">
        We have included a desktop dashboard for easy control monitoring of
        multiple vehicles and fire locations.
      </p>
      <button
        class="mb-6 py-3 px-6 rounded-md text-black bg-white hover:bg-brand-orange-1 hover:text-white"
      >
        <a href="https://v2.firealert.mobi/login">Login</a>
      </button>
      <div class="my-10 mx-6">
        <img src="../assets/dashboard.png" alt="Dashboard" />
      </div>
    </div>
  </section>
</template>
