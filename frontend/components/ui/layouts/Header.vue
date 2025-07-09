<script setup lang="ts">
import Text from "~/components/ui/Text.vue";
import type { TypeContent } from "~/types/content";

const { data: header } = await useAsyncData(() =>
    queryCollection('content').path('/layouts/header').first()
) as { data: Ref<TypeContent | null> };
</script>

<template>
  <header class="px-10 py-8 shadow-md flex items-center justify-between">
    <!-- Logo -->
    <a :href="header?.body.link">
      <img
          class="w-16"
          :src="header?.body.logo"
          :alt="header?.body.title"
      />
    </a>

    <!-- Navigation centrale -->
    <nav class="flex space-x-4">
      <a
          v-for="(text, index) in header?.body.center.text"
          :key="index"
          :href="header?.body.center.link[index]"
          class="hover:text-blue-600 transition-colors"
      >
        <Text>{{ text }}</Text>
      </a>
    </nav>

    <!-- Section droite avec icônes -->
    <div class="flex space-x-4">
      <a
          v-for="(text, index) in header?.body.right.text"
          :key="index"
          :href="header?.body.right.link[index]"
          class="hover:text-blue-600 transition-colors flex items-center space-x-2"
      >
        <Icon
            v-if="header?.body.right.icon"
            :name="header?.body.right.icon[index]"
        />
        <Text>{{ text }}</Text>
      </a>
    </div>
  </header>
</template>