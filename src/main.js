import './assets/main.css'
// import 'primevue/resources/themes/lara-light-indigo/theme.css'; // O tu tema personalizado
// import 'primevue/resources/primevue.min.css'; // Estilos básicos de PrimeVue
import 'primeicons/primeicons.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Lara from '@primevue/themes/lara'
import Nora from '@primevue/themes/nora'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'
import 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { randomHoverColor } from './service/randomHoverColor';
import { randomHoverBorderColor } from './service/randomHoverBorderColor';
import App from './App.vue'
import router from './router'
const app = createApp(App)

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#ffe5e5',
      100: '#ffcccc',
      200: '#ff9999',
      300: '#ff6666',
      400: '#ff3333',
      500: '#ff0000', // Rojo puro
      600: '#e60000',
      700: '#cc0000',
      800: '#b30000',
      900: '#990000',
      950: '#800000',
    },

    // barra: {
    //   100: '{red.100}',
    // },

    // colorScheme: {
    //   light: {
    //     surface: {
    //       0: '#ffffff',
    //       50: '{zinc.50}',
    //       100: '{zinc.100}',
    //       200: '{zinc.200}',
    //       300: '{zinc.300}',
    //       400: '{zinc.400}',
    //       500: '{zinc.500}',
    //       600: '{zinc.600}',
    //       700: '{zinc.700}',
    //       800: '{zinc.800}',
    //       900: '{zinc.900}',
    //       950: '{zinc.950}',
    //     },
    //   },
    //   // dark: {
    //   //   surface: {
    //   //     0: '#ffffff',
    //   //     50: '{slate.50}',
    //   //     100: '{slate.100}',
    //   //     200: '{slate.200}',
    //   //     300: '{slate.300}',
    //   //     400: '{slate.400}',
    //   //     500: '{slate.500}',
    //   //     600: '{slate.600}',
    //   //     700: '{slate.700}',
    //   //     800: '{slate.800}',
    //   //     900: '{slate.900}',
    //   //     950: '{slate.950}',
    //   //   },
    //   //   // formField: {
    //   //   //   hoverBorderColor: '{primary.color}',
    //   //   // },
    //   // },
    // },
  },
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(ToastService);
app.directive('random-hover-color', randomHoverColor)
app.directive('random-hover-border-color', randomHoverBorderColor)

app.use(PrimeVue, {

  // Default theme configuration
  theme: {
    preset: MyPreset,
    options: {
      prefix: 'p',
      darkModeSelector: '.my-app-dark',
      cssLayer: {
        name: 'primevue',
        order: 'primevue,app-styles, another-css-library',
      },
    },
  },
})

app.mount('#app')
