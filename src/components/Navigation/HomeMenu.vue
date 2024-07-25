<script setup lang="ts">
// Import Vue Functions
import { useDisplay } from 'vuetify';

// Import Vue Components
// import SettingsMenu from '@/components/Navigation/SettingsMenu.vue';

// Import Assets
import ucv from '@/assets/images/logos/ucv.png';
import farmacia from '@/assets/images/logos/farmacia.png';
import ciencias from '@/assets/images/logos/ciencias.png';
import computacion from '@/assets/images/logos/computacion.png';

const { mdAndDown } = useDisplay();
</script>

<template>
    <v-app-bar elevation="0" color="#49BBBD" class="pt-2">
        <v-row justify="space-between" align="center">
            <v-col cols="3">
                <div class="d-flex">
                    <v-img v-if="!mdAndDown" :src="ucv" alt="UCV" height="60" />
                    <v-img v-if="!mdAndDown" :src="farmacia" alt="Facultad de Farmacia" height="60" />
                    <v-img v-if="!mdAndDown" :src="ciencias" alt="Facultad de Ciencias" height="60" />
                    <v-img v-if="!mdAndDown" :src="computacion" alt="Escuela de Computacion" height="60" />
                </div>
            </v-col>
            <v-col :cols="mdAndDown ? 6 : 2">
                <div class="d-flex justify-center align-center">
                    <p class="mr-2 text-white">Bienvenido</p>
                    <!-- <v-icon icon="mdi-menu-down mb-1" color="#FFF"/> -->
                </div>
                <!-- <settings-menu /> -->
            </v-col>
        </v-row>
    </v-app-bar>
</template>