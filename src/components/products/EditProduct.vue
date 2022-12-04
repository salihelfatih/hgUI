<template>
  <panel title="Edit Product">
    <!-- <v-text-field
      v-model="product.vendorId"
      label="Vendor Id"
      type="number"
      required
      :rules="[required]"
    ></v-text-field> -->
    <v-text-field
      v-model="product.name"
      label="Product Name"
      required
      :rules="[required]"
    ></v-text-field>
    <v-text-field
      v-model="product.price"
      label="Price"
      type="number"
      required
      :rules="[required]"
    ></v-text-field>
    <v-text-field
      v-model="product.image"
      label="Image"
      required
      :rules="[required]"
    ></v-text-field>
    <v-text-field
      v-model="product.calories"
      label="Calories"
      type="number"
      required
      :rules="[required]"
    ></v-text-field>
    <v-text-field
      v-model="product.fat"
      label="Fat"
      type="number"
      required
      :rules="[required]"
    ></v-text-field>
    <v-text-field
      v-model="product.carbs"
      label="Carbs"
      type="number"
      required
      :rules="[required]"
    ></v-text-field>
    <v-text-field
      v-model="product.protein"
      label="Protein"
      type="number"
      required
      :rules="[required]"
    ></v-text-field>
    <v-text-field
      v-model="product.stock"
      type="number"
      label="Stock"
      required
      :rules="[required]"
    ></v-text-field>
    <v-text-field
      v-model="product.description"
      label="Description"
      multi-line
      required
      :rules="[required]"
    ></v-text-field>
    <div style="margin-bottom: 1rem" class="error--text" v-html="error"></div>
    <br />
    <v-btn class="deep-purple darken-4" block dark @click="editProduct"
      >Update Product</v-btn
    >
  </panel>
</template>

<script>
import Panel from "@/components/globals/PanelBox";
import ProductService from "@/services/ProductService";

export default {
  data() {
    return {
      product: {
        name: "",
        price: "",
        image: "",
        description: "",
        calories: "",
        protein: "",
        fat: "",
        carbs: "",
        stock: "",
        // vendorId: "",
      },
      error: null,
      required: (value) => !!value || "Required.",
    };
  },
  methods: {
    async editProduct() {
      this.error = null;
      const areAllFieldsFilledIn = Object.keys(this.product).every(
        (key) => !!this.product[key]
      );
      if (!areAllFieldsFilledIn) {
        this.error = "Please fill in all the required fields.";
        return;
      }

      try {
        await ProductService.put(this.product);
        console.log(this.product);
        this.$router.push({
          name: "vendor-products",
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
