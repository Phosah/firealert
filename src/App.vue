<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <main class="font-public">
    <HomeView />
  </main>
</template>

<style>
.font-public {
  font-family: "Public Sans", sans-serif;
}
</style>
