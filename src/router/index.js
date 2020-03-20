import Vue from "vue";
import VueRouter from "vue-router";
import CrowdedPlaces from "@/views/CrowdedPlaces";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: CrowdedPlaces
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
