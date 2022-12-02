<template>
  <v-layout column>
    <v-flex xs6>
      <panel title="Customer Login">
        <v-text-field
          required
          :rules="emailRules"
          label="Email"
          v-model="email"
        ></v-text-field>
        <v-text-field
          required
          :rules="passwordRules"
          label="Password"
          type="password"
          v-model="password"
          autocomplete="new-password"
        ></v-text-field>
        <br />
        <div
          style="margin-bottom: 1rem"
          class="error--text"
          v-html="error"
        ></div>
        <v-btn class="deep-purple darken-4" dark block @click="login"
          >Login</v-btn
        >
        <br />
        <p>
          Want to sign in as a vendor?
          <router-link to="/vendors/login">Login here</router-link>
        </p>
        <p>
          Don't have an account yet?
          <router-link to="/register">Register here</router-link>
        </p>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from "@/components/globals/PanelBox";
import { mapActions } from "vuex";

export default {
  name: "CustomerLogin",
  components: {
    Panel,
  },
  data() {
    return {
      email: "",
      password: "",
      error: null,
      emailRules: [
        (v) => !!v || "This field is required",
        (v) => /.+@.+\..+/.test(v) || "Email must be valid",
      ],
      passwordRules: [(v) => !!v || "This field is required"],
    };
  },

  methods: {
    ...mapActions({
      loginCustomer: "auth/loginCustomer",
    }),

    async login() {
      try {
        await this.loginCustomer({
          email: this.email,
          password: this.password,
        });
        if (this.$store.getters["auth/customer"]) {
          this.$router.push("/");
        } else {
          this.error = "Invalid email or password";
        }
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style></style>
