<template>
  <div>
    <v-card>
      <v-card-title>Your Cart</v-card-title>
      <v-card-text>
        <p></p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "view-cart",
  computed: {
    ...mapGetters(["cart"]),
    ...mapGetters("auth", ["customer"]),
  },
};
</script>

<style scoped></style>
