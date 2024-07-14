<script setup lang="ts">
// Import Vue Components
import ObjectiveCard from '@/components/Cards/ObjectiveCard.vue';

interface Objective {
    title: string;
    paragraph: string;
    color: string;
}

const objectives = <Objective[]>[
    {
        title: 'Explorar las Aplicaciones de los Tintes Capilares', 
        paragraph: 'Vegetales, minerales y sintéticos, incluyendo ejemplos específicos de cada tipo.', 
        color: '#49BBBD4D'
    },
    {
        title: 'Analizar las Características de los Tintes Capilares', 
        paragraph: 'Formulación química y sus efectos sobre el cabello y el cuero cabelludo.', 
        color: '#5B72EE4D'
    },
    {
        title: 'Diferenciar entre los Distintos Tipos de Tintes Capilares', 
        paragraph: 'Comprender sus ventajas, desventajas y usos recomendados en el cabello.', 
        color: '#9DCCFF4D'
    }
];
</script>

<template>
    <v-container>
        <v-row justify="space-around" align="center">
            <v-col cols="12" lg="3" v-for="(objective, index) in objectives" :key="index">
                <objective-card 
                    class="mx-auto"
                    :title="objective.title"
                    :color="objective.color"
                    :paragraph="objective.paragraph"
                />
            </v-col>
        </v-row>
    </v-container>
</template>