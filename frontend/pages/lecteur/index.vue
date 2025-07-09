<script setup lang="ts">
import type {TypeContent} from "~/types/content";

const { data: book } = await useAsyncData(() =>
    queryCollection('content').path('/book').first()
) as { data: Ref<TypeContent | null> };

</script>

<template>
  <p>{{ book.title }}</p>

  <div class="grid grid-cols-2 mx-32">
    <div v-for="(page, index) in book.body.pages" :key="index">
      <img class="w-full" :src="page" :alt="'Image ' + index" />
    </div>
  </div>
</template>