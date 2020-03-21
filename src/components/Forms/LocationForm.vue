<template>
  <form class="form location-form">
    <FormMap type="single"/>
  </form>
</template>

<script>
import FormMap from '@/components/FormMap.vue'
export default {
  name: "LocationForm",
  components: {FormMap}
};
</script>
