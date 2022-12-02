<template>
  <div>
    <v-card>
      <v-img :src="product.image" alt="Vendor Profile Picture" />
      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-text>
        <p>${{ product.price }}</p>
        <p>{{ product.calories }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          dark
          block
          color="deep-purple darken-4"
          @click="viewProduct(product.id)"
        >
          <v-icon>mdi-eye</v-icon>
        </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn
          dark
          block
          color="deep-purple darken-4"
          @click="addToCart(product)"
          :disabled="product.inCart"
        >
          <v-icon v-if="product.inCart">mdi-cart</v-icon>
          <v-icon v-else>mdi-cart-outline</v-icon>
        </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn
          dark
          block
          color="deep-purple darken-4"
          @click="addToFaves(product)"
          :disabled="product.inFaves"
        >
          <v-icon v-if="product.inFaves">mdi-heart</v-icon>
          <v-icon v-else>mdi-heart-outline</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["product"],

  data() {
    return {
      quantity: 1,
    };
  },

  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    ...mapActions("fave", ["addProductToFaves"]),

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
        this.addProductToFaves(this.product);
      } else {
        this.$router.push({ name: "login" });
      }
    },
    viewProduct(id) {
      this.$router.push({ name: "view-product", params: { productId: id } });
    },
  },
};
</script>

<style></style>
