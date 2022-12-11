<template>
  <div>
    <v-card v-if="loggedIn && vendor">
      <v-data-table
        :headers="headers"
        :items="products"
        sort-by="stock"
        class="elevation-1"
        :search="search"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Products CRUD</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>

            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              hide-details
              outlined
              dense
              class="mx-4"
            ></v-text-field>
            <br />

            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{}">
                <v-btn
                  @click="createNewProduct"
                  color="deep-purple darken-4"
                  dark
                  class="mb-2"
                >
                  New Product
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.name"
                          label="Name"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.description"
                          label="Description"
                          single-line
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.stock"
                          label="Stock"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.calories"
                          label="Calories"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.fat"
                          label="Fat (g)"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.carbs"
                          label="Carbs (g)"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.protein"
                          label="Protein (g)"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5"
                  >Are you sure you want to delete this item?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "ProductsTable",

  data: () => ({
    search: "",
    dialog: false,
    dialogDelete: false,
    loading: false,
    headers: [
      {
        text: "Name",
        align: "start",
        value: "name",
      },
      { text: "Price", value: "price" },
      { text: "Description", value: "description" },
      { text: "Stock", value: "stock" },
      { text: "Calories", value: "calories" },
      { text: "Fat", value: "fat" },
      { text: "Carbs", value: "carbs" },
      { text: "Protein", value: "protein" },
      { text: "Actions", value: "actions" },
    ],

    productItems: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      price: "",
      description: "",
      stock: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    ...mapState("vendor", ["vendor"]),
    ...mapGetters("product", ["products"]),
    ...mapGetters({
      loggedIn: "auth/loggedIn",
      vendor: "auth/vendor",
    }),
    formTitle() {
      return "Edit Product";
    },
  },

  mounted() {
    this.getProducts();
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    ...mapActions("product", ["getProducts"]),

    initialize() {
      this.loading = true;
      this.productItems = this.products;
      this.loading = false;
    },

    //     initialize() {
    //   this.loading = true;
    //   this.$store.dispatch("product/getProducts").then(() => {
    //     this.loading = false;
    //   });
    // },

    createNewProduct() {
      this.$router.push({ name: "create-product" });
    },

    editItem(item) {
      // this.editedIndex = this.productItems.indexOf(item);
      // this.editedItem = Object.assign({}, item);
      // this.dialog = true;
      // this.$store.dispatch("product/updateProduct", this.editedItem);
      this.$router.push({
        name: "edit-product",
        params: { productId: item.id },
      });
    },

    deleteItem(item) {
      this.editedIndex = this.productItems.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.productItems.splice(this.editedIndex, 1);
      this.closeDelete();
      this.$store.dispatch("product/deleteProduct", this.editedItem.id);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.productItems[this.editedIndex], this.editedItem);
      } else {
        this.productItems.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style></style>
