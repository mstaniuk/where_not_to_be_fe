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

    <a class="btn btn--contour btn--white btn--fullwidth" href="#">
      AD SCORE: <strong>{{ adScore }}</strong>
    </a>

    <div class="jcvd">
      <span class="jcvd__heading">ADVERT</span>

      <a href="#" title="">
        <img
          class="jcvd__image"
          :src="AdvertImage"
          alt="Jean-Claude Van Damme Image With Jean-Claude hanging stretched between two trucks"
          title="Jean-Claude Van Damme"
        />
      </a>
    </div>
  </div>
</template>

<script>
import avatarFallback from "@/assets/images/avatar.png";
import AppLogo from "@/assets/images/AppLogo.svg";
import AdvertImage from "@/assets/images/jcvd.png";

export default {
  name: "Side",

  data() {
    return {
      AppLogo,
      AdvertImage,
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
      ],
      adScore: 10284
    };
  },

  computed: {
    avatarUrl() {
      return this.user.avatar || avatarFallback;
    }
  }
};
</script>
