<script setup lang="ts">
  const { page: topic } = await useContent()

  const router = useRouter();

  const goBack = () => {
    router.back()
  }
</script>

<template>
  <div class="flex flex-col">
      <div
          class="fixed top-0 left-0 right-0 z-10 flex items-center justify-between py-4 px-2 md:px-6 bg-white  h-[10vh]">
          <button @click="goBack" class="text-bg-custom-bg font-bold py-2 px-4 rounded">
              ← Volver
          </button>
          <img src="~/assets/images/logo_text.png" class="h-20" />

      </div>
      <ContentRenderer :value="topic" />
  </div>
</template>