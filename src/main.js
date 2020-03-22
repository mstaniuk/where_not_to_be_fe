import Vue from "vue";
import { Icon } from "leaflet";
import VueApexCharts from "vue-apexcharts";
import { directive as vClickOutside } from "vue-clickaway";

import App from "@/App.vue";
import router from "@/router";
import "@/assets/scss/styles.scss";

import httpClientFactory from "@/utils/httpClientFactory";
import apiServiceFactory from "@/utils/apiServiceFactory";
import viewportMixin from "@/utils/viewportMixin";

import Card from "@/components/Card";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

// Leaflet configuration
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

// API configuration
const apiService = apiServiceFactory(httpClientFactory(), {
  baseUrl: "https://avoidly-api.herokuapp.com"
});
Vue.prototype.$api = apiService;

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

    return `${date} ${addZero(hours)}:${addZero(minutes)}`;
  }

  return value;
});

Vue.filter("compactDate", value => {
  let val = value;
  try {
    if (!(val instanceof Date)) {
      val = new Date(val);
      if(isNaN(val.getTime())) {
        throw new Error('invalid date');
      }
    }

    const year = val.getFullYear();
    const month = val.getMonth();
    const day = val.getDate();
    const hours = val.getHours();
    const minutes = val.getMinutes();

    const addZero = v => (v < 10 ? `0${v}` : v);
    const date = `${addZero(day)}/${addZero(month)}/${year.toString().substring(2)}`;

    return `${date} ${hours}:${addZero(minutes)}`;
  } catch (e) {
    return value;
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
