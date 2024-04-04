<template>
  <section class="relative">
    <!-- <img
      class="absolute top-0 left-0 h-full w-full object-cover"
      src="../assets/bg-layer.png"
      alt="bg layer"
    /> -->

    <section class="relative z-20 mt-10 mb-20 max-w-7xl mx-auto px-4">
      <h2 class="mb-8 text-3xl font-bold">Pricing</h2>

      <div class="text-brand-gray-1">
        <article class="mb-10 border border-brand-orange-1">
          <h2 class="my-2 px-4 text-3xl font-bold">FAM</h2>

          <div class="py-4 border-t">
            <div class="px-4 flex justify-between space-y-2">
              <div class="flex items-center space-x-2">
                <p>Main controller (including pigtail, plugs and harness)</p>
                <component
                  :is="CheckedIcon"
                  class="w-4 h-4 text-green-500"
                ></component>
              </div>
              <p class="font-bold text-black">R 6 370.00</p>
            </div>
            <div class="px-4 flex justify-between space-y-2">
              <div class="flex items-center space-x-2">
                <p>Bracket</p>
                <component
                  :is="CheckedIcon"
                  class="w-4 h-4 text-green-500"
                ></component>
              </div>
              <p class="font-bold text-black">R 170.00</p>
            </div>
            <div class="px-4 flex justify-between space-y-2">
              <div class="flex items-center space-x-2">
                <p>Package incl manual</p>
                <component
                  :is="CheckedIcon"
                  class="w-4 h-4 text-green-500"
                ></component>
              </div>
              <p class="font-bold text-black">R 100.00</p>
            </div>
          </div>
        </article>

        <article class="mb-10 border border-brand-orange-1">
          <h2 class="my-2 px-4 text-3xl font-bold">FEMS</h2>

          <div class="py-4 border-t">
            <div class="px-4 flex justify-between space-y-2">
              <div class="flex items-center space-x-2">
                <p>Relay box</p>
                <component
                  :is="CheckedIcon"
                  class="w-4 h-4 text-green-500"
                ></component>
              </div>
              <p class="font-bold text-black">R 3 690.00</p>
            </div>
            <div class="px-4 flex justify-between space-y-2">
              <div class="flex items-center space-x-2">
                <p>Bracket</p>
                <component
                  :is="CheckedIcon"
                  class="w-4 h-4 text-green-500"
                ></component>
              </div>
              <p class="font-bold text-black">R 170.00</p>
            </div>
            <div class="px-4 flex justify-between space-y-2">
              <div class="flex items-center space-x-2">
                <p>Package</p>
                <component
                  :is="CheckedIcon"
                  class="w-4 h-4 text-green-500"
                ></component>
              </div>
              <p class="font-bold text-black">R 80.00</p>
            </div>
          </div>
        </article>

        <article class="mb-10 border border-brand-orange-1">
          <h2 class="my-2 px-4 text-3xl font-bold">Termination Box</h2>

          <div class="py-4 border border-t">
            <div class="px-4 flex justify-between space-y-2">
              <div class="flex items-center space-x-2">
                <p>Termination box(including plugs and harness)</p>
                <component
                  :is="CheckedIcon"
                  class="w-4 h-4 text-green-500"
                ></component>
              </div>
              <p class="font-bold text-black">R 1 374.00</p>
            </div>
            <div class="px-4 flex justify-between space-y-2">
              <div class="flex items-center space-x-2">
                <p>Bracket</p>
                <component
                  :is="CheckedIcon"
                  class="w-4 h-4 text-green-500"
                ></component>
              </div>
              <p class="font-bold text-black">R 170.00</p>
            </div>
            <div class="px-4 flex justify-between space-y-2">
              <div class="flex items-center space-x-2">
                <p>Package</p>
                <component
                  :is="CheckedIcon"
                  class="w-4 h-4 text-green-500"
                ></component>
              </div>
              <p class="font-bold text-black">R 80.00</p>
            </div>
          </div>
        </article>

        <article class="mb-10 border border-brand-orange-1">
          <h2 class="my-2 px-4 text-3xl font-bold">WFS</h2>

          <div class="py-4 border border-t">
            <div class="px-4 flex justify-between space-y-2">
              <div class="flex items-center space-x-2">
                <p>Wireless probe sender</p>
                <component
                  :is="CheckedIcon"
                  class="w-4 h-4 text-green-500"
                ></component>
              </div>
              <p class="font-bold text-black">R 1 570.00</p>
            </div>
            <div class="px-4 flex justify-between space-y-2">
              <div class="flex items-center space-x-2">
                <p>Bracket</p>
                <component
                  :is="CheckedIcon"
                  class="w-4 h-4 text-green-500"
                ></component>
              </div>
              <p class="font-bold text-black">R 134.00</p>
            </div>
            <div class="px-4 flex justify-between space-y-2">
              <div class="flex items-center space-x-2">
                <p>Package</p>
                <component
                  :is="CheckedIcon"
                  class="w-4 h-4 text-green-500"
                ></component>
              </div>
              <p class="font-bold text-black">R 30.00</p>
            </div>
          </div>
        </article>

        <article class="mb-10 border border-brand-orange-1">
          <div class="flex items-center justify-between px-4">
            <h2 class="my-2 text-3xl font-bold">Platform - monthly</h2>
            <p class="font-bold text-black">R 280.00</p>
          </div>

          <div class="py-4 border-t">
            <div class="px-4 space-y-2">
              <div class="flex items-center space-x-2">
                <p>FireAlert Web Application</p>
                <component
                  :is="CheckedIcon"
                  class="w-4 h-4 text-green-500"
                ></component>
              </div>

              <div class="flex items-center space-x-2">
                <p>FireAlert Mobile Application</p>
                <component
                  :is="CheckedIcon"
                  class="w-4 h-4 text-green-500"
                ></component>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import CheckedIcon from "../components/icons/CheckedIcon.vue";
</script>
