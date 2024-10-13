<template>
  <Title>PawPlus - Home</Title>
  <div :class="['bg-amber-100', 'dark:bg-amber-950']">
    <div class="flex h-screen flex-col text-3xl content-center justify-center items-center">
      <h1 class="z-30 font-boska 2xl:text-9xl xl:text-9xl lg:text-8xl md:text-8xl sm:text-7xl text-7xl font-semibold dark:text-white">PawPlus</h1>
      
      
      <h3 class="font-boska font-light dark:text-white 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl text-xl">Pet care solutions for pet owners.</h3>


      <svg width="50" height="100" xmlns="http://www.w3.org/2000/svg" class="z-30 arrow 2xl:m-5 xl:m-5 lg:m-4 md:m-4 sm:m-3 m-3 stroke-black dark:stroke-white" @click="scrollDown">
        <path d="M25 0 L25 40 M10 20 L25 40 L40 20" stroke-width="1.5" fill="none"/>
      </svg>


      <!-- BACKGROUND SVG -->
      <div class="absolute inset-x-0 -top-20 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-60" aria-hidden="true">
          <div class="relative left-[calc(50%-15rem)] aspect-[1155/678] w-[46.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#b91c1c] to-[#f59e0b] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="absolute inset-x-0 top-[calc(80%-13rem)] z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]" aria-hidden="true">
          <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#b91c1c] to-[#f59e0b] opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <!-- Background SVG ENDS -->
    </div>
    <!-- <div>
      <span id="target" ref="target" class="size-20 block lg:mt-20 mt-10"></span>
    </div> -->


    <!-- FEATURES LIST -->

    <div id="target" ref="target" class="feature-set mt-3 lg:mt-5 2xl:max-w-4xl xl:max-w-4xl lg:max-w-2xl md:max-w-xl sm:max-w-md max-w-sm mx-auto dark:text-white">
      <!-- QUOTE -->
      <div class="quote flex flex-col items-center justify-center text-center border rounded-2xl border-black dark:border-white my-10 bg-amber-50 dark:bg-amber-900 shadow-2xl">
        <p class="font-general 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg text-base mt-10">
          Have a pet?
        </p>
        <h3 class="font-boska 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl text-3xl font-medium p-3">
          We've got you covered! 🐾
        </h3>
        <p class="font-general 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg text-base mx-10 mb-10">
          We're here to help you with all your pet care needs, from feeding, grooming, exercising, and ensuring their health. With our veterinary services, online store, and community forum, we've got you <u class="underline underline-offset-4 decoration-dotted decoration-amber-600 dark:decoration-amber-300">covered</u>.<Icon name="ph:arrow-down" class="dark:text-white text-black" />
        </p>
      </div>
      <!-- QUOTE ENDS -->

       <!-- QUOTE -->
       <div class="quote flex flex-col items-center justify-center text-center border rounded-2xl border-black dark:border-white my-10 bg-amber-50 dark:bg-amber-900 shadow-2xl">
        <p class="font-general text-2xl mt-10">
          Have a pet?
        </p>
        <h3 class="font-boska text-5xl font-medium p-3">
          We've got you covered! 🐾
        </h3>
        <p class="font-general text-2xl mx-10 mb-10">
          We're here to help you with all your pet care needs, from feeding, grooming, exercising, and ensuring their health. With our veterinary services, online store, and community forum, we've got you <u class="underline underline-offset-4 decoration-dotted decoration-amber-600 dark:decoration-amber-300">covered</u>.<Icon name="ph:arrow-down" class="dark:text-white text-black" />
        </p>
      </div>
      <!-- QUOTE ENDS -->
    </div>




    <p @click="colorMode.preference === 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark'">{{ colorMode.preference }}</p>
    


  </div>
</template>

<script lang="ts" setup>

const colorMode = useColorMode()

const scrollDown = () => {
  const target = document.getElementById('target')
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}


const target = ref(null)
const isElementVisible = useVisibilityState()
const elementVisible = useElementVisibility(target)

onMounted(() => {
  // Watch for visibility changes and update global state
  isElementVisible.value = false
  watch(elementVisible, (newVisibility) => {
    isElementVisible.value = newVisibility;
  });
})

</script>


<style>

@media (max-width: 640px) {
    .arrow {
      transform: scale(0.8); 
      transform-origin: center; 
    }
  }

</style>