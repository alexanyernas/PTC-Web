<script setup lang="ts">
// Import Assets
import girl from '@/assets/images/girl.png'
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
                />
            </v-col>
            <v-col cols="12" lg="5">
                <v-img :src="girl" alt="Girl" cover class="image-hero" />
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.hero-section {
    border-radius: 0 0 150px 0;
}

.image-hero {
    margin-bottom: -17px;
}
</style>