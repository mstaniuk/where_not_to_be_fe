<template>
  <form class="form description-form">
    <div class="form__field-container">
      <label for="title" class="form__label"
        >Task title (max. 90 characters)</label
      >
      <input id="title" name="title" class="form__field" type="text" />
    </div>

    <div class="form__field-container">
      <label for="description" class="form__label">Task description</label>
      <textarea
        id="description"
        name="description"
        rows="5"
        class="form__field"
      />
    </div>

    <div class="form__field-container form__field-container--left">
      <label for="time" class="form__label">Prefered time</label>
      <input id="time" name="time" class="form__field" type="text" />
    </div>

    <div class="form__field-container form__field-container--right">
      <label for="repeat" class="form__label">Repeat</label>
      <input id="repeat" name="repeat" class="form__field" type="text" />
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
  name: "DescriptionForm"
};
</script>
