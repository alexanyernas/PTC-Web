<script setup lang="ts">
const items = [
    { title: 'Información', icon: 'mdi-information', to: 'Profile' },
];
</script>

<template>
    <v-menu activator="parent" transition="slide-y-transition">
        <v-list>
            <v-list-item
                :key="index"
                :value="index"
                :prepend-icon="item.icon"
                v-for="(item, index) in items"
            >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>