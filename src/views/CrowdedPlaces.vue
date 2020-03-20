<template>
  <Map :poi="poi" />
</template>

<script>
import Map from '@/components/Map.vue'
import L from 'leaflet';

export default {
  name: 'Home',
  components: { Map },
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

  }
}
</script>
