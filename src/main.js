import Vue from "vue";
import VueApexCharts from "vue-apexcharts";
import { directive as vClickOutside } from "vue-clickaway";
import Leaflet from "leaflet";

import App from "@/App.vue";
import router from "@/router";
import "@/assets/scss/styles.scss";

import httpClientFactory from "@/utils/httpClientFactory";
import apiServiceFactory from "@/utils/apiServiceFactory";
import viewportMixin from "@/utils/viewportMixin";

import Card from "@/components/Card";

// Leaflet configuration
delete Leaflet.Icon.Default.prototype._getIconUrl;
Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

// API configuration
const apiService = apiServiceFactory(httpClientFactory(), {
  baseUrl: "https://avoidly-api.herokuapp.com"
});
Vue.prototype.$api = apiService;
Vue.prototype.$leaflet = Leaflet;

// Global mixins
Vue.mixin(viewportMixin);

// Global components
Vue.component("apexchart", VueApexCharts);
Vue.component("card", Card);

// Global directives
Vue.directive("outerclick", vClickOutside);

// Global filters
Vue.filter("percentage", value => `${parseFloat(value).toFixed(2)} %`);
Vue.filter("date", value => {
  if (value instanceof Date) {
    const year = value.getFullYear();
    const month = value.getMonth();
    const day = value.getDate();
    const hours = value.getHours();
    const minutes = value.getMinutes();

    const addZero = val => (val < 10 ? `0${val}` : val);

    const date = `${year}-${addZero(month)}-${addZero(day)}`;

    return `${date} ${hours}:${minutes}`;
  }

  return value;
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
