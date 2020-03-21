<template>
  <div class="card">
    <div
      v-if="this.$slots.header"
      :class="{
        card__header: true,
        [`card__header--${headerColor}`]: headerColor
      }"
    >
      <slot name="header"></slot>
    </div>

    <div v-if="this.$slots.chartTitle" class="card__chart-title">
      <slot name="chartTitle"></slot>
    </div>

    <slot />

    <div
      v-if="this.$slots.footer"
      :class="{
        card__footer: true,
        [`card__footer--${footerColor}`]: footerColor
      }"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
    footerColor: {
      type: String,
      required: false,
      default: null
    },

    headerColor: {
      type: String,
      required: false,
      default: null
    }
  }
};
</script>
