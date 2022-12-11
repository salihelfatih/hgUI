<template>
  <div class="row mt-5" v-if="loggedIn && vendor">
    <div class="col-md-12">
      <v-card>
        <v-toolbar color="grey lighten-3">
          <v-toolbar-title>Vendor Dashboard</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn text @click="goToProducts">
            <v-icon>mdi-food</v-icon> Products
          </v-btn>
          <v-btn text @click="goToOrders">
            <v-icon>mdi-cart</v-icon> Orders
          </v-btn>
          <v-btn text @click="goToReports">
            <v-icon>mdi-chart-bar</v-icon> Reports
          </v-btn>
        </v-toolbar>
      </v-card>
    </div>

    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              aspect-ratio="1.75"
            ></v-img>
            <v-card-title class="headline">Products</v-card-title>
            <v-card-text>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="title">
                    {{ products.length }}
                  </v-list-item-title>
                  <v-list-item-subtitle>Products</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
            <v-card-actions>
              <v-btn text @click="goToProducts">View</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              aspect-ratio="1.75"
            ></v-img>
            <v-card-title class="headline">Orders</v-card-title>
            <v-card-text>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="title">
                    <!-- {{ orders }} -->
                  </v-list-item-title>
                  <v-list-item-subtitle>Orders</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
            <v-card-actions>
              <v-btn text @click="goToOrders">View</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              aspect-ratio="1.75"
            ></v-img>
            <v-card-title class="headline">Reports</v-card-title>
            <v-card-text>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="title">
                    <!-- {{ reports }} -->
                  </v-list-item-title>
                  <v-list-item-subtitle>Reports</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
            <v-card-actions>
              <v-btn text @click="goToReports">View</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "vendor-dashboard",
  props: ["vendorId"],

  data() {
    return {
      // orders: [],
      // reports: [],
    };
  },

  components: {},

  computed: {
    ...mapState("vendor", ["vendor"]),
    ...mapState("product", ["products"]),
    ...mapState("order", ["orders"]),
    ...mapState("report", ["reports"]),
    ...mapGetters({
      loggedIn: "auth/loggedIn",
      vendor: "auth/vendor",
    }),
  },

  mounted() {
    this.getVendor(this.vendorId);
  },

  methods: {
    ...mapActions("vendor", ["getVendor"]),
    goToProducts() {
      this.$router.push({
        name: "vendor-products",
        params: { vendorId: this.vendorId },
      });
    },
    goToOrders() {
      this.$router.push({
        name: "vendor-orders",
        params: { vendorId: this.vendorId },
      });
    },
    goToReports() {
      this.$router.push({
        name: "vendor-reports",
        params: { vendorId: this.vendorId },
      });
    },
  },
};
</script>

<style></style>
