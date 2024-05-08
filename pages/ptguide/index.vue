  <script setup lang="ts">
  const { page: data } = await useContent()


  const router = useRouter();

  const goBack = () => {
    router.back()
  }
</script>

  <template>
    <div class="flex flex-col min-h-screen ">
      <div
        class="fixed top-0 left-0 right-0 z-10 flex items-center justify-between py-4 px-2 md:px-6 bg-white h-[10vh]">
        <button @click="goBack" class="text-bg-custom-bg font-bold py-2 px-4 rounded">
          Volver
        </button>
        <img src="~/assets/images/logo_text.png" class="h-20" />
      </div>
      <div class="flex flex-col items-center justify-center flex-1 mt-[10vh]">
        <ul class="p-4 w-full h-full overflow-auto">
          <ContentList path="/ptguide" v-slot="{ list }">
            <div v-for="guide in list" :key="guide._path" class="mb-4">
              <NuxtLink :to="`/ptguide/${guide.slug}`"
                class="block p-3 w-full text-lg font-medium text-white bg-[#161E29] rounded-lg shadow text-center">
                {{ guide.title }}
              </NuxtLink>
            </div>
          </ContentList>
        </ul>
      </div>
    </div>
  </template>