<template>
  <nav class="main-menu">
    <ul class="main-menu__list">
      <li
        v-for="item in menu"
        :key="item.path"
        :class="{
          'main-menu__item': true,
          'main-menu__item--active': activeLink.path === item.path
        }"
      >
        <router-link :to="{ path: item.path }">
          <i :class="`icon icon-${item.icon}`" />
          <span v-if="!isMobile">{{ item.label }}</span>
        </router-link>
        <i
          v-if="activeLink.path === item.path"
          class="main-menu__active-indicator"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MainMenu",

  data() {
    return {
      menu: [
        {
          path: "/",
          label: "Crowded places",
          icon: "crowd"
        },
        {
          path: "/information",
          label: "Official information",
          icon: "info"
        },
        {
          path: "/help",
          label: "Ways to help",
          icon: "help"
        }
      ]
    };
  },

  computed: {
    activeLink() {
      return this.menu.find(i => i.path === this.$route.path);
    }
  }
};
</script>
