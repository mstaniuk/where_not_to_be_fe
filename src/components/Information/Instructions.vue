<template>
  <card :header-color="'red'" class="instructions">
    <template v-slot:header>
      Instructions
    </template>

    <div v-html="instructions"></div>

    <template v-slot:footer>
      © 2020
      <a
        href="https://www.gov.uk/government/publications/covid-19-stay-at-home-guidance/stay-at-home-guidance-for-households-with-possible-coronavirus-covid-19-infection"
        >gov.uk</a
      >
    </template>
  </card>
</template>

<script>
import instructions from "@/data/instructions.js";

export default {
  name: "Instructions",

  data() {
    return {
      instructions
    };
  }
};
</script>
