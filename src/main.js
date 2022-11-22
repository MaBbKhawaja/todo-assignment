import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import axios from 'axios'

axios.interceptors.response.use(function (response) {
    console.log(response.status)
    return response
  }, function (error) {
    if (error.response.status === 401) {
      router.push('/login')
    }
    return Promise.reject(error)
  })

createApp(App).use(Quasar, quasarUserOptions).use(router).mount('#app')
