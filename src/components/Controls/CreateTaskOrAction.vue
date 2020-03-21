<template>
  <div
    v-outerclick="hidePopover"
    :class="{
      'cta-on-mobile': windowWidth <= 768,
      'mr-50': windowWidth > 768 && isMobile
    }"
  >
    <button
      v-if="!isCreating"
      :class="[
        'btn btn--filled btn--red btn--small',
        arrowClass,
        isCreating ? 'btn--disabled' : ''
      ]"
      @click="showPopover = !showPopover"
    >
      Create new
    </button>

    <popover-create v-if="showPopover" />
  </div>
</template>

<script>
import PopoverCreate from "@/components/Controls/_PopoverCreate.vue";

export default {
  name: "CreateTaskOrAction",

  components: { PopoverCreate },

  data() {
    return {
      showPopover: false
    };
  },

  computed: {
    isCreating() {
      return ["/help/new-task", "/help/new-action"].includes(this.$route.path);
    },

    arrowClass() {
      const smallScreen = this.windowWidth <= 768;

      return (!smallScreen && this.showPopover) ||
        (smallScreen && !this.showPopover)
        ? "btn--arrow-up"
        : "btn--arrow-down";
    }
  },

  watch: {
    $route() {
      this.showPopover = false;
    }
  },

  methods: {
    hidePopover() {
      if (this.showPopover) this.showPopover = false;
    }
  }
};
</script>
