<template>
  <section id="settings" class="page">
    <PageHead>
      <template v-slot:title>
        Settings
      </template>
    </PageHead>
  </section>
</template>

<script>
import PageHead from "@/components/PageHead.vue";

export default {
  name: "Settings",

  components: { PageHead }
};
</script>
