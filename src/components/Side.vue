<template>
  <div class="side">
    <div v-if="!isMobile" class="app-logo">
      <router-link :to="{ path: '/' }">
        <img :src="AppLogo" alt="Avoidly application logo" />
      </router-link>
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

    <router-link
      :to="{ path: '/advertising' }"
      class="btn btn--contour btn--white btn--fullwidth"
    >
      AD SCORE: <strong>{{ adScore }}</strong>
    </router-link>

    <div class="jcvd">
      <span class="jcvd__heading">ADVERT</span>

      <a href="#" class="jcvd__main">
        <img
          class="jcvd__image"
          :src="AdvertImage"
          alt="Jean-Claude Van Damme Image With Jean-Claude hanging stretched between two trucks"
          title="Jean-Claude Van Damme"
        />
      </a>

      <div class="jcvd__postfix">
        <router-link :to="{ path: '/advertising' }">
          help our medics! <br />
          buy ad points to place your ad
        </router-link>

        <div v-outerclick="hideTooltip" class="jcvd__tooltip">
          <i class="icon icon-question" @click="showTooltip = !showTooltip" />

          <popover v-if="showTooltip" :position="['right', 'bottom']">
            <h3 class="brygada jcvd__tooltip-title">
              Adverising
            </h3>

            Our advertising system is dedicated to society. When people stay at
            home, they earn AD SCORE, which is assigned to theis area. You can
            buy ads to display in this area (1 point = 40 views). We spend the
            income to help fighting the epidemy.
          </popover>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import avatarFallback from "@/assets/images/avatar.png";
import AppLogo from "@/assets/images/AppLogo.svg";
import AdvertImage from "@/assets/images/jcvd.png";
import Popover from "@/components/Popover";

export default {
  name: "Side",

  components: { Popover },

  data() {
    return {
      AppLogo,
      AdvertImage,
      user: {
        firstname: "Grzegorz",
        lastname: "Brzęczyszczykiewicz",
        avatar: null
      },
      showTooltip: false,
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
  },

  methods: {
    hideTooltip() {
      this.showTooltip = false;
    }
  }
};
</script>
