<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <img :src="customer.profilePic" class="w-100 rounded" />
        </v-card>
      </v-col>

      <v-col cols="12" md="8">
        <v-card>
          <v-card-title class="headline">
            {{ customer.firstName }} {{ customer.lastName }}
          </v-card-title>
          <v-card-text>
            <p>{{ customer.email }}</p>
            <p>{{ customer.phoneNumber }}</p>
            <p>{{ customer.address }}</p>
            <p>{{ customer.zipCode }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "CustomerProfile",
  props: ["customerId"],

  data() {
    return {
      quantity: 1,
    };
  },

  computed: {
    ...mapState("customer", ["customer"]),
  },

  mounted() {
    this.getCustomer(this.customerId);
  },

  methods: {
    ...mapActions("customer", ["getCustomer"]),
    goToKitchen() {
      this.$router.push({
        name: "view-customer",
        params: { customerId: this.customer.id },
      });
    },
  },
};
</script>

<style></style>
