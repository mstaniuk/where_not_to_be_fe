<template>
  <form class="form description-form">
    <div class="form__field-container">
      <label for="title" class="form__label">
        {{ type }} title (max. 90 characters)
      </label>
      <input id="title" name="title" class="form__field" type="text" />
    </div>

    <div class="form__field-container">
      <label for="description" class="form__label">
        {{ type }} description
      </label>
      <textarea
        id="description"
        name="description"
        rows="5"
        class="form__field"
      />
    </div>

    <div class="form__field-container form__field-container--left">
      <label for="time" class="form__label">{{ timeFieldLabel }}</label>
      <input id="time" name="time" class="form__field" type="text" />
    </div>

    <div
      v-if="is('task')"
      class="form__field-container form__field-container--right"
    >
      <label for="repeat" class="form__label">Repeat</label>
      <input id="repeat" name="repeat" class="form__field" type="text" />
    </div>

    <div v-else class="form__field-container form__field-container--right">
      <label for="target" class="form__label">Target</label>
      <input id="target" name="target" class="form__field" type="number" />
    </div>

    <div class="form__field-container form__field-container--left">
      <label for="email" class="form__label">Email</label>
      <input id="email" name="email" class="form__field" type="email" />
    </div>

    <div class="form__field-container form__field-container--right">
      <label for="phone" class="form__label">Phone</label>
      <input id="phone" name="phon" class="form__field" type="phone" />
    </div>
  </form>
</template>

<script>
export default {
  name: "DescriptionForm",

  computed: {
    type() {
      return this.is("task") || this.is("action");
    },

    timeFieldLabel() {
      return this.is("task")
        ? "Prefered time"
        : this.is("action")
        ? "Date of the action"
        : "Time";
    }
  },

  methods: {
    is(type) {
      return this.$route.path.includes(type) ? type : null;
    }
  }
};
</script>
