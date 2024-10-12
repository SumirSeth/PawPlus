<template>
  <div class="dark:bg-amber-900">
    <!-- <div v-if="show" class="flex flex-row justify-evenly items-center dark:bg-amber-900 dark:text-white bg-amber-200 font-general font-thin">
      <NuxtLink to="/" class="text-2xl z-20 bg-transparent">PawPlus</NuxtLink>
      <NuxtLink to="/services" class="text-2xl z-20 bg-transparent">Services</NuxtLink>
    </div> -->
    <nav class="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-center">
      <div class="bg-black/5 dark:bg-white/5 backdrop-brightness-110 backdrop-blur-xl shadow-lg flex items-center space-x-6 px-6 py-2 rounded-2xl max-w-max">
        <div class="text-2xl font-general font-light dark:text-white"><NuxtLink to="/">PawPlus</NuxtLink></div>
        <ul class="flex space-x-6 font-general-italic font-normal dark:text-white items-center ">
          <li><NuxtLink to="/services" class="">services</NuxtLink></li>
          <li><NuxtLink to="/about" class="">about</NuxtLink></li>
        </ul>
      </div>
    </nav>
    <slot />
  </div>
</template>

<script lang="ts" setup>

const show = ref(true)

</script>

<style>

</style>