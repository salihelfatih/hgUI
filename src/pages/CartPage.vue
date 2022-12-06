<template>
  <div>
    <v-card>
      <v-card-title>Your Cart</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Product </v-list-item-title>
              <v-list-item-subtitle>Quantity</v-list-item-subtitle>
              <v-list-item-subtitle>Price</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click="increaseQuantity(item)">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-list-item-action>
            <v-list-item-action>
              <v-btn icon @click="decreaseQuantity(item)">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
            </v-list-item-action>
            <v-list-item-action>
              <v-btn icon @click="removeFromCart(item)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn dark block color="deep-purple darken-4" @click="checkout"
          >Checkout</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "view-cart",
  props: ["cartId"],

  computed: {
    ...mapGetters(["cart"]),
    ...mapGetters("auth", ["customer"]),
    ...mapState(["getCart"]),
    ...mapState(["cartProduct"]),
    ...mapState(["cart"]),
    cartProduct() {
      return this.cart.find((item) => item.id === this.cartId);
    },
  },
  methods: {
    ...mapActions(["increaseQuantity"]),
    ...mapActions(["decreaseQuantity"]),
    ...mapActions(["removeFromCart"]),
  },
  // created() {
  //   this.getCart();
  // },
};
</script>

<style scoped></style>
