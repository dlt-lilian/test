<script setup>
import Button from "~/components/ui/Button.vue";
import Text from "~/components/ui/Text.vue";
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <Text as="h1" size="lg" weight="semibold" colFull="true">
      Documentation - Composant Button
    </Text>
    <!-- Couleurs -->
    <div class="space-y-2">
      <Text as="h1" size="lg" weight="semibold">
        Couleurs :
      </Text>
      <div class="flex gap-4">
        <Button color="primary">Primary (default)</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="danger">Danger</Button>
        <Button color="ghost">Ghost</Button>
      </div>
    </div>

    <!-- Tailles -->
    <div class="space-y-2">
      <Text as="h1" size="lg" weight="semibold">
        Tailles :
      </Text>         <div class="flex gap-4">
        <Button size="sm">sm</Button>
        <Button size="md">md (default)</Button>
        <Button size="lg">lg</Button>
      </div>
    </div>

    <!-- Icônes -->
    <div class="space-y-2">
      <Text as="h1" size="lg" weight="semibold">
        Icônes :
      </Text>
      <div class="flex gap-4">
        <Button icon="add">add</Button>
        <Button variant="danger" icon="delete">delete</Button>
        <Button variant="secondary" icon="setting">setting</Button>
        <Button variant="ghost" icon="arrow">arrow</Button>
      </div>
    </div>

    <!-- États -->
    <div class="space-y-2">
      <Text as="h1" size="lg" weight="semibold">
        États :
      </Text>
      <div class="flex gap-4">
        <Button :disabled="true">Désactivé</Button>
      </div>
    </div>

    <!-- Pleine largeur -->
    <div class="space-y-2">
      <Text as="h1" size="lg" weight="semibold">
        Pleine largeur :
      </Text>
      <Button :full-width="true">Bouton pleine largeur</Button>
      <Button>false (default)</Button>
    </div>

    <!-- Colonne pleine largeur -->
    <div class="space-y-2">
      <Text as="h1" size="lg" weight="semibold">
        Colonne largeur :
      </Text>
      <div class="grid grid-cols-4 gap-4">
        <Button :col-full="true">true</Button>
        <Button>false (default)</Button>
      </div>
    </div>
  </div>
</template>
