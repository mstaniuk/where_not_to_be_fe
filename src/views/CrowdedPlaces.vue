<template>
  <section id="crowded-places" class="page page-with-map places">
    <PageHead>
      <template v-slot:title>
        Crowded places
      </template>
      <template v-slot:text>
        Here is the map with some density indicators which should help you
        <br />
        to avoid crowdy places. It's really important -
        <a href="#">read why</a>
      </template>
    </PageHead>

    <div
      :class="[
        'places__actions',
        'adjustment-bar',
        actionsBarVisible ? 'places__actions--expanded' : ''
      ]"
    >
      <div class="places__search">
        <input
          id="location"
          name="location"
          class="form__field"
          placeholder="Search location"
          type="text"
        />
      </div>

      <FiltersButton
        :active="actionsBarVisible"
        @click.native="searchClickHandler"
      />

      <div
        class="places__actions-bar"
        :class="{
          'places__actions-bar--visible': actionsBarVisible
        }"
      >
        <VueRangeSlider v-model="poiDensityFilterValue" />
      </div>
    </div>

    <div class="places__content">
      <Map :poi="filteredPoi" :position="position" @moved="onMovedHandler" />
    </div>
  </section>
</template>

<script>
import Map from "@/components/Map.vue";
import PageHead from "@/components/PageHead.vue";
import FiltersButton from "@/components/Controls/FiltersButton.vue";
import L from "leaflet";
import VueRangeSlider from "vue-range-component";

export default {
  name: "Home",
  components: { Map, PageHead, FiltersButton, VueRangeSlider },
  data() {
    return {
      actionsBarVisible: false,
      position: {
        lat: 50.049679,
        lng: 19.947022
      },
      poi: [],
      poiDensityFilterValue: 0
    };
  },
  computed: {
    filteredPoi() {
      return this.poi.filter(p => p.density >= this.poiDensityFilterValue);
    }
  },
  watch: {
    position() {
      this.getPoiByPosition();
    }
  },
  async mounted() {
    this.getPoiByPosition();
  },
  methods: {
    searchClickHandler() {
      this.actionsBarVisible = !this.actionsBarVisible;
    },
    onMovedHandler(ev) {
      this.position = ev.target.getCenter();
    },
    async getPoiByPosition() {
      try {
        const response = await this.$api.getPoiByMapCenter(this.position);
        const newPoi = response.data.map(r => {
          const latLng = L.latLng(r.lat, r.lng);
          return {
            ...r,
            latLng
          };
        });

        this.poi = [
          ...this.poi,
          ...newPoi.filter(
            np => this.poi.findIndex(p => np.name === p.name) < 0
          )
        ];
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
