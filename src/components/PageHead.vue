<template>
  <header class="page-head">
    <div
      :class="{
        'page-head__content': true,
        'page-head__content--collapsed': isMobile && collapsed
      }"
    >
      <h1 class="brygada">
        <slot name="title" />
      </h1>
      <p>
        <slot name="text" />
      </p>
    </div>

    <div class="page-head__buttons">
      <slot name="buttons" />
    </div>

    <span
      v-if="isMobile"
      :class="{
        'page-head__expander': true,
        'page-head__expander--inversed': collapsed
      }"
      @click="collapsed = !collapsed"
    >
      <i />
    </span>
  </header>
</template>

<script>
export default {
  name: "PageHead",

  data() {
    return {
      collapsed: false
    };
  }
};
</script>
