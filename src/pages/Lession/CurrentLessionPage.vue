<script setup lang="ts">
// Import Vue Functions
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useLessionStore } from '@/plugins/pinia';

// Import Vue Components
import CurrentLessionHeader from '@/components/Headers/CurrentLessionHeader.vue';

const router = useRouter();
const lessionStore = useLessionStore();

onMounted(() => {
    if (!lessionStore.getCurrentLessionTitle)
        router.push({
            name: 'Home'
        });
});
</script>

<template>
    <div fluid class="h-screen bg-tertiary-color">
        <current-lession-header />
        <v-container>
            <v-row justify="center">
                <v-col class="text-center" cols="12" v-if="lessionStore.getCurrentLessionVideo && lessionStore.getCurrentLessionVideo.length">
                    <div v-html="lessionStore.getCurrentLessionVideo"></div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>