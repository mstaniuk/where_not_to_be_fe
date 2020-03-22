<template>
  <div class="range-picker">
    <v-range-slider
      v-model="range"
      :max="max"
      :min="min"
      hide-details
      class="align-center range-picker__slider"
    >
      <template v-slot:prepend>
        <v-text-field
          :value="range[0]"
          class="mr10 range-picker__input range-picker__input--from"
          hide-details
          single-line
          type="number"
          style="width: 60px"
          @change="$set(range, 0, $event)"
        ></v-text-field>
      </template>
      <template v-slot:append>
        <v-text-field
          :value="range[1]"
          class="range-picker__input range-picker__input--to"
          hide-details
          single-line
          type="number"
          style="width: 60px"
          @change="$set(range, 1, $event)"
        ></v-text-field>
      </template>
    </v-range-slider>
  </div>
</template>

<script>
export default {
  name: "RangePicker",

  props: {
    max: {
      type: Number,
      default: 100
    }
  },

  data() {
    return {
      min: 0,
      range: [0, 100]
    };
  },

  watch: {
    range() {
      this.$emit("input", this.range);
    }
  },

  created() {
    this.min = this.$attrs.value[0];
    this.range[0] = this.min;
    this.range[1] = this.max;
  }
};
</script>
