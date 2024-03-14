<script setup lang="ts"></script>

<template>
  <nav class="bg-brand-blue-1">
    <div
      class="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between text-white"
    >
      <img class="w-16 h-16" src="../assets/logo.png" alt="Logo" />
      <ul class="hidden md:flex items-center gap-6">
        <a class="hover:text-brand-orange-2" href="#about"><li>About</li></a>
        <a class="hover:text-brand-orange-2" href="#application"
          ><li>Application</li></a
        >
        <a class="hover:text-brand-orange-2" href="#work"
          ><li>How does it work?</li></a
        >
        <a class="hover:text-brand-orange-2" href="#features"
          ><li>Features</li></a
        >
        <a class="hover:text-brand-orange-2" href="#features"
          ><li>Pricing</li></a
        >
      </ul>
      <div class="hidden md:flex items-center gap-6">
        <button
          class="py-3 px-6 rounded-md bg-white text-black hover:bg-brand-orange-1 hover:text-white"
        >
          Download
        </button>
        <a href="https://v2.firealert.mobi/login">
          <button
            class="py-3 px-6 rounded-md bg-brand-orange-2 text-white hover:bg-brand-orange-1"
          >
            Log in
          </button>
        </a>
      </div>
    </div>
  </nav>
</template>
