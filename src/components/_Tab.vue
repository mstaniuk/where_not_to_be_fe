<template>
  <div
    :class="{ 'tab-menu__item': true, 'tab-menu__item--active': active }"
    @click="$emit('input', $attrs.value)"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "Tab",

  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>
