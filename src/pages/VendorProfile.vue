<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <img :src="vendor.profilePic" class="w-100 rounded" />
        </v-card>
      </v-col>

      <v-col cols="12" md="8">
        <v-card>
          <v-card-title class="headline">
            {{ vendor.firstName }} {{ vendor.lastName }}
          </v-card-title>
          <v-card-text>
            <p>{{ vendor.kitchenCategory }}</p>
            <p>{{ vendor.kitchenDescription }}</p>
            <p>{{ vendor.address }}</p>
            <p>{{ vendor.phoneNumber }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "VendorProfile",
  props: ["vendorId"],

  data() {
    return {
      quantity: 1,
    };
  },

  computed: {
    ...mapState("vendor", ["vendor"]),
  },

  mounted() {
    this.getVendor(this.vendorId);
  },

  methods: {
    ...mapActions("vendor", ["getVendor"]),
    goToKitchen() {
      this.$router.push({
        name: "view-vendor",
        params: { vendorId: this.vendor.id },
      });
    },
  },
};
</script>

<style></style>
