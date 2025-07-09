
<script setup lang="ts">
import Text from "~/components/ui/Text.vue";
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <Text as="h1" size="lg" weight="semibold" colFull="true">
      Documentation - Composant Text
    </Text>

    <div class="space-y-2">

      <Text size="lg" weight="semibold">
        Balises sémantiques :
      </Text>

      <Text as="h1">
        h1
      </Text>

      <Text as="h2">
        h2
      </Text>
      <Text as="p">
        p (default)
      </Text>
      <Text as="span">
        span
      </Text>
    </div>

    <div class="space-y-2">

      <Text size="lg" weight="semibold">
        Tailles :
      </Text>

      <Text size="lg">
        lg
      </Text>

      <Text size="md">
        md (default)
      </Text>
      <Text size="sm">
        sm
      </Text>
    </div>

    <div class="space-y-2">

      <Text size="lg" weight="semibold">
        Épaisseur :
      </Text>

      <Text weight="semibold">
        semibold
      </Text>

      <Text weight="normal">
        normal (default)
      </Text>
    </div>

    <div class="space-y-2">

      <Text size="lg" weight="semibold">
        Couleur :
      </Text>

      <Text color="black">
        black
      </Text>

      <Text class="bg-black w-max px-2 rounded-md" color="white">
        blanc
      </Text>

      <Text color="gray">
        gray
      </Text>

      <Text color="green">
        green
      </Text>

      <Text color="red">
        red
      </Text>

    </div>

    <div class="space-y-2 grid grid-cols-2">

      <Text size="lg" weight="semibold" colFull="true">
        Colonne pleine largeur :
      </Text>

      <Text class="border rounded-md" colFull="true">
        true
      </Text>

      <Text class="border rounded-md">
        false (default)
      </Text>
    </div>

    <div class="space-y-2">

      <Text size="lg" weight="semibold" colFull="true">
        Alignement :
      </Text>

      <Text textAlign="left">
        left
      </Text>

      <Text textAlign="center">
        center
      </Text>

      <Text textAlign="right">
        right
      </Text>
    </div>

  </div>
</template>