<template>
  <div id="app" class="app">
    <div class="app__side">
      <Side />
    </div>
    <div class="app__map">
      <Map :poi="poi"/>
    </div>
    <div class="app__bottom">
      <Bottom />
    </div>
  </div>
</template>

<script>
import Map from './components/Map.vue'
import Side from './components/Side.vue'
import Bottom from './components/Bottom.vue'
import L from 'leaflet';

export default {
  name: 'App',
  data() {
    return {
      user: {
        lat: 50.049679,
        lng: 19.947022,
      },
      poi: []
    };
  },
  async mounted() {
    try {
      const response = await this.$api.getPoiByMapCenter(this.user);
      return response.data.map(r => {
        const latLng = L.latLng(r.loc[0].lat, r.loc[0].lng);
        return {
          ...r,
          latLng,
        }
      })
    } catch (e) {
      console.log(e);
    }

  },
  components: {
    Map,
    Side,
    Bottom
  }
}
</script>

<style lang="scss">
@import '~reset-css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
}
.app__map {
  flex: 1 1 100%;
}
.app__side {
  flex: 0 0 300px;
}
</style>
