<script setup lang="ts">
// Import Assets
import ucv from '@/assets/images/logos/ucv.png';
</script>

<template>
    <div class="container">
        <v-img :src="ucv" width="250" class="mx-auto mb-6" alt="UCV" />
        <p class="dark-blue-color text-center font-weight-bold text-h4">La página que intentas solicitar no está en el servidor (Error 404).</p>
    </div>
</template>

<style scoped>
    .container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>