<template>
  <section id="crowded-places" class="page places">
    <PageHead>
      <template v-slot:title>
        Crowded places
      </template>
      <template v-slot:text>
        Here is the map with some density indicators which should help you
        <br/>
        to avoid crowdy places. It's really important -
        <a href="#">read why</a>
      </template>
    </PageHead>
    <div class="places__actions">
      <div class="places__action">
<!--        <Search/>-->
      </div>
      <div class="places__action">
        <FiltersButton @click.native="searchClickHandler"/>
      </div>

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
      <Map :poi="filteredPoi" :position="position" @moved="onMovedHandler"/>
    </div>
  </section>
</template>

<script>
  import Map from '@/components/Map.vue';
  import PageHead from '@/components/PageHead.vue';
  import FiltersButton from '@/components/FiltersButton.vue';
  import L from 'leaflet';
  import VueRangeSlider from 'vue-range-component'

  export default {
    name: 'Home',
    components: {Map, PageHead, FiltersButton, VueRangeSlider},
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
            ...newPoi.filter(np => this.poi.findIndex(p => np.name === p.name) < 0)
          ]
        } catch (e) {
          console.log(e);
        }
      }
    },
    computed: {
      filteredPoi() {
        return this.poi.filter(p => p.density >= this.poiDensityFilterValue)
      }
    }
  };
</script>

<style lang="scss">
  @import "~vue-range-component/dist/vue-range-slider.css";

  .places {
    display: flex;
    flex-direction: column;
    height: 100%;

    &__header {
      background-color: #ffffff;
      padding: 40px;
      color: #302b5c;
      flex: 0 0 auto;
    }

    &__title {
      font-size: 40px;
    }

    &__description {
      a {
        font-weight: bold;
        text-decoration: underline;
      }
    }

    &__actions {
      position: relative;
      z-index: 2;
      flex: 0 0 auto;
      padding: 12px;
      display: flex;
      background-color: #e8e8e8;
    }

    &__action {
      & + & {
        margin-left: 24px;
      }
    }

    &__actions-bar {
      transition: transform 250ms ease-in-out,  visibility 0ms 250ms ease-in-out;
      background-color: #e8e8e8;
      position: absolute;
      width: 100%;
      height: 30px;
      top: 100%;
      left: 0;
      right: 0;
      transform: scaleY(0);
      visibility: hidden;
      pointer-events: none;
      transform-origin: top;

      &--visible {
        transition: transform 250ms ease-in-out;
        transform: scaleY(1);
        visibility: visible;
        pointer-events: all;
      }
    }

    &__content {
      position: relative;
      flex: 1 1 100%;
      z-index: 1;
    }
  }
</style>
