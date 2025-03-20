<script setup lang="ts">
const { page: doc } = await useContent()
const router = useRouter();
const isProjectorMode = ref(false);

const goBack = () => {
  router.back();
};

const toggleMode = () => {
  isProjectorMode.value = !isProjectorMode.value;
};
</script>

<template>
  <section :class="{ 'bg-black': isProjectorMode }">
    <div class="min-h-screen flex flex-col items-center" :class="{ 'px-4': !isProjectorMode }">
      <div class="fixed top-0 left-0 right-0 z-10 flex items-center justify-between h-[10vh] py-4 px-2 md:px-6"
        :class="{ 'bg-white': !isProjectorMode, 'bg-black': isProjectorMode }">
        <div class="flex gap-4">
          <button @click="goBack" class="text-bg-custom-bg font-bold py-2 px-4 rounded"
            :class="{ 'text-white': isProjectorMode }">
            ← Volver
          </button>
          <button @click="toggleMode" class="font-bold py-2 px-4 rounded border"
            :class="{ 'text-white border-white': isProjectorMode, 'text-bg-custom-bg border-bg-custom-bg': !isProjectorMode }">
            {{ isProjectorMode ? '📱 Normal' : '📽️ Proyector' }}
          </button>
        </div>
        <img src="~/assets/images/logo_text.png" class="h-20" v-if="!isProjectorMode" />
      </div>
      <div v-if="doc" :class="{
        'max-w-2xl': !isProjectorMode,
        'max-w-[90vw]': isProjectorMode
      }" class="w-full md:mt-32 mt-20">
        <h1 class="text-3xl font-bold text-center my-6" :class="{ 'text-white': isProjectorMode }">
          {{ doc.title }}
        </h1>
        <div class="rounded-lg leading-relaxed mb-20" :class="{
          'bg-white shadow-lg text-black text-wrap p-6': !isProjectorMode,
          'bg-black text-white text-8xl font-bold text-balance p-2': isProjectorMode
        }" :style="{
            fontFamily: 'Courier New, Courier, monospace',
            whiteSpace: 'pre-line'
          }">
          <ContentRenderer :value="doc" />
        </div>
      </div>
    </div>
  </section>
</template>