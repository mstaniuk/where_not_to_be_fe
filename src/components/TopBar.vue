<template>
  <div class="top-bar">
    <div class="top-bar__left brygada">
      <slot />
    </div>
    <div class="top-bar__center">
      <router-link :to="{ path: '/' }">
        <img :src="AppLogo" alt="Avoidly application logo" />
      </router-link>
    </div>
    <div class="top-bar__right" />
  </div>
</template>

<script>
import AppLogo from "@/assets/images/AppLogo.svg";

export default {
  name: "TopBar",

  data() {
    return {
      AppLogo
    };
  }
};
</script>
