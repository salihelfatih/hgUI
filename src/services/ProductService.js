import Api from "@/services/Api";

export default {
  // index() {
  //   return Api().get("products");
  // },

  // get all products for a vendor
  async index(vendorId, search, price, calories) {
    try {
      return await Api().get(`/vendors/${vendorId}/products`, {
        params: {
          search: search,
          price: price,
          calories: calories,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },

  // get a single product
  show(productId) {
    return Api().get(`products/${productId}`);
  },

  // post(product) {
  //   return Api().post("products", product);
  // },
  // put(product) {
  //   return Api().put(`products/${product.id}`, product);
  // },
  // delete(productId) {
  //   return Api().delete(`products/${productId}`);
  // },
  // filter(filter) {
  //   return Api().get(`products?filter=${filter}`);
};
