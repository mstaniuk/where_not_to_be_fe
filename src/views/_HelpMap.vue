<template>
  <div class="ways-to-help__content">
    <div class="adjustment-bar">
      <SwitchControl v-model="showTasks" :color="'blue'">
        Single tasks
      </SwitchControl>

      <SwitchControl v-model="showActions" :color="'red'">
        Crowd actions
      </SwitchControl>
    </div>

    <div class="help-map">
      <WMap
        :points="filteredPoints"
        :position="position"
        @moved="onMovedHandler"
      />
    </div>
  </div>
</template>

<script>
import SwitchControl from "@/components/Controls/SwitchControl";
import WMap from "@/components/WaysToHelpMap.vue";
import L from "leaflet";

export default {
  name: "HelpMap",

  components: { WMap, SwitchControl },

  data() {
    return {
      showTasks: true,
      showActions: false,
      position: {
        lat: 50.049679,
        lng: 19.947022
      },
      points: []
    };
  },
  computed: {
    filteredPoints() {
      return this.points.filter(
        p =>
          (p.type === "crowd" && this.showActions) ||
          (p.type === "single" && this.showTasks)
      );
    }
  },

  async mounted() {
    this.handleApi();
  },

  methods: {
    onMovedHandler(ev) {
      this.position = ev.target.getCenter();
      this.handleApi();
    },
    async handleApi() {
      const response = await this.$api.helpRequestsByMapCenter(this.position);
      this.points = response.data.map(r => ({
        type: r.request_type,
        unit: r.unit,
        title: r.title,
        description: r.description,
        latLng: L.latLng(r.lat, r.lng)
      }));
    }
  }
};
</script>
