import Api from "@/services/Api";

export default {
  // Get all carts by customer id
  index(customerId) {
    return Api().get(`customers/${customerId}/carts`);
  },

  // Get a cart by id
  show(cartId) {
    return Api().get(`/carts/${cartId}`);
  },

  // add a product to a cart by customer id
  post(customerId, product) {
    return Api().post(`customers/${customerId}/carts/`, product);
  },

  // update a cart by id
  put(cartId, product) {
    return Api().put(`/carts/${cartId}`, product);
  },

  // delete a cart by id
  delete(cartId) {
    return Api().delete(`/carts/${cartId}`);
  },

  // delete a product from a cart by id
  deleteProduct(cartId, productId) {
    return Api().delete(`/carts/${cartId}/products/${productId}`);
  },

  // delete all carts by customer id
  deleteAll(customerId) {
    return Api().delete(`customers/${customerId}/carts`);
  },

  // get all carts
  findAllCarts() {
    return Api().get(`/carts`);
  },
};
