<template>
  <div>
    <v-card>
      <v-card-title> About </v-card-title>

      <v-card-text>
        <p>
          This is an example SPA application built with the
          <a href="https://vuetifyjs.com" target="_blank">Vuetify</a>
          UI Library.
        </p>
        <p>
          The source code for this application is available on
          <a
            href="https://github.com/salihelfatih/HomemadeGoodies "
            target="_blank"
            >GitHub</a
          >.
        </p>
      </v-card-text>
    </v-card>
    <br />
    <v-row>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title>How to Use the app as a vendor</v-card-title>
          <v-card-text>
            <p>
              To use the app as a vendor, you need to register as a vendor
              first. Then you can login and add products to your store. You can
              also edit and delete your products.
            </p>
            <p>
              This app is a simple CRUD app that allows you to create, read,
              update, and delete products. You can also search for products by
              name.
            </p>
            <p>
              To create a product, click the "Create Product" button. You will
              be redirected to a form where you can enter the product's name,
              price, and description. Click the "Create" button to save the
              product.
            </p>
            <p>
              To update a product, click the pencil icon next to the product you
              want to update. You will be redirected to a form where you can
              edit the product's name, price, and description. Click the "Save"
              button to save the changes.
            </p>
            <p>
              To delete a product, click the trash can icon next to the product
              you want to delete. You will be prompted to confirm that you want
              to delete the product. Click the "OK" button to delete the
              product.
            </p>
            <p>
              To search for a product, enter the product's name in the search
              box. The table will be filtered to show only products that match
              the search term.
            </p>
            <p>To reset the table, click the "Reset" button.</p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title>How to Use the app as a customer</v-card-title>
          <v-card-text>
            <p>
              To use the app as a customer, you need to register as a customer
              first. Then you can login and view products from all vendors. You
              can also search for products by name.
            </p>
            <p>
              This app is a simple CRUD app that allows you to add products to
              your cart and place an order. You can also favourite products and
              view your favourite products.
            </p>
            <p>
              To search for a product, enter the product's name in the search
              box. The table will be filtered to show only products that match
              the search term.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script></script>

<style scoped></style>
