<template>
  <div id="app" class="app" data-app="Avoidly">
    <template v-if="$route.path === '/login'">
      <router-view />
    </template>

    <template v-else>
      <aside
        :class="{
          app__side: true,
          'app__side--visible': menuExpanded
        }"
      >
        <Side />
      </aside>
      <main class="app__main">
        <TopBar v-if="isMobile">
          <div
            v-if="isMobile"
            class="top-bar__menu-btn"
            @click="menuExpanded = !menuExpanded"
          >
            <i v-if="!menuExpanded" class="icon icon-hamburger" />
            <i v-else class="icon icon-close" />
          </div>
        </TopBar>
        <router-view />
      </main>
      <MainMenu />
    </template>
  </div>
</template>

<script>
import Side from "@/components/Side.vue";
import TopBar from "@/components/TopBar.vue";
import MainMenu from "@/components/MainMenu.vue";

export default {
  name: "App",

  components: {
    Side,
    MainMenu,
    TopBar
  },

  data() {
    return {
      menuExpanded: false
    };
  },
  watch: {
    isMobile() {
      this.menuExpanded = !this.isMobile;
    },

    $route() {
      this.menuExpanded = false;
    }
  }
};
</script>
