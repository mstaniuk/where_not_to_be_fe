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
      <Map :poi="poi" :position="position" @moved="onMovedHandler" />
    </div>
  </div>
</template>

<script>
import SwitchControl from "@/components/SwitchControl";
import Map from "@/components/Map.vue";
import L from "leaflet";

export default {
  name: "HelpMap",

  components: { Map, SwitchControl },

  data() {
    return {
      showTasks: true,
      showActions: false,
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
    }
  }
};
</script>
