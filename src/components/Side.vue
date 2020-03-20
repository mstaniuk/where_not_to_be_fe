<template>
  <div class="side">
    <div class="user">
      <picture
        class="user__avatar"
        :style="`background-image: url('${avatarUrl}')`"
      />

      <div class="user__name">
        <span>{{ user.firstname }}</span>
        <strong>{{ user.lastname }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
import avatarFallback from "@/assets/images/avatar.png";

export default {
  name: "Side",

  data() {
    return {
      user: {
        firstname: "Grzegorz",
        lastname: "Brzęczyszczykiewicz",
        avatar: null
      }
    }
  },

  computed: {
    avatarUrl() {
      return this.user.avatar || avatarFallback;
    }
  }
}
</script>

<style lang="scss">
.side {
  background-color: $color-navy;
}

.user {
  &__name {
    color: $color-white;
  }

  &__avatar {
    width: 60px;
    height: 60px;
  }
}
</style>
