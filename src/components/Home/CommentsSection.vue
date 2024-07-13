<script setup lang="ts">
// Vue Components
import CommentCard from '@/components/Cards/CommentCard.vue';
</script>

<template>
    <v-container>
        <v-row align="center">
            <v-col cols="6">
                <p class="font-weight-bold text-h3 dark-blue-color">Opiniones de nuestros estudiantes</p>
            </v-col>
            <v-col cols="12" lg="6">
                <comment-card />
            </v-col>
        </v-row>
    </v-container>
</template>