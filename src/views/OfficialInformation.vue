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

    <div class="page__content">
      <chart-of-infected />

      <instructions />
    </div>
  </section>
</template>

<script>
import PageHead from "@/components/PageHead.vue";
import Instructions from "@/components/Information/Instructions.vue";
import ChartOfInfected from "@/components/Information/ChartOfInfected.vue";

export default {
  name: "OfficialInformation",

  components: { ChartOfInfected, Instructions, PageHead }
};
</script>
