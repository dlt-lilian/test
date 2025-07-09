<script setup lang="ts">
import Text from "~/components/ui/Text.vue";
import type { TypeContent } from "~/types/content";

const { data: home } = await useAsyncData(() =>
    queryCollection('content').path('/landing').first()
) as { data: Ref<TypeContent | null> };

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
});

</script>

<template>
  <main class="mx-32 my-10 space-y-10">
  <Text as="h1"
        size="lg"
        weight="semibold">
    {{ home?.title }}
  </Text>

  <Text color="green"
        size="lg"
        weight="semibold"
        textAlign="center">
    {{ home?.description }}
  </Text>
  </main>
</template>