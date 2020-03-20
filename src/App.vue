<template>
  <div id="app" class="app">
    <aside
      :class="{
        app__side: true,
        'app__side--visible': menuExpanded
      }"
    >
      <Side />
    </aside>
    <main class="app__main">
      <TopBar v-if="isMobile" v-model="menuExpanded" />
      <router-view />
    </main>
    <nav class="app__bottom">
      <Bottom />
    </nav>
  </div>
</template>

<script>
import Side from "@/components/Side.vue";
import Bottom from "@/components/Bottom.vue";
import TopBar from "@/components/TopBar.vue";

export default {
  name: "App",

  components: {
    Side,
    Bottom,
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
    }
  }
};
</script>
