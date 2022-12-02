<template>
  <div class="row mt-5" v-if="product">
    <v-row>
      <v-col cols="12" sm="6">
        <v-card>
          <img :src="product.image" class="w-100 rounded" />
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title class="headline">{{ product.name }}</v-card-title>
          <v-card-text>{{ product.description }}</v-card-text>
          <v-card-text>${{ product.price }}</v-card-text>
          <!-- <v-card-text>{{ product.calories }}</v-card-text> -->
          <v-card-actions>
            <v-text-field
              v-model="quantity"
              class="col-4"
              label="Quantity"
              type="number"
              outlined
              dense
              hide-details
            />
          </v-card-actions>
          <br />
          <v-card-actions>
            <v-btn
              color="deep-purple darken-4"
              @click="addToCart(product)"
              dark
            >
              Add to cart
            </v-btn>
            <v-btn
              color="deep-purple darken-4"
              @click="addToFaves(product)"
              dark
            >
              Add to favorites
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["productId"],

  components: {},

  data() {
    return {
      quantity: 1,
    };
  },

  computed: {
    ...mapState("product", ["product"]),
    ...mapState("cart", ["cart"]),
  },

  mounted() {
    this.getProduct(this.productId);
  },

  methods: {
    ...mapActions("product", ["getProduct"]),
    ...mapActions("cart", ["addProductToCart"]),
    ...mapActions("fave", ["addProductToFave"]),

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
  },
};
</script>

<style></style>
