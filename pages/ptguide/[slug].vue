<script setup lang="ts">
const { page: doc } = await useContent()

const router = useRouter();
const goBack = () => {
  router.back();
};
</script>

<template>
  <section>
    <div class="min-h-screen flex flex-col items-center px-4">
      <div
        class="fixed top-0 left-0 right-0 z-10 flex items-center justify-between h-[10vh] py-4 px-2 md:px-6 bg-white">
        <button @click="goBack" class="text-bg-custom-bg font-bold py-2 px-4 rounded">
          Volver
        </button>
        <img src="~/assets/images/logo_text.png" class="h-20" />
      </div>
      <div v-if="doc" class="max-w-2xl w-full md:mt-32 mt-20">
        <h1 class="text-3xl font-bold text-center mt-6 mb-4">{{ doc.title }}</h1>
        <div class="mb-20" style="font-size: 1.2rem; white-space: pre-line;">
          <ContentRenderer :value="doc" />
        </div>
      </div>
    </div>
  </section>
</template>