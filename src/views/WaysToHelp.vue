<template>
  <section id="ways-to-help" class="page">
    <PageHead>
      <template v-slot:title>
        Ways to help
      </template>
      <template v-slot:text>
        Here is the map with some density indicators which should help you
        <br />
        to avoid crowdy places. It's really important -
        <a href="#">read why</a>
      </template>

      <template v-slot:buttons>
        <div v-outerclick="hidePopover">
          <button
            :class="[
              'btn btn--filled btn--red btn--small ml-15',
              showPopover ? 'btn--arrow-up' : 'btn--arrow-down',
              isMobile ? 'mr-50' : ''
            ]"
            @click="showPopover = !showPopover"
          >
            Create new
          </button>

          <popover-create v-if="showPopover" />
        </div>
      </template>
    </PageHead>
  </section>
</template>

<script>
import PageHead from "@/components/PageHead.vue";
import PopoverCreate from "@/components/PopoverCreate.vue";

export default {
  name: "WaysToHelp",

  components: { PageHead, PopoverCreate },

  data() {
    return {
      showPopover: false
    };
  },

  methods: {
    hidePopover() {
      if (this.showPopover) this.showPopover = false;
    }
  }
};
</script>
