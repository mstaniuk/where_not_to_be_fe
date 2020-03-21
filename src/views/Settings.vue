<template>
  <section id="settings" class="page">
    <PageHead>
      <template v-slot:title>
        Settings
      </template>

      <template v-slot:text>
        Manage your personal data, notifications and app permissions.
      </template>
    </PageHead>

    <div class="settings">
      <card class="settings__block" :header-color="'navy'">
        <template v-slot:header>
          Personal data
        </template>

        <picture
          class="user__avatar settings__avatar"
          :style="`background-image: url('${avatarFallback}')`"
        />

        <div class="settings__row">
          <span class="label">First name</span>
          <span class="value">
            Grzegorz
            <i class="icon icon-edit" />
          </span>
        </div>

        <div class="settings__row">
          <span class="label">Last name</span>
          <span class="value">
            Brzęczyszczykiewicz
            <i class="icon icon-edit" />
          </span>
        </div>

        <div class="settings__row">
          <span class="label">Date of birth</span>
          <span class="value">
            5th October 1981
            <i class="icon icon-edit" />
          </span>
        </div>

        <div class="settings__row">
          <span class="label">Company</span>
          <span class="value">
            Dunder Mifflin
            <i class="icon icon-edit" />
          </span>
        </div>
      </card>

      <card class="settings__block" :header-color="'blue'">
        <template v-slot:header>
          Notifications
        </template>

        <div class="settings__row">
          <span class="label">Emails</span>
          <span class="value">
            Only for important messages and warnings
            <i class="icon icon-edit" />
          </span>
        </div>

        <div class="settings__row">
          <span class="label">Browser notifications</span>
          <span class="value">
            Enabled
            <i class="icon icon-edit" />
          </span>
        </div>

        <div class="settings__row">
          <span class="label">SMS</span>
          <span class="value">
            Only for important messages
            <i class="icon icon-edit" />
          </span>
        </div>
      </card>
    </div>
  </section>
</template>

<script>
import PageHead from "@/components/PageHead.vue";
import avatarFallback from "@/assets/images/avatar.png";

export default {
  name: "Settings",

  components: { PageHead },

  data() {
    return { avatarFallback };
  }
};
</script>
