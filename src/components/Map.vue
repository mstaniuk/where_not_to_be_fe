<template>
  <div class="map">
    <div id="map"></div>
    <!-- <LMap ref="map" :zoom="zoom" :center="currentPosition">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-circle-marker
        v-for="point in poi"
        :key="point.latLng.toString()"
        :stroke="false"
        :lat-lng="point.latLng"
        :radius="point.density * 2"
        :fill-color="getCircleColorByDensity(point.density)"
        :fill-opacity="1"
      >
        <l-popup>
          <article>
            <header>
              <h2>
                {{ point.name }}
              </h2>
              <div>Zagrożenie: {{ point.density > 10 ? "Duże" : "Małe" }}</div>
              <div>Zagęszczenie: {{ point.density }}</div>
              <div>
                <small>pos: {{ point.lat }}, {{ point.lng }}</small>
              </div>
            </header>
          </article>
        </l-popup>
      </l-circle-marker>
    </LMap> -->
  </div>
</template>

<script>
// import L from "leaflet";
// import { LMap, LTileLayer, LPopup, LCircleMarker } from "vue2-leaflet";

export default {
  components: {
    // LMap,
    // LTileLayer,
    // LPopup,
    // LCircleMarker
  },

  props: {
    poi: {
      type: Array,
      default: () => []
    },
    position: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      map: null,
      zoom: 18,
      url:
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  },

  computed: {
    currentPosition() {
      return this.$leaflet.latLng(this.position.lat, this.position.lng);
    }
  },

  watch: {
    poi: {
      deep: true,
      handler() {
        this.poi.forEach(point => {
          const marker = this.$leaflet
            .marker(this.$leaflet.latLng(point.lat, point.lng))
            .addTo(this.map)
            .bindPopup(
              `<h2> Initial Location </h2> lat:<b>${point.lat}</b>, long:<b>${point.lng}</b>`
            );
          console.log(marker);
        });
      }
    }
  },

  mounted() {
    const { lat, lng } = this.position;
    // const marker: this.$leaflet.icon({
    //   iconUrl: "my-icon.png",
    //   iconSize: [38, 95],
    //   iconAnchor: [22, 94],
    //   popupAnchor: [-3, -76],
    //   shadowUrl: "my-icon-shadow.png",
    //   shadowSize: [68, 95],
    //   shadowAnchor: [22, 94]
    // }),
    this.map = this.$leaflet
      .map("map")
      .setView(this.currentPosition, this.zoom);

    const tileLayer = this.$leaflet
      .tileLayer(this.url, {
        attribution: this.attribution
      })
      .addTo(this.map);

    // this.$nextTick(() => {
    //   this.$refs.map.mapObject.on("moveend", ev => {
    //     this.$emit("moved", ev);
    //   });
    // });
  },

  methods: {
    drawMap() {},

    getCircleColorByDensity(density) {
      if (density < 5) {
        return "rgba(255, 255, 204, 0.33)";
      }
      if (density < 10) {
        return "rgba(255, 255, 204, 0.5)";
      }
      if (density < 15) {
        return "rgba(255, 204, 153, 0.5)";
      }
      if (density < 20) {
        return "rgba(255, 153, 102, 0.5)";
      }
      if (density < 30) {
        return "rgba(255, 102, 0, 0.5)";
      }
      if (density < 50) {
        return "rgba(255, 0, 0, 0.5)";
      }

      return "rgba(255, 0, 0, 0.75)";
    }
  }
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
