<template>
  <section class="relative z-20 mt-10 mb-20 max-w-7xl mx-auto px-4">
    <h2 class="mb-8 text-3xl font-bold">Pricing</h2>

    <div class="text-brand-gray-1">
      <article class="mb-10 border border-black">
        <h2 class="my-2 px-4 text-3xl font-bold">FAM</h2>

        <div class="py-4 border-t">
          <div class="px-4 flex justify-between space-x-2 space-y-2">
            <div class="flex items-center space-x-2">
              <component
                :is="CheckedIcon"
                class="w-4 h-4 text-green-500 flex-shrink-0"
              ></component>
              <p>Main controller (including pigtail, plugs and harness)</p>
            </div>
            <p class="flex-shrink-0 font-bold text-black">R 6 370.00</p>
          </div>
          <div class="px-4 flex justify-between space-x-2 space-y-2">
            <div class="flex items-center space-x-2">
              <component
                :is="CheckedIcon"
                class="w-4 h-4 text-green-500"
              ></component>
              <p>Bracket</p>
            </div>
            <p class="font-bold text-black">R 170.00</p>
          </div>
          <div class="px-4 flex justify-between space-x-2 space-y-2">
            <div class="flex items-center space-x-2">
              <component
                :is="CheckedIcon"
                class="w-4 h-4 text-green-500"
              ></component>
              <p>Package incl manual</p>
            </div>
            <p class="font-bold text-black">R 100.00</p>
          </div>
        </div>
      </article>

      <article class="mb-10 border border-black">
        <h2 class="my-2 px-4 text-3xl font-bold">FEMS</h2>

        <div class="py-4 border-t">
          <div class="px-4 flex justify-between space-x-2 space-y-2">
            <div class="flex items-center space-x-2">
              <component
                :is="CheckedIcon"
                class="w-4 h-4 text-green-500"
              ></component>
              <p>Relay box</p>
            </div>
            <p class="font-bold text-black">R 3 690.00</p>
          </div>
          <div class="px-4 flex justify-between space-x-2 space-y-2">
            <div class="flex items-center space-x-2">
              <component
                :is="CheckedIcon"
                class="w-4 h-4 text-green-500"
              ></component>
              <p>Bracket</p>
            </div>
            <p class="font-bold text-black">R 170.00</p>
          </div>
          <div class="px-4 flex justify-between space-x-2 space-y-2">
            <div class="flex items-center space-x-2">
              <component
                :is="CheckedIcon"
                class="w-4 h-4 text-green-500"
              ></component>
              <p>Package</p>
            </div>
            <p class="font-bold text-black">R 80.00</p>
          </div>
        </div>
      </article>

      <article class="mb-10 border border-black">
        <h2 class="my-2 px-4 text-3xl font-bold">Termination Box</h2>

        <div class="py-4 border border-t">
          <div class="px-4 flex justify-between space-x-2 space-y-2">
            <div class="flex items-center space-x-2">
              <component
                :is="CheckedIcon"
                class="w-4 h-4 text-green-500 flex-shrink-0"
              ></component>
              <p>Termination box(including plugs and harness)</p>
            </div>
            <p class="flex-shrink-0 font-bold text-black">R 1 374.00</p>
          </div>
          <div class="px-4 flex justify-between space-x-2 space-y-2">
            <div class="flex items-center space-x-2">
              <component
                :is="CheckedIcon"
                class="w-4 h-4 text-green-500"
              ></component>
              <p>Bracket</p>
            </div>
            <p class="font-bold text-black">R 170.00</p>
          </div>
          <div class="px-4 flex justify-between space-x-2 space-y-2">
            <div class="flex items-center space-x-2">
              <component
                :is="CheckedIcon"
                class="w-4 h-4 text-green-500"
              ></component>
              <p>Package</p>
            </div>
            <p class="font-bold text-black">R 80.00</p>
          </div>
        </div>
      </article>

      <article class="mb-10 border border-black">
        <h2 class="my-2 px-4 text-3xl font-bold">WFS</h2>

        <div class="py-4 border border-t">
          <div class="px-4 flex justify-between space-x-2 space-y-2">
            <div class="flex items-center space-x-2">
              <component
                :is="CheckedIcon"
                class="w-4 h-4 text-green-500"
              ></component>
              <p>Wireless probe sender</p>
            </div>
            <p class="font-bold text-black">R 1 570.00</p>
          </div>
          <div class="px-4 flex justify-between space-x-2 space-y-2">
            <div class="flex items-center space-x-2">
              <component
                :is="CheckedIcon"
                class="w-4 h-4 text-green-500"
              ></component>
              <p>Bracket</p>
            </div>
            <p class="font-bold text-black">R 134.00</p>
          </div>
          <div class="px-4 flex justify-between space-x-2 space-y-2">
            <div class="flex items-center space-x-2">
              <component
                :is="CheckedIcon"
                class="w-4 h-4 text-green-500"
              ></component>
              <p>Package</p>
            </div>
            <p class="font-bold text-black">R 30.00</p>
          </div>
        </div>
      </article>

      <article class="mb-10 border border-black">
        <div class="flex items-center justify-between px-4">
          <h2 class="my-2 text-3xl font-bold">Platform - Monthly</h2>
          <p class="flex-shrink-0 font-bold text-black">R 280.00</p>
        </div>

        <div class="py-4 border-t">
          <div class="px-4 space-y-2">
            <div class="flex items-center space-x-2">
              <component
                :is="CheckedIcon"
                class="w-4 h-4 text-green-500"
              ></component>
              <p>FireAlert Web Application</p>
            </div>

            <div class="flex items-center space-x-2">
              <component
                :is="CheckedIcon"
                class="w-4 h-4 text-green-500"
              ></component>
              <p>FireAlert Mobile Application</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import CheckedIcon from "../components/icons/CheckedIcon.vue";
</script>
