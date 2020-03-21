<template>
  <popover class="popover-create" :position="['right', 'top']">
    <div class="popover-create__option">
      <h3 class="brygada">Single task</h3>
      <p>
        This type of action is for finding help in daily stuff like shopping,
        taking dog for a walk or bring some food.
      </p>
      <router-link class="popover-create__btn" :to="{ path: '/help/new-task' }">
        <i class="icon icon-plus" />
      </router-link>
    </div>

    <div class="popover-create__option">
      <h3 class="brygada">Crowd action</h3>
      <p>
        You can organize some charity actions like making masks, delivering food
        or something. Find the team!
      </p>
      <router-link
        class="popover-create__btn"
        :to="{ path: '/help/new-action' }"
      >
        <i class="icon icon-plus" />
      </router-link>
    </div>
  </popover>
</template>

<script>
import Popover from "@/components/Popover.vue";

export default {
  name: "PopoverCreate",

  components: { Popover }
};
</script>
