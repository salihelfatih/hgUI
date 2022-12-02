<template>
  <v-app>
    <TopBar />
    <v-main>
      <v-container fluid align-center>
        <router-view />
      </v-container>
    </v-main>
    <br />
    <FooterSection />
  </v-app>
</template>

<script>
import TopBar from "@/components/globals/TopBar";
import FooterSection from "@/components/globals/FooterSection";

export default {
  name: "App",

  components: {
    TopBar,
    FooterSection,
  },

  data: () => ({
    //
  }),
};
</script>
