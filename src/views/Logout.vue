<template>
  <section id="logout" class="page">
    <PageHead>
      <template v-slot:title>
        Logout
      </template>
    </PageHead>
  </section>
</template>

<script>
import PageHead from "@/components/PageHead.vue";

export default {
  name: "Logout",

  components: { PageHead }
};
</script>
