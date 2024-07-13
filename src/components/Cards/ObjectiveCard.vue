<script setup lang="ts">
defineProps<{
    title: string;
    paragraph: string;
    color: string;
}>();
</script>

<template>
    <v-sheet
        rounded
        width="300"
        height="300"
        elevation="1"
        class="px-4"
    >
        <v-row justify="center" class="text-center">
            <v-col cols="12">
                <v-sheet width="90" height="90" rounded :color="color" class="mx-auto" />
            </v-col>
            <v-col cols="12">
                <p class="font-weight-bold">{{ title }}</p>
            </v-col>
            <v-col cols="12">
                <p class="text-caption grey-color">{{ paragraph }}</p>
            </v-col>
        </v-row>
    </v-sheet>
</template>