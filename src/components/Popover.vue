<template>
  <div :class="`popover popover--${position[0]}-${position[1]}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Popover",

  props: {
    position: {
      type: Array,
      default: () => ["center", "center"]
    }
  }
};
</script>
