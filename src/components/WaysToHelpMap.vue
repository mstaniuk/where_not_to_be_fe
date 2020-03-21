<template>
  <div class="map">
    <LMap class="map__map" ref="map" :zoom="zoom" :center="currentPosition">
      <l-tile-layer :url="url" :attribution="attribution"/>
      <l-marker
        v-for="point in points"
        :key="point.latLng.toString()"
        :lat-lng="point.latLng"
        :icon="point.type === 'single' ? icons.blue: icons.red"
      >
        <l-popup>
          <div class="popup">
            <div class="popup__title">
              {{ point.title }}
            </div>
            <div class="popup__description">
              {{ point.description }}
            </div>
          </div>
        </l-popup>
      </l-marker>
    </LMap>
  </div>
</template>

<script>
  import L from 'leaflet';
  import {LMap, LMarker, LTileLayer, LPopup} from 'vue2-leaflet';

  export default {
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup
    },

    props: {
      points: {
        type: Array,
        default: () => []
      },
      position: {
        type: Object,
        default: () => {
        }
      }
    },

    data() {
      return {
        icons: {
          red: L.icon({
            iconUrl: require('@/assets/images/pin-red.png'),
            shadowUrl: null,

            iconSize:     [64, 64], // size of the icon
            shadowSize:   [0, 0], // size of the shadow
            iconAnchor:   [32, 64], // point of the icon which will correspond to marker's location
            shadowAnchor: [0, 0],  // the same for the shadow
            popupAnchor:  [0, -16] // point from which the popup should open relative to the iconAnchor
          }),
          blue: L.icon({
            iconUrl: require('@/assets/images/pin-blue.png'),
            shadowUrl: null,

            iconSize:     [64, 64], // size of the icon
            shadowSize:   [0, 0], // size of the shadow
            iconAnchor:   [32, 64], // point of the icon which will correspond to marker's location
            shadowAnchor: [0, 0],  // the same for the shadow
            popupAnchor:  [0, -16] // point from which the popup should open relative to the iconAnchor
          })
        },
        zoom: 18,
        url:
          'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      };
    },

    computed: {
      currentPosition() {
        return L.latLng(this.position.lat, this.position.lng);
      }
    },

    mounted() {
      this.$nextTick(() => {
        this.$refs.map.mapObject.on('moveend', ev => {
          this.$emit('moved', ev);
        });
      });
    },
  };
</script>

<style lang="scss">
  .map {
    height: 100%;
    position: relative;

    &__map {
      position: absolute;
      top: 0;
      left:0;
      width: 100%;
      height: 100%;
      z-index: 10;
    }
  }
</style>
