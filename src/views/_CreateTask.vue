<template>
  <div class="create-task">
    <div class="create-task__form">
      <template v-if="isMobile">
        <div class="create-task__description form-tab-content">
          <DescriptionForm />
        </div>
        <div class="create-task__location form-tab-content">
          <h2>LOCATION</h2>
        </div>
      </template>

      <template v-else>
        <div class="create-task__description"></div>
        <div class="create-task__location"></div>
      </template>
    </div>
  </div>
</template>

<script>
import DescriptionForm from "@/components/Forms/DescriptionForm";

export default {
  name: "CreateTask",

  components: { DescriptionForm }
};
</script>
