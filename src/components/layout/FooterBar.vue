<script setup lang="ts"></script>

<template>
  <footer class="pr-6 lg:pr-12 py-12 bg-brand-blue-1 text-white">
    <div class="md:flex gap-6 justify-center items-center">
      <div class="mb-10 lg:md-0">
        <img
          class="mx-auto"
          src="../../assets/footer-img.png"
          alt="footer image"
        />
      </div>

      <div>
        <h2
          class="mb-6 text-2xl md:text-3xl text-center md:text-left font-bold"
        >
          Download the <span class="text-brand-orange-2">Firealert</span> App
        </h2>

        <div class="">
          <!-- <div><img src="../../assets/qr.png" alt="Qr code" /></div> -->
          <div class="flex flex-col items-center mb-10 md:mb-0">
            <img
              class="mb-2"
              src="../../assets/app-store.png"
              alt="App store"
            />
            <img src="../../assets/google-store.png" alt="Google store" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between space-x-4">
      <p class="md:pl-6 lg:pl-12 text-center">
        &copy; {{ year }} Firealert. All rights reserved.
      </p>

      <ul class="flex items-center space-x-6 cursor-pointer">
        <router-link to="/terms-and-conditions"
          ><li class="hover:text-brand-orange-2">
            Terms & Conditions
          </li></router-link
        >
        <router-link to="/privacy-policy"
          ><li class="hover:text-brand-orange-2">
            Privacy Policy
          </li></router-link
        >
        <router-link to="/refund-policy">
          <li class="hover:text-brand-orange-2"> Refund Policy</li>
        </router-link>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
const year = ref(new Date().getFullYear());
</script>
