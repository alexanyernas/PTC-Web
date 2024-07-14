// Import Pinia Functions
import { createPinia, defineStore } from 'pinia';

// Import Models
import { LessionItemModel } from '@/models';

// Import Inits
import { initialStateLessionItem } from './init';

const pinia = createPinia();

export const useLessionStore = defineStore('lession', {
    state: () => ({
        currentLession: <LessionItemModel>({...initialStateLessionItem})
    }),
    actions: {
        setCurrentLession(payload: LessionItemModel) {
            this.currentLession = {...payload};
        }
    },
    getters: {
        getCurrentLessionTitle: (state) => state.currentLession.title,
        getCurrentLessionVideo: (state) => state.currentLession.video
    }
});

export default pinia;