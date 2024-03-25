<template>
  <main class="font-public">
    <MainNavbar />
    <RouterView />
    <FooterBar />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import MainNavbar from "@/components/layout/MainNavbar.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
</script>

<style>
.font-public {
  font-family: "Public Sans", sans-serif;
}
</style>
