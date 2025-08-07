<script setup>
defineProps({ maxWidth: { type: String, default: "384px" } });
</script>

<template>
  <v-card class="tw:m-auto!" :style="`max-width: ${maxWidth}`">
    <slot />
  </v-card>
</template>
