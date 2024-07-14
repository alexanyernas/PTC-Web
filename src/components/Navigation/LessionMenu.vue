<script setup lang="ts">
// Import Vue Functions
import { useRouter } from 'vue-router';
import { useLessionStore } from '@/plugins/pinia';

// Import Vue Components
import LessionItemMenu from './LessionItemMenu.vue';

// Import Data
import { lessionItems } from '@/data/lessionItems';

const router = useRouter();
const lessionStore = useLessionStore();
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
                v-for="item in lessionItems" 
                :key="item.id"
                :title="item.title"
                :color="item.color"
                :value="item.value"
                @click="lessionStore.setCurrentLession(item)"
            />
        </v-list>
    </v-navigation-drawer>
</template>