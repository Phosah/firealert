<template>
  <nav class="text-sm md:text-base bg-brand-blue-1">
    <div
      class="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between text-white"
    >
      <router-link to="/">
        <img class="w-16 h-16" src="../../assets/logo.png" alt="Logo" />
      </router-link>

      <ul class="ml-2 hidden md:flex items-center gap-2 md:gap-6">
        <a class="hover:text-brand-orange-2" href="/#about"><li>About</li></a>
        <a class="hover:text-brand-orange-2" href="#application"
          ><li>Application</li></a
        >
        <a class="hover:text-brand-orange-2" href="/#work"
          ><li>How does it work?</li></a
        >
        <a class="hover:text-brand-orange-2" href="/#features"
          ><li>Features</li></a
        >
        <router-link to="/pricing">
          <li class="hover:text-brand-orange-2">Pricing</li>
        </router-link>
      </ul>

      <div class="ml-2 hidden md:flex items-center gap-6">
        <button
          class="py-3 px-2 lg:px-4 rounded-md bg-white text-black hover:bg-brand-orange-1 hover:text-white"
        >
          Download
        </button>
        <a href="https://v2.firealert.mobi/login">
          <button
            class="py-3 px-2 lg:px-4 rounded-md bg-brand-orange-2 text-white hover:bg-brand-orange-1"
          >
            Log in
          </button>
        </a>
      </div>
    </div>
  </nav>
</template>

<style>
.firealert-active-link {
  color: rgb(202 138 4);
}
</style>
