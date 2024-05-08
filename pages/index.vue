<template>
  <section class="flex flex-col justify-center items-center ">
    <img src="~/assets/images/logo_text.png" class="h-64" />

    <div class="mt-4">
      <NuxtLink to="/today/topic"
        class="block mb-4 p-3 w-full text-lg font-medium text-white bg-[#161E29] rounded-lg shadow duration-200 text-center">
        Tema del Día
      </NuxtLink>
      <NuxtLink to="/today/lyrics"
        class="block mb-4 p-3 w-full text-lg font-medium text-white bg-[#161E29] rounded-lg shadow duration-200 text-center">
        Canciones del Día
      </NuxtLink>
      <NuxtLink to="/lyrics"
        class="block p-3 mb-4 w-full text-lg font-medium text-white bg-[#161E29] rounded-lg shadow duration-200 text-center">
        Letras de Canciones
      </NuxtLink>
      <NuxtLink to="/ptguide"
        class="block p-3 w-full text-lg font-medium text-white bg-[#161E29] rounded-lg shadow hovetion-200 text-center">
        Guia de supervivencia
      </NuxtLink>
    </div>
  </section>
</template>
