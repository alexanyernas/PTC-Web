<script setup lang="ts">
// Import Vue Components
import HomeMenu from '@/components/Navigation/HomeMenu.vue';
</script>

<template>
    <v-layout>
        <home-menu />
        <v-main>
            <router-view />
        </v-main>
    </v-layout>
</template>