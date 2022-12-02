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
            <router-link
              :to="{
                name: 'vendor-profile',
                params: { vendorId: vendor.id },
              }"
              >{{ vendor.kitchenName }}</router-link
            >
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
    <br />
    <div>
      <ProductsList :products="vendor.products" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ProductsList from "@/components/products/ProductsList";

export default {
  props: ["vendorId", "customerId"],

  components: {
    ProductsList,
  },

  data() {
    return {
      quantity: 1,
    };
  },

  computed: {
    ...mapState("vendor", ["vendor"]),
    ...mapState("product", ["products"]),
    ...mapState("cart", ["cart"]),
    ...mapState("fave", ["fave"]),
    // ...mapState("customer", ["customer"]),
  },

  mounted() {
    this.getVendor(this.vendorId);
    // this.getCustomer(this.customerId);
  },

  methods: {
    ...mapActions("vendor", ["getVendor"]),
    ...mapActions("product", ["getProducts"]),
    ...mapActions("cart", ["addProductToCart"]),
    ...mapActions("fave", ["addProductToFave"]),
    // ...mapActions("customer", ["getCustomer"]),

    addToCart() {
      if (this.$store.state.auth.customer) {
        this.addProductToCart({
          product: this.product,
          quantity: this.quantity,
        });
      } else {
        this.$router.push({ name: "login" });
      }
    },

    addToFaves() {
      if (this.$store.state.auth.customer) {
        this.addProductToFave(this.product);
      } else {
        this.$router.push({ name: "login" });
      }
    },

    goToProfile() {
      this.$router.push({
        name: "vendor-profile",
        params: { vendorId: this.vendor.id },
      });
    },
  },
};
</script>

<style></style>
