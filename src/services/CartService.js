import Api from "@/services/Api";

export default {
  // Get all carts by customer id
  index(customerId) {
    return Api().get(`customers/${customerId}/carts`);
  },

  // Get a cart by customer id and cart id
  show(customerId, cartId) {
    return Api().get(`customers/${customerId}/carts/${cartId}`);
  },

  // Create a cart by customer id if it doesn't exist or add a product to a cart by customer id and cart id
  post(customerId, product) {
    return Api().post(`customers/${customerId}/carts/`, product);
  },

  // add a product to a cart by customer id and cart id
  // post(customerId, cartId, product) {
  //   return Api().post(`customers/${customerId}/carts/${cartId}`, product);
  // },

  // Create a cart by customer id
  // post(customerId, cart) {
  //   return Api().post(`customers/${customerId}/carts`, cart);
  // },

  // Update a cart by customer id and cart id
  put(customerId, cartId, cart) {
    return Api().put(`customers/${customerId}/carts/${cartId}`, cart);
  },

  // Delete a cart by customer id and cart id
  delete(customerId, cartId) {
    return Api().delete(`customers/${customerId}/carts/${cartId}`);
  },

  // Delete all carts by customer id
  deleteAll(customerId) {
    return Api().delete(`customers/${customerId}/carts`);
  },

  // Add a product to a cart by customer id and cart id
  // addProduct(customerId, cartId, product) {
  //   return Api().post(`customers/${customerId}/carts/${cartId}`, product);
  // },

  // Remove a product from a cart by customer id and cart id
  removeProduct(customerId, cartId, product) {
    return Api().delete(`customers/${customerId}/carts/${cartId}`, product);
  },

  // Get all products in a cart by customer id and cart id
  getProducts(customerId, cartId) {
    return Api().get(`customers/${customerId}/carts/${cartId}`);
  },
};

// index() {
//   return Api().get("cart");
// },
// show(cartId) {
//   return Api().get(`cart/${cartId}`);
// },
// post(cart) {
//   return Api().post("cart", cart);
// },
// put(cart) {
//   return Api().put(`cart/${cart.id}`, cart);
// },
// delete(cartId) {
//   return Api().delete(`cart/${cartId}`);
// },
// getProducts(cartId) {
//   return Api().get(`cart/${cartId}/products`)
// },
// getProduct(cartId, productId) {
//   return Api().get(`cart/${cartId}/products/${productId}`)
// },
// postProduct(cartId, product) {
//   return Api().post(`cart/${cartId}/products`, product)
// },
// putProduct(cartId, product) {
//   return Api().put(`cart/${cartId}/products/${product.id}`, product)
// },
// deleteProduct(cartId, productId) {
//   return Api().delete(`cart/${cartId}/products/${productId}`)
// },
