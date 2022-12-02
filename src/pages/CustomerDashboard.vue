<template>
  <div class="row mt-5" v-if="customer">
    <div class="col-md-12">
      <v-card>
        <v-toolbar color="grey lighten-3">
          <v-toolbar-title>Customer Dashboard</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn text @click="goToFaves">
            <v-icon>mdi-food</v-icon> Faves
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
            <v-card-title class="headline">Faves</v-card-title>
            <v-card-text>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="title">
                    {{ faves }}
                  </v-list-item-title>
                  <v-list-item-subtitle>Faves</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
            <v-card-actions>
              <v-btn text @click="goToFaves">View</v-btn>
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
import { mapState, mapActions } from "vuex";

export default {
  name: "customer-dashboard",
  props: ["customerId"],

  data() {
    return {
      // orders: [],
      // reports: [],
    };
  },

  components: {},

  computed: {
    ...mapState("customer", ["customer"]),
    ...mapState("product", ["faves"]),
    ...mapState("order", ["orders"]),
    ...mapState("report", ["reports"]),
  },

  mounted() {
    this.getCustomer(this.customerId);
  },

  methods: {
    ...mapActions("customer", ["getCustomer"]),
    goToFaves() {
      this.$router.push({
        name: "customer-faves",
        params: { customerId: this.customerId },
      });
    },
    goToOrders() {
      this.$router.push({
        name: "customer-orders",
        params: { customerId: this.customerId },
      });
    },
    goToReports() {
      this.$router.push({
        name: "customer-reports",
        params: { customerId: this.customerId },
      });
    },
  },
};
</script>

<style></style>
