<script setup lang="ts">
// Vue Components
import ObjectiveCard from '@/components/Cards/ObjectiveCard.vue';

interface Objective {
    title: string;
    paragraph: string;
    color: string;
}

const objectives = <Objective[]>[
    {
        title: 'Explorar las Aplicaciones de los Tintes Capilares', 
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.', 
        color: '#49BBBD4D'
    },
    {
        title: 'Analizar las Características de los Tintes Capilares', 
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.', 
        color: '#5B72EE4D'
    },
    {
        title: 'Diferenciar entre los Distintos Tipos de Tintes Capilares', 
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.', 
        color: '#9DCCFF4D'
    }
];
</script>

<template>
    <v-container>
        <v-row justify="space-around" align="center">
            <v-col cols="12" lg="3" v-for="(objective, index) in objectives" :key="index">
                <objective-card 
                    :title="objective.title"
                    :color="objective.color"
                    :paragraph="objective.paragraph"
                />
            </v-col>
        </v-row>
    </v-container>
</template>