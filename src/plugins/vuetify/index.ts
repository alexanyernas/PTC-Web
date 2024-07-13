import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

const customTheme = {
  dark: false,
  colors: {
    error: '#FCDDB4'
  }
}

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi'
    },
    theme: {
      defaultTheme: 'customTheme',
      themes: {
        customTheme
      }
    }
});
  
export default vuetify;