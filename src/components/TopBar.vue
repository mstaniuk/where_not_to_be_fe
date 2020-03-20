<template>
  <div class="top-bar">
    <div class="top-bar__left">
      <div class="top-bar__menu-btn" @click="showMenu = !showMenu">
        <i v-if="!showMenu" class="icon icon-hamburger" />
        <i v-else class="icon icon-hamburger" />
      </div>
    </div>
    <div class="top-bar__center">
      <img class="app-logo" :src="AppLogo" alt="Avoidly application logo" />
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
      AppLogo,
      showMenu: false
    };
  },

  watch: {
    showMenu() {
      this.$emit("input", this.showMenu);
    }
  }
};
</script>
