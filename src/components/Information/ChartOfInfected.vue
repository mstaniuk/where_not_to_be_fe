<template>
  <card :footer-color="'blue'">
    <template v-slot:chartTitle>
      Total number of infected
    </template>

    <apexchart
      width="100%"
      height="250"
      type="area"
      :options="options"
      :series="series"
    />

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
          categories: ["01-2020", "02-2020", "03-2020", "04-2020", "05-2020"]
        }
      },
      series: [
        {
          name: "Confirmed infections",
          data: [3, 12, 45, 82, 157]
        }
      ]
    };
  }
};
</script>
