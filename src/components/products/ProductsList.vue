<template>
  <div>
    <ProductsSearch />
    <v-row justify="center" class="space">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="product in products"
        :key="product.id"
      >
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ProductCard from "./ProductCard";
import ProductsSearch from "./ProductsSearch";

export default {
  components: {
    ProductCard,
    ProductsSearch,
  },

  data() {
    return {
      quantity: 1,
    };
  },

  computed: {
    ...mapState("vendor", ["vendors"]),
    ...mapState("product", ["products"]),
    ...mapState("cart", ["cart"]),
  },

  watch: {
    products() {
      this.$store.dispatch("product/getProducts");
    },

    "$route.query.search": {
      immediate: true,
      async handler(value) {
        await this.getProducts(value);
      },
    },

    "$route.query.price": {
      immediate: true,
      async handler(value) {
        await this.getProducts(value);
      },
    },

    "$route.query.calories": {
      immediate: true,
      async handler(value) {
        await this.getProducts(value);
      },
    },
  },

  mounted() {
    this.getProducts();
  },

  methods: {
    ...mapActions("product", ["getProducts"]),
    ...mapActions("cart", ["addToCart"]),
    // ...mapActions("fave", ["addToFaves"]),
  },
};
</script>

<style></style>
