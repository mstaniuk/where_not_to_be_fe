<template>
  <section class="places">
    <header class="places__header">
      <h1 class="places__title brygada">
        Crowded places
      </h1>

      <div class="places__description">
        Here is the map with some density indicators which should help you <br />
        to avoid crowdy places. It's really important - <a>read why</a>
      </div>
    </header>
    <div class="places__actions">
      <div class="places__action">
        <!--          <Search />-->
        search
      </div>
      <div class="places__action">
        <!--          <Filters />-->
        filters
      </div>
    </div>

    <div class="places__content">
      <Map :poi="poi" :position="position" @moved="onMovedHandler"/>
    </div>
  </section>
</template>

<script>
import Map from "@/components/Map.vue";
import L from "leaflet";

export default {
  name: "Home",
  components: { Map },
  data() {
    return {
      position: {
        lat: 50.049679,
        lng: 19.947022
      },
      poi: []
    };
  },
  methods: {
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
          ...this.poi.filter(p => newPoi.findIndex(np => np.name === p.name) < 0),
          ...newPoi
        ]
      } catch (e) {
        console.log(e);
      }
    }
  },
  watch: {
    position() {
      this.getPoiByPosition();
    }
  },
  async mounted() {
    this.getPoiByPosition();
  }
};
</script>

<style lang="scss">
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
    &__content {
      flex: 1 1 100%;
    }
  }
</style>
