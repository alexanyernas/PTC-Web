<script setup lang="ts">
defineProps<{
  title: string;
  color: string;
  value: string;
  duration?: number;
}>();
</script>

<template>
  <v-list-item
    :title="title" 
    :value="value" 
    :base-color="color"
    prepend-icon="mdi-book-open-page-variant" 
  />
</template>