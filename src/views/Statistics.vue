<template>
  <section id="statistics" class="page">
    <PageHead>
      <template v-slot:title>
        Statistics
      </template>
    </PageHead>
  </section>
</template>

<script>
import PageHead from "@/components/PageHead.vue";

export default {
  name: "Statistics",

  components: { PageHead }
};
</script>
