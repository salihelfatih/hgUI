import CartService from "../../services/CartService";
// import ProductService from "../../services/ProductService";

export default {
  namespaced: true,
  state: {
    cart: [],
    cartProduct: null,
  },
  getters: {
    cart: (state) => state.cart,
  },
  actions: {
    // get all products in a cart by customer id and cart id
    async getCartProducts({ commit }, { customerId, cartId }) {
      try {
        const response = await CartService.index(customerId, cartId);
        commit("SET_CARTS", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    // get a cart by customer id and cart id
    async getCart({ commit }, { customerId, cartId }) {
      try {
        const response = await CartService.show(customerId, cartId);
        commit("SET_CART", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async addProductToCart({ commit }) {
      try {
        const customer = this.getters["auth/customer"];
        const product = this.getters["product/product"];
        const cardProduct = {
          productId: product.id,
          quantity: 1,
        };
        const response = await CartService.post(customer.id, cardProduct);
        commit("ADD_PRODUCT_TO_CART", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    // remove a product id from a cart by customer id
    async removeProductFromCart({ commit }, { product }) {
      try {
        const customer = this.getters["auth/customer"];
        const response = await CartService.delete(customer.id, product);
        commit("REMOVE_PRODUCT_FROM_CART", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    SET_CARTS: (state, carts) => (state.carts = carts),
    SET_CART: (state, cart) => (state.cart = cart),
    ADD_PRODUCT_TO_CART: (state, cartProduct) => {
      state.cartProduct = cartProduct;
    },
    REMOVE_PRODUCT_FROM_CART: (state, productId) =>
      (state.cart = state.cart.filter((product) => product.id !== productId)),
    CLEAR_CART: (state) => (state.cart = []),
    getCartProducts(state, { cartId }) {
      state.cart = state.cart.filter((cart) => cart.id === cartId);
    },
  },
};

// // async createCart({ commit }, { customerId, cart }) {
//   try {
//     const response = await CartService.post(customerId, cart);
//     commit("SET_CART", response.data);
//   } catch (error) {
//     console.log(error);
//   }
// },

// // Get all carts by customer id
// getCarts({ commit }, customerId) {
//   CartService.index(customerId)
//     .then((response) => {
//       commit("SET_CARTS", response.data);
//     })
//     .catch((error) => {
//       console.log("There was an error:", error.response);
//     });
// },

// // Get a cart by customer id and cart id
// getCart({ commit }, { customerId, cartId }) {
//   CartService.show(customerId, cartId)
//     .then((response) => {
//       commit("SET_CART", response.data);
//     })
//     .catch((error) => {
//       console.log("There was an error:", error.response);
//     });
// },

// // Create a cart by customer id
// createCart({ commit }, { customerId, cart }) {
//   CartService.post(customerId, cart)
//     .then((response) => {
//       commit("ADD_CART", response.data);
//     })
//     .catch((error) => {
//       console.log("There was an error:", error.response);
//     });
// },

// // Update a cart by customer id and cart id
// updateCart({ commit }, { customerId, cartId, cart }) {
//   CartService.put(customerId, cartId, cart)

//     .then((response) => {
//       commit("UPDATE_CART", response.data);
//     })
//     .catch((error) => {
//       console.log("There was an error:", error.response);
//     });
// },

// // Delete a cart by customer id and cart id
// deleteCart({ commit }, { customerId, cartId }) {
//   CartService.delete(customerId, cartId)
//     .then(() => {
//       commit("REMOVE_CART", cartId);
//     })
//     .catch((error) => {
//       console.log("There was an error:", error.response);
//     });
// },

// // Delete all carts by customer id
// deleteAllCarts({ commit }, customerId) {
//   CartService.deleteAll(customerId)
//     .then(() => {
//       commit("REMOVE_CARTS");
//     })
//     .catch((error) => {
//       console.log("There was an error:", error.response);
//     });
// },

// // Add a product to a cart by customer id and cart id
// addProduct({ commit }, { customerId, cartId, product }) {
//   CartService.addProduct(customerId, cartId, product)
//     .then((response) => {
//       commit("ADD_PRODUCT", response.data);
//     })
//     .catch((error) => {
//       console.log("There was an error:", error.response);
//     });
// },

// // Remove a product from a cart by customer id and cart id
// removeProduct({ commit }, { customerId, cartId, product }) {
//   CartService.removeProduct(customerId, cartId, product)
//     .then((response) => {
//       commit("REMOVE_PRODUCT", response.data);
//     })
//     .catch((error) => {
//       console.log("There was an error:", error.response);
//     });
// },

// // Get all products in a cart by customer id and cart id
// getProducts({ commit }, { customerId, cartId }) {
//   CartService.getProducts(customerId, cartId)
//     .then((response) => {
//       commit("SET_PRODUCTS", response.data);
//     })
//     .catch((error) => {
//       console.log("There was an error:", error.response);
//     });
// },

// // Get a product in a cart by customer id, cart id, and product id
// getProduct({ commit }, { customerId, cartId, productId }) {
//   CartService.getProduct(customerId, cartId, productId)
//     .then((response) => {
//       commit("SET_PRODUCT", response.data);
//     })
//     .catch((error) => {
//       console.log("There was an error:", error.response);
//     });
// },

// // Update a product in a cart by customer id, cart id, and product id
// updateCartProduct({ commit }, { customerId, cartId, productId, product }) {
//   CartService.updateCartProduct(customerId, cartId, productId, product)
//     .then((response) => {
//       commit("UPDATE_PRODUCT", response.data);
//     })
//     .catch((error) => {
//       console.log("There was an error:", error.response);
//     });
// },

// // Delete a product in a cart by customer id, cart id, and product id
// deleteCartProduct({ commit }, { customerId, cartId, productId }) {
//   CartService.deleteCartProduct(customerId, cartId, productId)
//     .then(() => {
//       commit("REMOVE_PRODUCT", productId);
//     })
//     .catch((error) => {
//       console.log("There was an error:", error.response);
//     });
// },

// // Delete all products in a cart by customer id and cart id
// deleteAllCartProducts({ commit }, { customerId, cartId }) {
//   CartService.deleteAllCartProducts(customerId, cartId)
//     .then(() => {
//       commit("REMOVE_PRODUCTS");
//     })
//     .catch((error) => {
//       console.log("There was an error:", error.response);
//     });
// },

// getCart({ commit }) {
//   CartService.show().then((response) => {
//     commit("SET_CART", response.data);
//   });
// },
// addProductToCart({ commit }, product) {
//   CartService.post(product).then((response) => {
//     commit("ADD_TO_CART", response.data);
//   });
// },
// removeFromCart({ commit }, product) {
//   CartService.delete(product).then((response) => {
//     commit("REMOVE_PRODUCT_FROM_CART", response.data);
//   });
// },
// clearCart({ commit }) {
//   CartService.deleteAll().then((response) => {
//     commit("CLEAR_CART", response.data);
//   });
// },
