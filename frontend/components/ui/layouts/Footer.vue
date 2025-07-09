<script setup lang="ts">
import Text from "~/components/ui/Text.vue";
import type { TypeContent } from "~/types/content";

const { data: footer } = await useAsyncData(() =>
    queryCollection('content').path('/layouts/footer').first()
) as { data: Ref<TypeContent | null> };
</script>

<template>
  <footer class="px-10 py-10 bg-slate grid grid-cols-3 gap-">

    <!-- Navigation gauche -->
    <nav>
      <a
          v-for="(text, index) in footer?.body.left.text"
          :key="index"
          :href="footer?.body.left.link[index]"
          class="hover:text-blue-600 transition-colors"
      >
        <Text>{{ text }}</Text>
      </a>
    </nav>

    <!-- Navigation centrale -->
    <nav>
      <a
          v-for="(text, index) in footer?.body.center.text"
          :key="index"
          :href="footer?.body.center.link[index]"
          class="hover:text-blue-600 transition-colors"
      >
        <Text>{{ text }}</Text>
      </a>
    </nav>

    <nav>
      <a
          v-for="(text, index) in footer?.body.center.text"
          :key="index"
          :href="footer?.body.center.link[index]"
          class="hover:text-blue-600 transition-colors"
      >
        <Text>{{ text }}</Text>
      </a>
    </nav>
  </footer>
</template>
