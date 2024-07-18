<script setup lang="ts">
// Import Vue Functions
import { useDisplay } from 'vuetify';

// Import Vue Components
// import SettingsMenu from '@/components/Navigation/SettingsMenu.vue';

// Import Assets
import logo from '@/assets/images/logo.png';

const { mdAndDown } = useDisplay();
</script>

<template>
    <v-app-bar elevation="0" color="#49BBBD" class="pt-2">
        <v-row justify="space-between" align="center">
            <v-col cols="2">
                <v-img v-if="!mdAndDown" :src="logo" alt="Logo" height="60" />
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