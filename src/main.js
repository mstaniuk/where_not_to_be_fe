import Vue from 'vue'
import App from './App.vue'
import {Icon} from 'leaflet';
import httpClientFactory from './utils/httpClientFactory';
import apiServiceFactory from './utils/apiServiceFactory';
import router from './router'

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.config.productionTip = false;

const httpClient = httpClientFactory();
const apiService = apiServiceFactory(httpClient, {baseUrl: 'http://avoidly-api.herokuapp.com'});

Vue.prototype.$api = apiService;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
