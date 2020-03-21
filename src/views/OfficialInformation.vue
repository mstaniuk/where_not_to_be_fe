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

    <div class="page__content official-info">
      <template v-if="!isMobile">
        <div class="official-info__left">
          <chart-of-infected />

          <instructions />
        </div>
        <div class="official-info__right">
          <numbers-of-infected />

          <market-loss />

          <call-for-help />
        </div>
      </template>

      <template v-else>
        <chart-of-infected />

        <numbers-of-infected />

        <call-for-help />

        <instructions />

        <market-loss />
      </template>
    </div>
  </section>
</template>

<script>
import PageHead from "@/components/PageHead.vue";

import CallForHelp from "@/components/Information/CallForHelp.vue";
import ChartOfInfected from "@/components/Information/ChartOfInfected.vue";
import Instructions from "@/components/Information/Instructions.vue";
import MarketLoss from "@/components/Information/MarketLoss.vue";
import NumbersOfInfected from "@/components/Information/NumbersOfInfected.vue";

export default {
  name: "OfficialInformation",

  components: {
    CallForHelp,
    ChartOfInfected,
    Instructions,
    MarketLoss,
    NumbersOfInfected,
    PageHead
  }
};
</script>
