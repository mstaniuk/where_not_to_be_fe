<template>
  <form class="form description-form">
    <div class="form__field-container">
      <label for="title" class="form__label">
        {{ type }} title (max. 90 characters)
      </label>
      <input
        id="title"
        v-model="fields.title.value"
        name="title"
        class="form__field"
        type="text"
        :class="{ 'form__field--error': fields.title.error }"
        @blur="handleFieldChange('title')"
        @focus="fields.title.error = null"
      />
      <div v-if="fields.title.error" class="form__info form__info--error">
        {{ fields.title.error }}
      </div>
    </div>

    <div class="form__field-container">
      <label for="description" class="form__label">
        {{ type }} description
      </label>
      <textarea
        id="description"
        v-model="fields.description.value"
        name="description"
        rows="5"
        class="form__field"
        :class="{ 'form__field--error': fields.description.error }"
        @blur="handleFieldChange('description')"
        @focus="fields.description.error = null"
      />
      <div v-if="fields.description.error" class="form__info form__info--error">
        {{ fields.description.error }}
      </div>
    </div>

    <div class="form__field-container form__field-container--left">
      <label for="time" class="form__label">{{ timeFieldLabel }}</label>
      <input
        id="time"
        v-model="fields.time.value"
        name="time"
        class="form__field"
        type="text"
        @blur="handleFieldChange('time')"
      />
    </div>

    <div
      v-if="is('task')"
      class="form__field-container form__field-container--right"
    >
      <label for="repeat" class="form__label">Repeat</label>
      <input
        id="repeat"
        v-model="fields.repeat.value"
        name="repeat"
        class="form__field"
        type="text"
        @blur="handleFieldChange('repeat')"
      />
    </div>

    <div v-else class="form__field-container form__field-container--right">
      <label for="target" class="form__label">Target</label>
      <input
        id="target"
        v-model="fields.target.value"
        name="target"
        class="form__field"
        type="number"
        min="0"
        @blur="handleFieldChange('target')"
      />
    </div>

    <div class="form__field-container form__field-container--left">
      <label for="email" class="form__label">Email</label>
      <input
        id="email"
        v-model="fields.email.value"
        name="email"
        class="form__field"
        type="email"
        :class="{ 'form__field--error': fields.email.error }"
        @blur="handleFieldChange('email')"
        @focus="fields.email.error = null"
      />

      <div v-if="fields.email.error" class="form__info form__info--error">
        {{ fields.email.error }}
      </div>
    </div>

    <div class="form__field-container form__field-container--right">
      <label for="phone" class="form__label">Phone</label>
      <input
        id="phone"
        v-model="fields.phone.value"
        name="phone"
        class="form__field"
        type="tel"
        @blur="handleFieldChange('phone')"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "DescriptionForm",
  data() {
    return {
      fields: {
        title: {
          value: "",
          error: null
        },
        description: {
          value: "",
          error: null
        },
        time: {
          value: "",
          error: null
        },
        repeat: {
          value: "",
          error: null
        },
        target: {
          value: "",
          error: null
        },
        email: {
          value: "",
          error: null
        },
        phone: {
          value: "",
          error: null
        }
      }
    };
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
  mounted() {
    for (let fieldKey of Reflect.ownKeys(this.fields)) {
      const fieldValue = localStorage.getItem(`${this.type}_form_${fieldKey}`);
      if (fieldValue) {
        this.fields[fieldKey].value = fieldValue;
      }
    }
  },

  methods: {
    is(type) {
      return this.$route.path.includes(type) ? type : null;
    },
    handleFieldChange(name) {
      switch (name) {
        case "title":
          if (this.fields.title.value.length > 90) {
            this.fields.title.error =
              "Title should not be longer that 90 characters.";
          } else if (this.fields.title.value.length < 10) {
            this.fields.title.error =
              "Title should be longer that 10 characters.";
          } else {
            this.fields.title.error = null;
          }
          break;
        case "description":
          {
            if (this.fields.description.value.length > 256) {
              this.fields.description.error =
                "Description should not be longer that 256 characters.";
            } else if (this.fields.description.value.length < 20) {
              this.fields.description.error =
                "Description should be longer that 20 characters.";
            } else {
              this.fields.description.error = null;
            }
          }
          break;
        case "email":
          {
            if (!/(.+)@(.+){2,}\.(.+){2,}/.test(this.fields.email.value)) {
              this.fields.email.error = "Incorrect email address.";
            } else {
              this.fields.email.error = null;
            }
          }
          break;
      }

      localStorage.setItem(
        `${this.type}_form_${name}`,
        this.fields[name].value
      );
    }
  }
};
</script>
