<script setup lang="ts">
// Import Vue Functions
import { onMounted } from 'vue';
import { useDisplay } from 'vuetify';
import { useRouter } from 'vue-router';
import { useLessionStore } from '@/plugins/pinia';
import { requireImage } from '@/utils/requireImage';

// Import Vue Components
import CurrentLessionHeader from '@/components/Headers/CurrentLessionHeader.vue';

const { mdAndDown } = useDisplay();
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
    <div class="bg-tertiary-color overflow-y-auto h-screen">
        <current-lession-header />
        <v-container :class="!mdAndDown ? 'px-12' : ''">
            <v-row justify="center">
                <v-col class="text-center" cols="12" v-if="lessionStore.getCurrentLessionVideo && lessionStore.getCurrentLessionVideo.length">
                    <div v-html="lessionStore.getCurrentLessionVideo"></div>
                </v-col>
                <v-col cols="12" v-if="lessionStore.getCurrentLessionContent && lessionStore.getCurrentLessionContent.length">
                    <div v-for="(section, index) in lessionStore.getCurrentLessionContent" :key="index">
                        <div v-html="section"></div>
                    </div>
                </v-col>
                <v-col cols="12" v-if="lessionStore.getCurrentLessionImages && lessionStore.getCurrentLessionImages.length">
                    <div v-for="(image, index) in lessionStore.getCurrentLessionImages" :key="index">
                        <p class="text-uppercase text-center secondary-color mb-4 font-weight-bold text-h6">{{ image.title }}</p>
                        <v-img 
                            class="mb-6"
                            :alt="`${image}-${index}`" 
                            :src="requireImage(image.src)"
                            :class="!mdAndDown && 'h-50 w-50 mx-auto'"
                        />
                    </div>
                </v-col>
                <v-col cols="12" v-if="lessionStore.getCurrentLessionReferences && lessionStore.getCurrentLessionReferences.length">
                    <p class="text-uppercase secondary-color mb-4 font-weight-bold">Referencias</p>
                    <div v-for="(section, index) in lessionStore.getCurrentLessionReferences" :key="index">
                        <ul class="px-12">
                            <div v-html="section"></div>
                        </ul>
                    </div>
            </v-col>
            </v-row>
        </v-container>
    </div>
</template>