<template>
  <div>
    <v-card>
      <v-card-title>Your Faves</v-card-title>
      <v-card-text>
        <p></p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "view-faves",
  computed: {
    ...mapGetters(["faves"]),
    ...mapGetters("auth", ["customer"]),
  },
};
</script>

<style scoped></style>
