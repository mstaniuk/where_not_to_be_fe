<template>
  <div class="side">
    <div v-if="!isMobile" class="app-logo">
      <img :src="AppLogo" alt="Avoidly application logo" />
    </div>

    <div class="user">
      <picture
        class="user__avatar"
        :style="`background-image: url('${avatarUrl}')`"
      />

      <div class="user__name">
        <span>{{ user.firstname }}</span>
        <strong>{{ user.lastname }}</strong>
      </div>
    </div>

    <nav class="side-menu">
      <ul class="side-menu__list">
        <li v-for="item in menu" :key="item.path" class="side-menu__item">
          <router-link :to="{ path: item.path }">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import avatarFallback from "@/assets/images/avatar.png";
import AppLogo from "@/assets/images/AppLogo.svg";

export default {
  name: "Side",

  data() {
    return {
      AppLogo,
      user: {
        firstname: "Grzegorz",
        lastname: "Brzęczyszczykiewicz",
        avatar: null
      },
      menu: [
        { path: "/notifications", label: "Notifications" },
        { path: "/statistics", label: "Statistics" },
        { path: "/settings", label: "Settings" },
        { path: "/logout", label: "Logout" }
      ]
    };
  },

  computed: {
    avatarUrl() {
      return this.user.avatar || avatarFallback;
    }
  }
};
</script>
