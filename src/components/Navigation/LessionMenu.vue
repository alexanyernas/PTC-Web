<script setup lang="ts">
// Import Vue Functions
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import { useRouter } from 'vue-router';
import { useLessionStore } from '@/plugins/pinia';

// Import Vue Components
import LessionItemMenu from './LessionItemMenu.vue';

// Import Data
import { lessionItems } from '@/data/lessionItems';
import { LessionItemModel } from '@/models';

const { mdAndDown } = useDisplay();
const router = useRouter();
const lessionStore = useLessionStore();
const drawer = ref<boolean>(false);

const handleSetCurrentLession = (value: LessionItemModel) => {
    lessionStore.setCurrentLession(value);
    drawer.value = !drawer.value;
}
</script>

<template>
    <v-navigation-drawer
        v-if="!mdAndDown" 
        permanent 
        border="0" 
        width="360"
        class="pt-2" 
        location="left" 
    >
        <template v-slot:prepend>
            <div class="d-flex align-center">
                <v-btn 
                    rounded="0"
                    class="mx-3"
                    color="#49BBBD"
                    icon="mdi-keyboard-backspace"
                    @click="router.push({
                        name: 'Home'
                    })"
                />
                <p>Contenido</p>
            </div>
        </template>
        <v-list nav density="comfortable">
            <lession-item-menu 
                v-for="item in lessionItems" 
                :key="item.id"
                :value="item.id"
                :title="item.title"
                :color="item.color"
                @click="lessionStore.setCurrentLession(item)"
            />
        </v-list>
    </v-navigation-drawer>

    <v-app-bar v-else color="#252641">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-navigation-drawer
        temporary
        v-model="drawer"
        density="comfortable"
        :class="drawer ? 'w-100' : 'w-0'"
    >
        <v-list nav>
            <lession-item-menu 
                v-for="item in lessionItems" 
                :key="item.id"
                :value="item.id"
                :title="item.title"
                :color="item.color"
                @click="handleSetCurrentLession(item)"
            />
        </v-list>
    </v-navigation-drawer>
</template>