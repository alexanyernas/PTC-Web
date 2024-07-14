<script setup lang="ts">
// Import Vue Functions
import { useRouter } from 'vue-router';

// Import Assets
import girl from '@/assets/images/girl.png'

const router = useRouter();
</script>

<template>
    <v-container fluid class="hero-section bg-primary-color px-12">
        <v-row align="center" no-gutters>
            <v-col cols="12" lg="6">
                <h1 class="mb-12 text-h2 font-weight-bold dark-blue-color">Proceso de Tinte en el Cabello</h1>
                <p class="text-white mb-4">Descubre los procesos de tinte capilar, abordando desde la <br>estructura del cabello hasta la clasificación de los tintes según su procedencia.</p>
                <v-btn 
                    rounded
                    size="x-large"
                    color="white"
                    variant="tonal"
                    text="Iniciar Curso"
                    @click="router.push({
                        name: 'CurrentLession'
                    })"
                />
            </v-col>
            <v-col cols="12" lg="5">
                <v-img :lazy-src="girl" :src="girl" alt="Girl" cover class="image-hero">
                    <template v-slot:placeholder>
                        <div class="d-flex align-center justify-center fill-height">
                            <v-progress-circular
                                color="grey-lighten-4"
                                indeterminate
                            ></v-progress-circular>
                        </div>
                    </template>
                </v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.hero-section {
    border-radius: 0 0 130px 0;
}

.image-hero {
    margin-bottom: -17px;
}

@media screen and (width <= 768px) {
    .image-hero {
        margin-bottom: -15px;
    }
}
</style>