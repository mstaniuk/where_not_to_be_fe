<template>
  <div
    :class="{
      'switch-control': true,
      [`switch-control--${color}`]: true,
      'switch-control--active': isActive
    }"
    @click="update"
  >
    <div class="switch-control__indicator">
      <i class="switch-control__btn" />
    </div>

    <span class="switch-control__label">
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  name: "SwitchControl",

  props: {
    color: {
      type: String,
      default: "blue"
    }
  },

  computed: {
    isActive() {
      return this.$attrs.value === true;
    }
  },

  methods: {
    update() {
      this.$attrs.value = !this.$attrs.value;
      this.$emit("input", this.$attrs.value);
    }
  }
};
</script>
