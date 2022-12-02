<template>
  <v-layout row wrap>
    <v-flex xs4>
      <panel title="Item Metadata">
        <v-text-field
          v-model="item.name"
          label="Item Name"
          required
          :rules="[required]"
        ></v-text-field>
        <v-text-field
          v-model="item.price"
          label="Price"
          required
          :rules="[required]"
        ></v-text-field>
        <v-text-field
          v-model="item.image"
          label="Image"
          required
          :rules="[required]"
        ></v-text-field>
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Item Description" class="ml-2">
        <v-text-field
          v-model="item.description"
          label="Description"
          multi-line
          required
          :rules="[required]"
        ></v-text-field>
        <div class="danger-alert" v-if="error">
          {{ error }}
        </div>
        <v-btn class="deep-purple darken-4" dark @click="createItem"
          >Create Item</v-btn
        >
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from "@/components/globals/PanelBox";
import ItemService from "@/services/ProductService";

export default {
  data() {
    return {
      item: {
        name: "",
        price: "",
        image: "",
        description: "",
        calories: "",
        protein: "",
        fat: "",
      },
      error: null,
      required: (value) => !!value || "Required.",
    };
  },
  methods: {
    async createItem() {
      this.error = null;
      const areAllFieldsFilledIn = Object.keys(this.item).every(
        (key) => !!this.item[key]
      );
      if (!areAllFieldsFilledIn) {
        this.error = "Please fill in all the required fields.";
        return;
      }

      try {
        await ItemService.post(this.item);
        this.$router.push({
          name: "items",
        });
      } catch (err) {
        console.log(err);
      }
    },
  },

  components: {
    Panel,
  },
};
</script>

<style scoped></style>
