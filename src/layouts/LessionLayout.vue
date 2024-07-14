<script setup lang="ts">
// Import Vue Components
import LessionMenu from '@/components/Navigation/LessionMenu.vue';
</script>

<template>
    <v-layout>
        <v-main class="h-screen">
            <lession-menu />
            <router-view />
        </v-main>
    </v-layout>
</template>