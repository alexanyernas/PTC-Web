<script setup lang="ts">
defineProps<{
    title: string;
    size: number;
    image: string;
}>();

const requireImage = (link: string) => {
    return new URL(`/src/assets/images/${link}`, import.meta.url).href;
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
            <p class="text-caption">{{ size }} clases</p>
        </v-card-text>
    </v-card>
</template>