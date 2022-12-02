<template>
  <div>
    <v-text-field
      v-model="search"
      hide-details
      label="Search for a vendor"
      placeholder="Search for a vendor"
      dense
      outlined
      append-icon="mdi-magnify"
    >
    </v-text-field>
    <br />
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          v-model="selectedLocation"
          :items="locations"
          label="Filter by Location"
          dense
          outlined
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          v-model="selectedCategory"
          :items="categories"
          label="Filter by Category"
          dense
          outlined
        ></v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import _ from "lodash";
import { mapState, mapActions } from "vuex";

export default {
  name: "VendorsSearch",
  data() {
    return {
      categories: [
        "All",
        "Indian",
        "Chinese",
        "Italian",
        "Mexican",
        "Thai",
        "Lebanese",
      ],
      locations: [
        "All",
        "Hamilton",
        "Toronto",
        "Mississauga",
        "Brampton",
        "Oakville",
      ],
      search: "",
      selectedCategory: "All",
      selectedLocation: "All",
    };
  },

  watch: {
    search: _.debounce(async function () {
      const route = {
        name: "vendors",
        query: {
          search: this.search,
          category: this.selectedCategory,
          location: this.selectedLocation,
        },
      };
      if (this.search !== "") {
        route.query = {
          search: this.search,
          category: this.selectedCategory,
          location: this.selectedLocation,
        };
      }
      this.$router.push(route);
    }, 500),

    selectedCategory: _.debounce(async function () {
      const route = {
        name: "vendors",
        query: {
          search: this.search,
          category: this.selectedCategory,
          location: this.selectedLocation,
        },
      };
      if (this.selectedCategory !== "All") {
        route.query = {
          search: this.search,
          category: this.selectedCategory,
          location: this.selectedLocation,
        };
      }
      this.$router.push(route);
    }, 500),

    selectedLocation: _.debounce(async function () {
      const route = {
        name: "vendors",
        query: {
          search: this.search,
          category: this.selectedCategory,
          location: this.selectedLocation,
        },
      };
      if (this.selectedLocation !== "All") {
        route.query = {
          search: this.search,
          category: this.selectedCategory,
          location: this.selectedLocation,
        };
      }
      this.$router.push(route);
    }, 500),

    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.search = value;
      },
    },

    "$route.query.category": {
      immediate: true,
      async handler(value) {
        this.selectedCategory = value;
      },
    },

    "$route.query.location": {
      immediate: true,
      async handler(value) {
        this.selectedLocation = value;
      },
    },
  },

  methods: {
    ...mapActions("vendor", ["getVendors"]),
  },

  computed: {
    ...mapState("vendor", ["vendors"]),
  },

  mounted() {
    this.getVendors();
  },
};
</script>

<style></style>
