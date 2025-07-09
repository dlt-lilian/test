<script setup lang="ts">

import Header from "~/components/ui/layouts/Header.vue";
import Footer from "~/components/ui/layouts/Footer.vue";
</script>

<template>
    <Header />
      <slot />
    <Footer />
</template>