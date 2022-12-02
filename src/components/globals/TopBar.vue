<template>
  <div>
    <v-toolbar color="deep-purple darken-4" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text @click="returnHome"><v-icon>mdi-home</v-icon></v-btn>
        <v-btn text @click="goToVendors">
          <v-icon>mdi-storefront</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-avatar class="mr-5 ml-5" size="32" rounded>
        <img
          src="../../assets/avocado.png"
          contain
          alt="logo"
          @click="returnHome"
          style="
            cursor: pointer;
            <!-- width: 100px !important; -->
            <!-- height: 200% !important; -->
          "
        />
      </v-avatar>
      <v-spacer></v-spacer>
      <!-- <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="vendors"
        :search-input.sync="search"
        cache-items
        class="mx-3"
        flat
        hide-no-data
        hide-details
        label="Search"
        solo-inverted
        @click:clear="clearSearch"
        @focus="loading = true"
        @blur="loading = false"
        @change="searchVendors"
      >
        >
      </v-autocomplete> -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text @click="goToFaves">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn text @click="goToCart">
          <v-icon>mdi-cart</v-icon> {{ cartCount }}
        </v-btn>
        <v-menu :key="accountKey" :rounded="rounded" offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark icon v-bind="attrs" v-on="on">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-if="!loggedIn"
              @click="goToLogin"
              :key="loginKey"
              :rounded="rounded"
              offset-y
            >
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item>
            <v-list-item
              v-if="loggedIn"
              @click="goToProfile"
              :key="profileKey"
              :rounded="rounded"
              offset-y
            >
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item
              v-if="loggedIn"
              @click="goToDashboard"
              :key="dashboardKey"
              :rounded="rounded"
              offset-y
            >
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>
            <v-list-item
              v-if="loggedIn"
              @click="logout"
              :key="logoutKey"
              :rounded="rounded"
              offset-y
            >
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <br />
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list dense>
        <v-list-item link @click="returnHome">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="goToVendors">
          <v-list-item-icon>
            <v-icon>mdi-storefront</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Vendors</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="goToFaves">
          <v-list-item-icon>
            <v-icon>mdi-heart</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Favorites</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="goToCart">
          <v-list-item-icon>
            <v-icon>mdi-cart</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Cart</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-menu></v-menu>
        <v-list-item v-if="!loggedIn" link @click="goToLogin">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="loggedIn" link @click="goToDashboard">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="loggedIn" link @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <p>{{ customer }}</p> -->
    <!-- <p>{{ vendor }}</p> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {},

  data: () => ({
    drawer: false,
    search: null,
    select: null,
    states: ["Alabama", "Alaska"],
    vendors: [],
    loading: false,
    rounded: false,
    accountKey: "Account",
    loginKey: "Login",
    profileKey: "Profile",
    logoutKey: "Logout",
    dashboardKey: "Dashboard",
  }),

  computed: {
    ...mapGetters({
      loggedIn: "auth/loggedIn",
      customer: "auth/customer",
      vendor: "auth/vendor",
    }),
    cartCount() {
      return this.$store.getters["cart/cartCount"];
    },
    currentRouteName() {
      return this.$route.name;
    },
  },

  methods: {
    returnHome() {
      this.$router.push("/");
    },
    goToVendors() {
      this.$router.push("/vendors");
    },
    goToFaves() {
      if (this.customer) {
        this.$router.push("/customers/" + this.customer.id + "/faves");
      } else {
        this.$router.push("/login");
      }
    },
    goToCart() {
      if (this.customer) {
        this.$router.push("/customers/" + this.customer.id + "/cart");
      } else {
        this.$router.push("/login");
      }
    },
    goToAcount() {
      this.$router.push("/login");
    },
    goToLogin() {
      this.$router.push("/login");
    },
    goToProfile() {
      if (this.customer) {
        this.$router.push("/customers/" + this.customer.id + "/profile");
      } else {
        this.$router.push("/vendors/" + this.vendor.id + "/profile");
      }
    },
    goToDashboard() {
      if (this.customer) {
        this.$router.push("/customers/" + this.customer.id + "/dashboard");
      } else {
        this.$router.push("/vendors/" + this.vendor.id + "/dashboard");
      }
    },
    logout() {
      this.$store.dispatch("auth/logoutCustomer", this.customer);
      this.$store.dispatch("auth/logoutVendor", this.vendor);
      this.$router.push("/");
    },
  },
};
</script>
<style scoped></style>
