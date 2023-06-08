<script setup lang="ts"></script>

<template>
  <nav class="bg-brand-blue-1">
    <div
      class="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between text-white"
    >
      <img class="w-16 h-16" src="../assets/logo.png" alt="Logo" />
      <ul class="flex items-center gap-6">
        <a href="#about"><li>About</li></a>
        <a href="#application"><li>Application</li></a>
        <a href="#work"><li>How does it work?</li></a>
        <a href="#features"><li>Features</li></a>
      </ul>
      <div class="flex items-center gap-6">
        <button class="py-3 px-6 rounded-md bg-white text-black">
          Download
        </button>
        <button class="py-3 px-6 rounded-md bg-red-300 text-white">
          Log in
        </button>
      </div>
    </div>
  </nav>
</template>
