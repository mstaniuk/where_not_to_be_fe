<template>
  <div class="tab-menu">
    <h2 class="tab-menu__title">Create task</h2>

    <router-link class="tab-menu__close" :to="{ path: '/help' }">
      <i class="icon icon-close" />
    </router-link>

    <div class="tab-menu__items">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "TabMenu",

  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
