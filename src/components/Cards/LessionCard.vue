<script setup lang="ts">
// Import Vue Functions
import { useRouter } from 'vue-router';
import { useLessionStore } from '@/plugins/pinia';

// Import Data
import { lessionItems } from '@/data/lessionItems';

defineProps<{
    title: string;
    image: string;
    size: number;
    index: number;
}>();

const requireImage = (link: string) => {
    return new URL(`/src/assets/images/${link}`, import.meta.url).href;
}

const router = useRouter();
const lessionStore = useLessionStore();

const handleSetCurrentLession = (position: number) => {
    lessionStore.setCurrentLession(lessionItems[position].content[0]);
    router.push({
        name: 'CurrentLession'
    });
}
</script>

<template>
    <v-card 
        width="300" 
        elevation="1" 
    >
        <v-img
            cover
            height="200"
            :src="requireImage(image)"
        />
        <v-card-text class="font-weight-bold">
            {{ title }}
            <p class="text-caption">{{ size }} lecciones</p>
        </v-card-text>

        <v-card-actions>
            <v-btn
                text="Visitar"
                variant="text"
                @click="handleSetCurrentLession(index)"
            />
        </v-card-actions>
    </v-card>
</template>