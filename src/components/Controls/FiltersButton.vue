<template>
  <button
    :class="[
      'filters-button',
      'btn',
      'btn--contour',
      'btn--small',
      'btn--navy',
      active ? 'active' : ''
    ]"
  >
    <svg
      class="filters-button__icon"
      viewBox="0 0 64 64"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="none" stroke-width="1" fill-rule="evenodd">
        <path
          id="Fill-1"
          d="M16,14 L16,22.1539297 L27.3898489,34.8193906 L27.3898489,44.4791328 L36.6102189,50 L36.6102189,34.8193906 L48,22.1539297 L48,14 L16,14 Z M18.7118656,16.8145391 L45.2882699,16.8145391 L45.2882699,19.6291484 L45.2882699,19.6291484 L18.7118656,19.6291484 L18.7118656,16.8145391 Z M30.1017144,42.8536484 L30.1017144,33.7100703 L19.9700725,22.4436172 L44.0301307,22.4436172 L33.8982856,33.7100703 L33.8982856,45.1269922 L30.1017144,42.8536484 Z"
        ></path>
      </g>
    </svg>
    Set filters
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.filters-button {
  &.active,
  &:hover,
  &:focus,
  &:active {
    background-color: #3d3d72 !important;
    color: #ffffff !important;
    fill: #ffffff;
  }

  &__icon {
    width: 20px;
    height: 20px;
    fill: inherit;
    vertical-align: middle;
  }
}
</style>
