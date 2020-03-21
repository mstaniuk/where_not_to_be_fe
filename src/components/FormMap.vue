<template>
  <div class="map">
    <LMap ref="map" class="map__map" :zoom="zoom" :center="position">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker
        :lat-lng="position"
        :icon="type === 'single' ? icons.blue : icons.red"
      >
        <LPopup>
          <button class="btn btn--contour btn--red">Confirm</button>
        </LPopup>
      </l-marker>
    </LMap>
  </div>
</template>

<script>
import L from "leaflet";
import { LMap, LMarker, LTileLayer, LPopup } from "vue2-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },

  props: {
    type: {
      type: String,
      default: 'single'
    }
  },

  data() {
    return {
      icons: {
        red: L.icon({
          iconUrl: require("@/assets/images/pin-red.png"),
          shadowUrl: null,

          iconSize: [64, 64], // size of the icon
          shadowSize: [0, 0], // size of the shadow
          iconAnchor: [32, 64], // point of the icon which will correspond to marker's location
          shadowAnchor: [0, 0], // the same for the shadow
          popupAnchor: [0, -16] // point from which the popup should open relative to the iconAnchor
        }),
        blue: L.icon({
          iconUrl: require("@/assets/images/pin-blue.png"),
          shadowUrl: null,

          iconSize: [64, 64], // size of the icon
          shadowSize: [0, 0], // size of the shadow
          iconAnchor: [32, 64], // point of the icon which will correspond to marker's location
          shadowAnchor: [0, 0], // the same for the shadow
          popupAnchor: [0, -16] // point from which the popup should open relative to the iconAnchor
        })
      },
      zoom: 18,
      url:
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      position: L.latLng(50.049679, 19.947022)
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.$refs.map.mapObject.on("move", () => {
        this.position = this.$refs.map.mapObject.getCenter();
      });
      this.$refs.map.mapObject.on("moveend", () => {
        this.$emit('change', this.$refs.map.mapObject.getCenter());
      });
    });
  }
};
</script>
