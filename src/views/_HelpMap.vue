<template>
  <div class="help-map">
    <div class="help-map__bar adjustment">
      <SwitchControl v-model="showTasks" :color="'blue'">
        Single tasks
      </SwitchControl>

      <SwitchControl v-model="showActions" :color="'red'">
        Crowd actions
      </SwitchControl>
    </div>
  </div>
</template>

<script>
import SwitchControl from "@/components/SwitchControl";

export default {
  name: "HelpMap",

  components: { SwitchControl },

  data() {
    return {
      showTasks: true,
      showActions: false
    };
  }
};
</script>
