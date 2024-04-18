<script setup>
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
</script>


<template>
  <section>
    <div class="flex flex-col">
      <div class="fixed top-0 left-0 right-0 z-10 flex items-center justify-between py-4 px-2 md:px-6 bg-white h-[10vh]">
        <button @click="goBack" class="text-bg-custom-bg font-bold py-2 px-4 rounded">
          ← Volver
        </button>
        <img src="~/assets/images/logo_text.png" class="h-20" />
      </div>
      <div class="flex flex-col items-center justify-center h-[90vh]">
        <ul class="p-4">
          <ContentList path="/lyrics" v-slot="{ list }">
            <div v-for="lyric in list" :key="lyric._path" class="mb-4">
              <NuxtLink 
                :to="`/lyrics/${lyric.slug}`" 
                class="block p-3 w-full text-lg font-medium text-white bg-[#161E29] rounded-lg shadow hover:bg-white hover:text-[#161E29] transition-colors duration-200 text-center"
              >
              {{ lyric.title }}
            </NuxtLink>
            </div>
          </ContentList>
        </ul>
      </div>
    </div>
  </section>
</template>
