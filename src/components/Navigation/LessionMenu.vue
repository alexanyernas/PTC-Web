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
        width="380"
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
                <p>Lecciones</p>
            </div>
        </template>
        <v-list nav density="compact">
            <div v-for="item in lessionItems" :key="item.id" class="my-4">
                <p class="ml-2 mb-1 font-weight-bold dark-blue-color">{{ item.title }}</p>
                <lession-item-menu    
                    v-for="lession in item.content" :key="lession.id"                 
                    :value="lession.id"
                    :title="lession.title"
                    :color="lession.color"
                    @click="lessionStore.setCurrentLession(lession)"
                />
            </div>
        </v-list>

        <template v-slot:append>
            <div class="px-2 py-4 bg-dark-blue" >
                <p class="text-center text-white text-caption">&copy; {{ new Date().getFullYear() }} Universidad Central de Venezuela (UCV)</p>
            </div>
        </template>
    </v-navigation-drawer>

    <v-app-bar v-else color="#252641">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
        <v-spacer></v-spacer>
        <v-icon variant="text" icon="mdi-undo" class="mx-4" @click="router.push({
            name: 'Home'
        })" />
    </v-app-bar>

    <v-navigation-drawer
        temporary
        v-model="drawer"
        density="comfortable"
        :class="drawer ? 'w-100' : 'w-0'"
    >
        <v-list nav density="compact">
            <div v-for="item in lessionItems" :key="item.id" class="my-4">
                <p class="ml-2 mb-1 font-weight-bold dark-blue-color">{{ item.title }}</p>
                <lession-item-menu    
                    v-for="lession in item.content" :key="lession.id"                 
                    :value="lession.id"
                    :title="lession.title"
                    :color="lession.color"
                    @click="handleSetCurrentLession(lession)"
                />
            </div>
        </v-list>

        <template v-slot:append>
            <div class="px-2 py-4 bg-dark-blue" >
                <p class="text-center text-white text-caption">&copy; {{ new Date().getFullYear() }} Universidad Central de Venezuela (UCV).</p>
            </div>
        </template>
    </v-navigation-drawer>
</template>