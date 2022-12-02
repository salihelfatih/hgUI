<template>
  <div>
    <VendorsSearch />
    <v-row justify="center" class="space">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="vendor in vendors"
        :key="vendor.id"
      >
        <VendorCard :vendor="vendor" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import VendorCard from "./VendorCard";
import VendorsSearch from "./VendorsSearch";

export default {
  // name: "VendorsList",
  data() {
    return {};
  },
  components: {
    VendorCard,
    VendorsSearch,
  },

  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        await this.getVendors(value);
      },
    },

    "$route.query.category": {
      immediate: true,
      async handler(value) {
        await this.getVendors(value);
      },
    },

    "$route.query.location": {
      immediate: true,
      async handler(value) {
        await this.getVendors(value);
      },
    },
  },

  computed: {
    ...mapState("vendor", ["vendors"]),
  },

  mounted() {
    this.getVendors();
  },

  methods: {
    ...mapActions("vendor", ["getVendors"]),
  },
};
</script>

<style></style>
