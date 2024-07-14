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
    if (!lessionStore.getCurretnLessionTitle)
        router.push({
            name: 'Home'
        });
});
</script>

<template>
    <div fluid class="h-screen bg-tertiary-color">
        <current-lession-header />
    </div>
</template>