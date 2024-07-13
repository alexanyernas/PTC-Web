<script setup lang="ts">
const items = [
    { title: 'Lorem Ipsum', icon: 'mdi-account', to: 'Profile' },
    { title: 'Lorem Ipsum', icon: 'mdi-lock',    to: 'UpdatePassword' }
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