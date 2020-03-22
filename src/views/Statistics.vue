<template>
  <section id="statistics" class="page">
    <PageHead>
      <template v-slot:title>
        Statistics
      </template>
    </PageHead>

    <div class="statistics">
      <div class="statistics__adscore">
        <h2>Total AdScore</h2>

        <apexchart
          width="100%"
          height="400"
          type="area"
          :options="adscore.options"
          :series="adscore.series"
        />
      </div>

      <card
        class="statistics__block statistics__block--activity"
        :header-color="'yellow'"
      >
        <template v-slot:header>
          Your activity
        </template>

        <div class="settings__row">
          <span class="label">Acomplished tasks</span>
          <span class="value">
            37
          </span>
        </div>

        <div class="settings__row">
          <span class="label">Actions you participated in</span>
          <span class="value">
            18
          </span>
        </div>

        <div class="settings__row">
          <span class="label">Collected Adscore</span>
          <span class="value">
            492
          </span>
        </div>
      </card>

      <card class="statistics__block" :header-color="'green'">
        <template v-slot:header>
          Cured people
        </template>

        <apexchart
          width="100%"
          height="200"
          type="bar"
          :options="cured.options"
          :series="cured.series"
        />
      </card>

      <card class="statistics__block" :header-color="'blue'">
        <template v-slot:header>
          Users
        </template>

        <apexchart
          width="100%"
          height="200"
          type="area"
          :options="users.options"
          :series="users.series"
        />
      </card>

      <card class="statistics__block" :header-color="'salmon'">
        <template v-slot:header>
          Donations
        </template>

        <apexchart
          width="100%"
          height="200"
          type="line"
          :options="donations.options"
          :series="donations.series"
        />
      </card>
    </div>
  </section>
</template>

<script>
import PageHead from "@/components/PageHead.vue";
import { adscore, users, cured, donations } from "@/data/statistics.js";

export default {
  name: "Statistics",

  components: { PageHead },

  data() {
    return {
      adscore,
      users,
      cured,
      donations
    };
  }
};
</script>
