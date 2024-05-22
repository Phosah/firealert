<script setup lang="ts"></script>

<template>
  <section class="max-w-7xl mx-auto px-4">
    <div class="md:flex items-center gap-6 py-12 bg-white">
      <div class="hidden md:block flex-1">
        <img src="../assets/compatible-hardware-photo.jpg" alt="Hardware" />
      </div>
      <div class="flex-1">
        <h2 class="mb-6 text-3xl font-bold">Compatible hardware</h2>
        <p class="mb-6 text-lg font-bold">
          Fire Alert offers app compatible hardware, consisting of wireless
          control panels, thermal connectors, smoke detectors and relay
          interfaces to be installed in the vehicle or machinery.
        </p>
        <p>
          The fire alert controls panel is equipped with a full vehicle
          management system to monitor engine temperature, water levels and oil
          pressure via the app. There is also an additionial input that can be
          used for the optional fire suppression system pressure monitoring.
        </p>
      </div>
      <div class="block md:hidden flex-1">
        <img src="../assets/compatible-hardware-photo.png" alt="Hardware" />
      </div>
    </div>
  </section>
  <aside class="relative py-12 px-4 text-center h-60">
    <img
      class="absolute top-0 left-0 h-full w-full object-cover"
      src="../assets/bus.jpg"
      alt="Bus"
    />
    <div class="max-w-xl mx-auto flex items-center h-full text-white font-bold">
      <div class="relative z-10">
        <p>
          The system is equipped with three outputs for suppression agent
          release, siren output and engine cut. All functionality is programmed
          and monitored by the fire alert app.
        </p>
      </div>
    </div>
  </aside>
</template>
