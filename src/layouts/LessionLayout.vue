<script setup lang="ts">
// Import Vue Components
import LessionMenu from '@/components/Navigation/LessionMenu.vue';
</script>

<template>
    <v-layout>
        <v-main>
            <lession-menu />
            <router-view />
        </v-main>
    </v-layout>
</template>