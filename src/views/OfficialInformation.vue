<template>
  <section id="official-information" class="page">
    <PageHead>
      <template v-slot:title>
        Official information
      </template>
      <template v-slot:text>
        Here is the map with some density indicators which should help you
        <br />
        to avoid crowdy places. It's really important -
        <a href="#">read why</a>
      </template>
    </PageHead>
  </section>
</template>

<script>
import PageHead from "@/components/PageHead.vue";

export default {
  name: "OfficialInformation",

  components: { PageHead }
};
</script>
