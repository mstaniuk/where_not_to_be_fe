<template>
  <div class="create-task">
    <template v-if="isMobile">
      <TabMenu :title="'Create task'">
        <Tab
          v-for="option in forms"
          :key="option"
          v-model="activeForm"
          :value="option"
          :active="option === activeForm"
          @input="activeForm = option"
        >
          {{ option }}
        </Tab>
      </TabMenu>

      <div v-if="activeForm === 'description'" class="create-task__description">
        <DescriptionForm />
      </div>
      <div v-if="activeForm === 'location'" class="create-task__location">
        <LocationForm />
      </div>
    </template>

    <template v-else>
      <div class="create-task__adjustment adjustment-bar">
        <router-link class="adjustment-bar__back" :to="{ path: '/help' }">
          <i />
          <span>Back to map</span>
        </router-link>

        <button class="btn btn--filled btn--red btn--small">
          SAVE TASK
        </button>
      </div>

      <div class="create-task__description">
        <DescriptionForm />
      </div>

      <div class="create-task__location">
        <LocationForm />
      </div>
    </template>
  </div>
</template>

<script>
import DescriptionForm from "@/components/Forms/DescriptionForm";
import LocationForm from "@/components/Forms/LocationForm";
import TabMenu from "@/components/TabMenu";
import Tab from "@/components/_Tab";

export default {
  name: "CreateTask",

  components: { DescriptionForm, LocationForm, Tab, TabMenu },

  data() {
    return {
      forms: ["description", "location"],
      activeForm: "description"
    };
  },

  methods: {
    setActiveForm(formName) {
      console.log(formName);
      this.activeForm = formName;
    }
  }
};
</script>
