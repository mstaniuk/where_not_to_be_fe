<template>
  <card class="numbers-of-infected">
    <div class="numbers-of-infected--total">
      <div class="label">infected</div>
      <div class="value">{{ values.total }}</div>
    </div>

    <div class="numbers-of-infected--cured">
      <div class="value">{{ values.cured }}</div>
      <div class="label">
        cured
        <span class="percentage"> ({{ percentage.cured | percentage }}) </span>
      </div>
    </div>

    <div class="numbers-of-infected--deaths">
      <div class="value">{{ values.deaths }}</div>
      <div class="label">
        deaths
        <span class="percentage"> ({{ percentage.deaths | percentage }}) </span>
      </div>
    </div>
  </card>
</template>

<script>
export default {
  name: "NumbersOfInfected",

  data() {
    return {
      values: {
        total: 1281,
        cured: 893,
        deaths: 21
      }
    };
  },

  computed: {
    percentage() {
      const keys = Object.keys(this.values);
      let result = {};

      if (keys.includes("total")) {
        keys.forEach(key => {
          result[key] = (this.values[key] / this.values.total) * 100;
        });
      }

      return result;
    }
  }
};
</script>
