<script setup lang="ts">
// Import Vue Functions
import { useLessionStore } from '@/plugins/pinia';

const lessionStore = useLessionStore();
</script>

<template>
    <div class="bg-primary-color pa-8">
        <p class="text-h5 text-white">{{ lessionStore.getCurrentLessionTitle }}</p>
    </div>
</template>