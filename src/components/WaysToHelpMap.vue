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

    <ActionsDetails
      v-if="activePointIndex !== null"
      class="map__popup"
      @closeClick="resetActivePoint"
      :point="activePoint"
    />
  </div>
</template>

<script>
import L from "leaflet";
import { LMap, LMarker, LTileLayer } from "vue2-leaflet";
import { ICON_RED_ACTIVE, ICON_BLUE, ICON_BLUE_ACTIVE, ICON_RED } from '@/utils/icons';
import ActionsDetails from '@/components/ActionDetails.vue';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    ActionsDetails
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
        red: ICON_RED,
        activeRed: ICON_RED_ACTIVE,
        blue: ICON_BLUE,
        activeBlue: ICON_BLUE_ACTIVE,
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
      this.$refs.map.mapObject.scrollWheelZoom.disable();
      this.$refs.map.mapObject.on("moveend", ev => {
        this.$emit("moved", ev);
      });
    });
  },
  methods: {
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
    width: 100%;
    z-index: 1000;
    background-color: $color-white;

    @include media-query-sm-up {
      width: 400px;
    }
  }
}
</style>
