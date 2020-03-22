<template>
  <div class="login">
    <div class="login__main">
      <img
        class="login__app-logo"
        :src="AppLogo"
        alt="Avoidly application logo"
      />
      <card class="login__form">
        <h2>Welcome to <strong>Avoidly!</strong></h2>
        <p>
          We’re really glad that you want to help your local society. Type your
          e-mail to sign in and care about health together!
        </p>

        <div class="login__fields">
          <div class="login__form-field">
            <label class="form__label" for="login">Login</label>
            <input
              id="login"
              v-model="login"
              class="form__field"
              name="login"
              type="text"
            />
          </div>

          <div class="login__form-field">
            <label class="form__label" for="password">Password</label>
            <input
              id="password"
              v-model="password"
              class="form__field"
              name="password"
              type="password"
            />
          </div>
        </div>

        <div class="login__buttons">
          <router-link class="btn btn--filled btn--navy" :to="{ path: '/' }">
            SIGN IN
          </router-link>
          <button type="button" class="btn btn--filled btn--blue btn--small">
            CREATE ACCOUNT
          </button>
        </div>
      </card>
    </div>

    <div class="login__illustration"></div>
  </div>
</template>

<script>
import AppLogo from "@/assets/images/AppLogo.svg";

export default {
  name: "Login",

  data() {
    return {
      AppLogo,
      login: "michael-scott",
      password: "franek-dolas"
    };
  }
};
</script>
