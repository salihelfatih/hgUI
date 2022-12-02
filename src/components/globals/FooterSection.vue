<template>
  <v-footer color="deep-purple darken-5" padless>
    <v-row justify="center" no-gutters>
      <v-btn @click="returnHome" color="white" text rounded class="my-2">
        Home</v-btn
      >
      <v-btn @click="goToAbout" color="white" text rounded class="my-2">
        About</v-btn
      >
      <v-btn @click="goToContact" color="white" text rounded class="my-2">
        Contact Us</v-btn
      >
      <v-col
        class="deep-purple darken-4 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} —
        <a
          class="white--text"
          href="https://github.com/salihelfatih/HomemadeGoodies "
          target="_blank"
          ><strong>Homemade Goods</strong></a
        >
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Contact Us"],
  }),

  methods: {
    returnHome() {
      this.$router.push({ name: "Home" });
    },
    goToAbout() {
      this.$router.push({ name: "About" });
    },
    goToContact() {
      this.$router.push({ name: "Contact" });
    },
  },
};
</script>

<style scoped></style>
