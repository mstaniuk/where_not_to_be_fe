<template>
  <div class="map">
    <LMap
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker
        v-for="point in poi"
        :key="point.latLng.toString()"
        :lat-lng="point.latLng"
      />
    </LMap>
  </div>
</template>

<script>
  import L from 'leaflet';
  import {
    LMap,
    LTileLayer,
    LMarker
  } from 'vue2-leaflet';

  export default {
    props: {
      poi: {
        type: Array,
        default: () => []
      }
    },
    components: {
      LMap, LTileLayer, LMarker
    },
    data() {
      return {
        zoom: 16,
        center: L.latLng(50.049538, 19.942908),
        url:'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
        attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }
    }
  }
</script>