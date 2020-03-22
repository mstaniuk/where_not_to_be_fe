<template>
  <section id="ways-to-help" class="page ways-to-help page-with-map">
    <PageHead>
      <template v-slot:title>
        Ways to help
      </template>
      <template v-slot:text>
        Use the form below to report your needs.
        <br />It can even be everyday activities such as shopping or walking the
        dog.
      </template>

      <template v-slot:buttons>
        <CreateTaskOrAction />
      </template>
    </PageHead>

    <router-view />
  </section>
</template>

<script>
import PageHead from "@/components/PageHead.vue";
import CreateTaskOrAction from "@/components/Controls/CreateTaskOrAction.vue";

export default {
  name: "WaysToHelp",

  components: { CreateTaskOrAction, PageHead },

  data() {
    return {
      showPopover: false
    };
  },

  computed: {
    isCreating() {
      return ["/help/new-task", "/help/new-action"].includes(this.$route.path);
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
