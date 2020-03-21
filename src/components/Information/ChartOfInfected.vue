<template>
  <card :footer-color="'blue'">
    <template v-slot:chartTitle>
      Total number of infected
    </template>

    <apexchart width="100%" type="line" :options="options" :series="series" />

    <template v-slot:footer>
      Footer
    </template>
  </card>
</template>

<script>
export default {
  name: "ChartOfInfected",

  data() {
    return {
      options: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }
};
</script>
