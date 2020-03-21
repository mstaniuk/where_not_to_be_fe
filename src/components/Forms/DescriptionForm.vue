<template>
  <form class="form description-form">
    <div class="form__field-container">
      <label for="title" class="form__label">
        {{ type }} title (max. 90 characters)
      </label>
      <input
        id="title"
        name="title"
        class="form__field"
        type="text"
        :class="{'form__field--error': titleErrorMessage}"
        v-model="title"
        @blur="handleTitleChange"
        @focus="titleErrorMessage = null"
      />
      <div v-if="titleErrorMessage" class="form__info form__info--error">
        {{ titleErrorMessage }}
      </div>
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
        :class="{'form__field--error': descriptionErrorMessage}"
        v-model="description"
        @blur="handleDescriptionChange"
        @focus="descriptionErrorMessage = null"
      />
      <div v-if="descriptionErrorMessage" class="form__info form__info--error">
        {{ descriptionErrorMessage }}
      </div>
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
      <input id="repeat" name="repeat" class="form__field" type="number" min="0" />
    </div>

    <div v-else class="form__field-container form__field-container--right">
      <label for="target" class="form__label">Target</label>
      <input id="target" name="target" class="form__field" type="number" />
    </div>

    <div class="form__field-container form__field-container--left">
      <label for="email" class="form__label">Email</label>
      <input
         id="email"
         name="email"
         class="form__field"
         type="email"
         :class="{'form__field--error': emailErrorMessage}"
         v-model="email"
         @blur="handleEmailChange"
         @focus="email = null"/>

      <div v-if="emailErrorMessage" class="form__info form__info--error">
        {{ emailErrorMessage }}
      </div>
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
  data() {
    return {
      title: '',
      titleErrorMessage: null,
      description: '',
      descriptionErrorMessage: null,
      email: '',
      emailErrorMessage: null,
    }
  },
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
    },
    handleTitleChange() {
      if(this.title.length > 90) {
        this.titleErrorMessage = "Title should not be longer that 90 characters."
      } else if (this.title.length < 10) {
        this.titleErrorMessage = "Title should be longer that 10 characters."
      } else {
        this.titleErrorMessage = null;
      }
    },
    handleDescriptionChange() {
      if(this.description.length > 256) {
        this.descriptionErrorMessage = "Description should not be longer that 256 characters."
      } else if (this.description.length < 20) {
        this.descriptionErrorMessage = "Description should be longer that 20 characters."
      } else {
        this.descriptionErrorMessage = null;
      }
    },
    handleEmailChange() {
      if(!(/(.+)@(.+){2,}\.(.+){2,}/.test(this.email))) {
        this.emailErrorMessage = "Incorrect email address."
      } else {
        this.emailErrorMessage = null;
      }
    }
  }
};
</script>
