<template>
  <div>
    <v-text-field
      v-model="search"
      hide-details
      label="Search for a product"
      placeholder="Search for a product"
      dense
      outlined
      append-icon="mdi-magnify"
    >
    </v-text-field>
    <br />
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          v-model="selectedPrice"
          :items="prices"
          label="Filter by Price"
          dense
          outlined
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          v-model="selectedCalories"
          :items="calories"
          label="Filter by Calories"
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
  name: "ProductsSearch",

  data() {
    return {
      quantity: 1,
      prices: [
        "All",
        "Under $10",
        "$10 - $20",
        "$20 - $30",
        "$30 - $40",
        "$40 - $50",
        "Over $50",
      ],
      calories: [
        "All",
        "Under 500",
        "500 - 1000",
        "1000 - 1500",
        "1500 - 2000",
        "2000 - 2500",
        "Over 2500",
      ],
      search: "",
      selectedPrice: "All",
      selectedCalories: "All",
    };
  },

  watch: {
    search: _.debounce(async function () {
      const route = {
        name: "view-vendor",
        query: {
          search: this.search,
          price: this.selectedPrice,
          calories: this.selectedCalories,
        },
      };
      if (this.search !== "") {
        route.query = {
          search: this.search,
          price: this.selectedPrice,
          calories: this.selectedCalories,
        };
      }
      this.$router.push(route);
    }, 500),

    selectedPrice: _.debounce(async function () {
      const route = {
        name: "view-vendor",
        query: {
          search: this.search,
          price: this.selectedPrice,
          calories: this.selectedCalories,
        },
      };
      if (this.selectedPrice !== "All") {
        route.query = {
          search: this.search,
          price: this.selectedPrice,
          calories: this.selectedCalories,
        };
      }
      this.$router.push(route);
    }, 500),

    selectedCalories: _.debounce(async function () {
      const route = {
        name: "view-vendor",
        query: {
          search: this.search,
          price: this.selectedPrice,
          calories: this.selectedCalories,
        },
      };
      if (this.selectedCalories !== "All") {
        route.query = {
          search: this.search,
          price: this.selectedPrice,
          calories: this.selectedCalories,
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

    "$route.query.price": {
      immediate: true,
      async handler(value) {
        this.selectedPrice = value;
      },
    },

    "$route.query.calories": {
      immediate: true,
      async handler(value) {
        this.selectedCalories = value;
      },
    },
  },

  computed: {
    ...mapState("product", ["products"]),
  },

  mounted() {
    this.getProducts();
  },

  methods: {
    ...mapActions("product", ["getProducts"]),
  },
};
</script>

<style></style>
