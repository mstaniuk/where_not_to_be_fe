<template>
  <section id="notifications" class="page">
    <PageHead>
      <template v-slot:title>
        Notifications
      </template>
    </PageHead>

    <div class="notifications">
      <h2 class="notifications__section-title">Unread</h2>
      <card
        v-for="item in unread"
        :key="item.title"
        :class="['notifications__item', `notifications__item--${item.type}`]"
      >
        <div class="notifications__text">
          <h4 class="notifications__title">
            {{ item.title }}
          </h4>
          <p>{{ item.message }}</p>
        </div>

        <div class="notifications__meta">
          <span>{{ item.date | date }}</span>
        </div>

        <div class="notifications__actions">
          <span @click="markAsRead(item)">Mark as read</span>
          <span @click="remove(item, unread)">Delete</span>
        </div>
      </card>
    </div>

    <div class="notifications">
      <h2 class="notifications__section-title">History</h2>
      <card
        v-for="item in read"
        :key="item.title"
        class="notifications__item notifications__item--old"
      >
        <div class="notifications__text">
          <h4 class="notifications__title">
            {{ item.title }}
          </h4>
          <p>{{ item.message }}</p>
        </div>

        <div class="notifications__meta">
          <span>{{ item.date | date }}</span>
        </div>

        <div class="notifications__actions">
          <span @click="remove(item, read)">Delete</span>
        </div>
      </card>
    </div>
  </section>
</template>

<script>
import PageHead from "@/components/PageHead.vue";
import Card from "@/components/Card.vue";
import { unread, read } from "@/data/notifications";

export default {
  name: "Notifiactions",

  components: { Card, PageHead },

  data() {
    return {
      unread,
      read
    };
  },

  methods: {
    markAsRead(item) {
      const index = this.unread.indexOf(item);
      const markedAsRead = this.unread.splice(index, 1);
      this.read = [item, ...this.read];
    },

    remove(item, list) {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }
};
</script>
