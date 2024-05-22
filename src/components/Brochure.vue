<template>
  <section id="about" class="py-12 bg-brand-blue-1">
    <div class="max-w-xl mx-auto px-4 text-center">
      <img class="mx-auto mb-6 w-12 h-12" src="../assets/logo.png" alt="Logo" />
      <p class="mb-6 text-white">
        Firealert is a mobile fire detection tool, that allows your business
        compete monitoring over all your mobile business assets including
        commercial vehicles, mining vehicles, machinery, boats, buses or any
        other mobile assets.
      </p>

      <button
        @click="downloadBrochure"
        class="py-2 px-4 bg-white round rounded-md hover:bg-brand-orange-1 hover:text-white"
      >
        Download Brochure
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const downloadBrochure = () => {
  const fileName = "FIREALERT-BROCHURE-2024";
  const url = `pdf/FIREALERT-BROCHURE-2024.pdf`;
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>
