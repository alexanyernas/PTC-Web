<script setup lang="ts">
// Import Vue Functions
import { useRouter } from 'vue-router';

// Import Vue Components
import LessionItemMenu from './LessionItemMenu.vue';

// Import Data
import { lessionItems } from '@/data/lessionItems';

const router = useRouter();
</script>

<template>
    <v-navigation-drawer 
        permanent 
        border="0" 
        width="360"
        class="pt-2" 
        location="left" 
    >
        <template v-slot:prepend>
            <v-btn 
                rounded="0"
                class="ml-2"
                color="#49BBBD"
                icon="mdi-keyboard-backspace"
                @click="router.push({
                    name: 'Home'
                })"
            />
        </template>
        <v-list nav density="compact">
            <lession-item-menu 
                :key="index"
                v-for="(item, index) in lessionItems" 
                :title="item.title"
                :color="item.color"
                :value="item.value"
            />
        </v-list>
    </v-navigation-drawer>
</template>