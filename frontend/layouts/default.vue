<script setup lang="ts">
import Text from "~/components/ui/Text.vue";
</script>

<template>
  <div class="mx-10">
  <header class="px-10 py-10">
    <Text>Header</Text>
  </header>

  <slot />

  <footer class="px-10 py-10">
    <Text>Header</Text>
  </footer>
  </div>
</template>