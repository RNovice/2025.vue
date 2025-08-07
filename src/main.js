import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import './assets/main.css'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Roboto:100,300,400,500,700']
  }
})

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },

})

createApp(App).use(Toast, {
  timeout: 3000,
}).use(vuetify).use(router).mount('#app')
