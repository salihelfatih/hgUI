<template>
  <v-layout column>
    <v-flex xs6>
      <panel title="Vendor Register">
        <form name="home-goodies-form" autocomplete="off">
          <v-text-field
            required
            :rules="emailRules"
            label="Email"
            v-model="email"
          ></v-text-field>
          <v-text-field
            label="Username"
            type="text"
            v-model="username"
            autocomplete="username"
            required
            :rules="nameRules"
          ></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
            required
            :rules="passowrdRules"
          ></v-text-field>
          <v-text-field
            required
            :rules="nameRules"
            label="First Name"
            type="text"
            v-model="firstName"
            autocomplete="firstName"
          ></v-text-field>
          <v-text-field
            required
            :rules="nameRules"
            label="Last Name"
            type="text"
            v-model="lastName"
            autocomplete="lastName"
          ></v-text-field>
          <v-text-field
            required
            :rules="nameRules"
            label="Phone Number"
            type="text"
            v-model="phoneNumber"
            autocomplete="phoneNumber"
          ></v-text-field>
          <v-text-field
            required
            :rules="nameRules"
            label="Address"
            type="text"
            v-model="address"
            autocomplete="address"
          ></v-text-field>
          <v-text-field
            required
            :rules="nameRules"
            label="Zip Code"
            type="text"
            v-model="zipCode"
            autocomplete="zipCode"
          ></v-text-field>
          <v-text-field
            required
            :rules="nameRules"
            label="Profile Picture"
            type="text"
            v-model="profilePic"
            autocomplete="profilePic"
          ></v-text-field>
          <v-text-field
            required
            label="Kitchen Name"
            type="text"
            v-model="kitchenName"
            autocomplete="kitchenName"
          ></v-text-field>
          <v-text-field
            required
            label="Kitchen Category"
            type="text"
            v-model="kitchenCategory"
            autocomplete="kitchenCategory"
          ></v-text-field>
          <v-text-field
            required
            label="Kitchen Description"
            type="text"
            v-model="kitchenDescription"
            autocomplete="kitchenDescription"
          ></v-text-field>
        </form>
        <br />
        <div>
          <div
            style="margin-bottom: 1rem"
            class="error--text"
            v-html="error"
          ></div>
          <v-btn class="deep-purple darken-4" dark block @click="register"
            >Sign Up</v-btn
          >
        </div>
        <br />
        <p>
          Already signed up?
          <router-link to="/vendors/login">Login here</router-link>
        </p>
        <p>
          Want to sign up as a customer?
          <router-link to="/register">Register here</router-link>
        </p>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from "@/components/globals/PanelBox";

export default {
  data() {
    return {
      email: "",
      password: "",
      username: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      zipCode: "",
      profilePic: "",
      kitchenName: "",
      kitchenCategory: "",
      kitchenDescription: "",
      error: null,
      nameRules: [(v) => !!v || "This field is required"],
      passowrdRules: [
        (v) =>
          !!v ||
          "Please provide a valid password (at least one uppercase letter, one lowercase letter, one number and one special character).",
      ],
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Please provide a valid email",
      ],
    };
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch("auth/registerVendor", {
          email: this.email,
          password: this.password,
          username: this.username,
          firstName: this.firstName,
          lastName: this.lastName,
          phoneNumber: this.phoneNumber,
          address: this.address,
          zipCode: this.zipCode,
          profilePic: this.profilePic,
          kitchenName: this.kitchenName,
          kitchenCategory: this.kitchenCategory,
          kitchenDescription: this.kitchenDescription,
        });
        if (this.$store.state.auth.vendor) {
          this.$router.push("/vendors/login");
        } else {
          this.error = "Invalid registration information";
        }
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
  },
  components: {
    Panel,
  },
};
</script>

<style></style>
