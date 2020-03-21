<template>
  <card :header-color="'red'">
    <template v-slot:header>
      Instructions
    </template>

    <template v-slot:footer>
      Footer
    </template>
  </card>
</template>

<script>
export default {
  name: "Instructions"
};
</script>
