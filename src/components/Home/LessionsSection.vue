<script setup lang="ts">
// Import Vue Components
import LessionCard from '@/components/Cards/LessionCard.vue';

interface Lession {
    title: string;
    image: string;
    index: number;
    size: number;
}

const lessions = <Lession[]>[
    {
        title: 'Estructura y Funciones del Cabello', 
        image: '1-min.jpg',
        size: 3,
        index: 0
        
    },
    {
        title: 'Aplicación de los Tintes Capilares', 
        image: '2-min.jpg',
        size: 3,
        index: 1
    },
    {
        title: 'Clasificación de los Tintes Capilares', 
        image: '3-min.jpg',
        size: 6,
        index: 2
    }
];
</script>

<template>
    <v-container>
        <v-row justify="space-around" align="center">
            <v-col cols="12">
                <p class="text-center font-weight-bold text-h5 dark-blue-color">¡Conoce todas nuestras lecciones!</p>
            </v-col>
            <v-col cols="12" lg="3" v-for="(lession, index) in lessions" :key="index">
                <lession-card 
                    class="mx-auto"
                    :size="lession.size"
                    :title="lession.title"
                    :image="lession.image"
                    :index="lession.index"
                />
            </v-col>
        </v-row>
    </v-container>
</template>