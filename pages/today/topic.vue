<script setup lang="ts">
const { page: topic } = await useContent()

const router = useRouter();

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="flex flex-col">
    <div class="fixed top-0 left-0 right-0 z-10 flex items-center justify-between py-4 px-2 md:px-6 bg-white  h-[10vh]">
      <button @click="goBack" class="text-bg-custom-bg font-bold py-2 px-4 rounded">
        ← Volver
      </button>
      <img src="~/assets/images/logo_text.png" class="h-20" />

    </div>
    <div class="flex flex-col items-center justify-center h-[90vh] mx-8">
      <h1 class="text-3xl font-bold text-center">{{ topic.topic }}</h1>
      <h1 class="text-xl font-bold text-center mt-2">{{ topic.cap }}</h1>
      <p class="text-lg my-2">{{ topic.rangeText }}</p>
      <div v-html="topic.mainText" class="my-2 text-center text-lg"></div>
    </div>
  </div>
</template>