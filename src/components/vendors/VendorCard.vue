<template>
  <div>
    <v-card>
      <v-img :src="vendor.profilePic" alt="Vendor Profile Picture" />
      <v-card-title>{{ vendor.kitchenName }}</v-card-title>
      <v-card-text>
        <p>{{ vendor.kitchenCategory }}</p>
        <p>{{ vendor.address }}</p>
        <p>{{ vendor.phoneNumber }}</p>
        <p>{{ vendor.kitchenDescription }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn text @click="goToVendor">View</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["vendor"],
  methods: {
    goToVendor() {
      this.$router.push({
        name: "view-vendor",
        params: { vendorId: this.vendor.id },
      });
    },
  },
};
</script>

<style></style>
