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
      poi: [
        {
          "name": "Bazylika bozego ciała w krakowie",
          "loc": [
            {
              "lat": 50.049697,
              "lng": 19.944797
            },
          ],
          latLng: L.latLng(50.049697,19.944797),
          "density": 32
        },
        {
          "name": "Cafe Kladka",
          "loc": [
            {
              "lat": 50.047635,
              "lng": 19.946605
            }
          ],
          latLng: L.latLng(50.047635,19.946605),
          "density": 32
        },
      ]
    };
  },
  components: {
    Map,
    Side,
    Bottom
  }
}
</script>

<style>
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
