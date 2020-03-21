import Vue from "vue";
import VueRouter from "vue-router";

import Advertising from "@/views/Advertising";
import CrowdedPlaces from "@/views/CrowdedPlaces";
import OfficialInformation from "@/views/OfficialInformation";
import WaysToHelp from "@/views/WaysToHelp";

import CreateTask from "@/views/_CreateTask";
import HelpMap from "@/views/_HelpMap";

import Notifications from "@/views/Notifications";
import Statistics from "@/views/Statistics";
import Settings from "@/views/Settings";
import Logout from "@/views/Logout";

Vue.use(VueRouter);

const routes = [
  // Main views
  {
    path: "/",
    name: "Home",
    component: CrowdedPlaces
  },
  {
    path: "/information",
    name: "Official information",
    component: OfficialInformation
  },
  {
    path: "/help",
    component: WaysToHelp,
    children: [
      {
        path: "",
        name: "Actions map",
        component: HelpMap
      },
      {
        path: "new-task",
        name: "Create task",
        component: CreateTask
      },
      {
        path: "new-action",
        name: "Create action",
        component: CreateTask
      }
    ]
  },
  {
    path: "/advertising",
    name: "Advertising",
    component: Advertising
  },
  // User views
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
