import Vue from "vue";
import VueRouter from "vue-router";
import CrowdedPlaces from "@/views/CrowdedPlaces";
import Notifications from "@/views/Notifications";
import Statistics from "@/views/Statistics";
import Settings from "@/views/Settings";
import Logout from "@/views/Logout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: CrowdedPlaces
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: Statistics
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
