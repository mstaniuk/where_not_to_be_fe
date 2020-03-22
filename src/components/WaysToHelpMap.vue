<template>
  <div class="map" :class="{ 'map--opened': activePointIndex !== null }">
    <LMap ref="map" class="map__map" :zoom="zoom" :center="currentPosition">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker
        v-for="(point, i) in points"
        :key="point.latLng.toString()"
        :lat-lng="point.latLng"
        :icon="getPointIcon(point, i)"
        @click="markerClickHandler(i)"
      />
    </LMap>

    <section
      v-if="activePointIndex !== null"
      class="map__popup map-popup"
      :class="'map-popup--' + activePoint.type"
    >
      <button class="map-popup__close" @click="resetActivePoint">
        <i class="icon icon-close" />
      </button>
      <header class="map-popup__header">
        <h3 class="map-popup__title brygada">{{ activePoint.title }}</h3>
        <div class="map-popup__address">Krakow, ul ...</div>
      </header>

      <div class="map-popup__actions">
        <div v-if="activePoint.target">
          <div class="map-popup__target-label">Target</div>
          <div class="map-popup__target">
            {{ activePoint.target }} {{ activePoint.unit }}
          </div>
        </div>

        <div v-if="activePoint.time.from && activePoint.time.to">
          <div class="map-popup__target-label">Preferred time</div>
          <div class="map-popup__target">
            {{ timeFormatter(activePoint.time.from) }} -
            {{ timeFormatter(activePoint.time.to) }}
          </div>
        </div>

        <div class="map-popup__cta">
          <button
            class="btn btn--filled"
            :class="{
              'btn--red': activePoint.type === 'crowd',
              'btn--navy': activePoint.type === 'single'
            }"
          >
            Help
          </button>
        </div>
      </div>

      <div class="map-popup__description">
        {{ activePoint.description }}
      </div>
    </section>
  </div>
</template>

<script>
import L from "leaflet";
import { LMap, LMarker, LTileLayer } from "vue2-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },

  props: {
    points: {
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
      activePointIndex: null,
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
        activeRed: L.icon({
          iconUrl: require("@/assets/images/pin-red-selected.png"),
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
        }),
        activeBlue: L.icon({
          iconUrl: require("@/assets/images/pin-blue-selected.png"),
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
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  },

  computed: {
    currentPosition() {
      return L.latLng(this.position.lat, this.position.lng);
    },
    activePoint() {
      return this.points[this.activePointIndex];
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.map.mapObject.on("moveend", ev => {
        this.$emit("moved", ev);
      });
    });
  },
  methods: {
    timeFormatter(date) {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      return new Intl.DateTimeFormat("en-GB").format(date);
    },
    markerClickHandler(index) {
      if (this.activePointIndex === index) {
        this.activePointIndex = null;
      } else {
        this.activePointIndex = index;
      }
    },
    getPointIcon(point, index) {
      if (point.type === "single") {
        if (this.activePointIndex === index) {
          return this.icons.activeBlue;
        }
        return this.icons.blue;
      }

      if (this.activePointIndex === index) {
        return this.icons.activeRed;
      }
      return this.icons.red;
    },
    resetActivePoint() {
      this.activePointIndex = null;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";

.map {
  $root: &;
  height: 100%;
  position: relative;

  &__map {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

    #{$root}--opened & {
      width: calc(100% - 400px);
    }
  }

  &__popup {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 400px;
  }
}

.map-popup {
  $root: &;

  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 32px;
    border: none;
    padding: 0;
    border-radius: 0;
    background-color: transparent;
  }

  &__header {
    padding: 40px 40px 20px 40px;
    color: $color-navy;
  }

  &__title {
    font-size: 26px;
    font-weight: bold;
  }

  &__address {
    font-size: 14px;
  }

  &__actions {
    padding: 10px 40px;
    background-color: $color-salmon;
    color: $color-white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #{$root}--single & {
      background-color: $color-lightblue;
      justify-content: flex-end;
    }
  }

  &__target-label {
    font-size: 11px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 2px;
  }

  &__target {
    font-weight: bold;
  }

  &__cta {
    margin-left: 10px;
  }

  &__description {
    padding: 40px;
    line-height: 1.4;
    font-size: 14px;
  }
}
</style>
