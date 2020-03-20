<template>
  <div
    id="app"
    class="app"
  >
    <aside class="app__side">
      <Side />
    </aside>
    <main class="app__main">
      <TopBar v-model="menuExpanded" />
      <router-view />
    </main>
    <nav class="app__bottom">
      <Bottom />
    </nav>
  </div>
</template>

<script>
import Side from '@/components/Side.vue'
import Bottom from '@/components/Bottom.vue'
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'App',

  data() {
    return {
      menuExpanded: false
    }
  },

  components: {
    Side,
    Bottom,
    TopBar
  }
}
</script>