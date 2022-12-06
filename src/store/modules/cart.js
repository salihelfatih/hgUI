import CartService from "../../services/CartService";

export default {
  namespaced: true,
  state: {
    cart: [],
    carts: [],
    cartTotal: 0,
    cartCount: 0,
    cartProduct: null,
  },

  getters: {
    cart: (state) => state.cart,
    carts: (state) => state.carts,
    cartTotal: (state) => state.cartTotal,
    cartCount: (state) => state.cartCount,
    cartProduct: (state) => state.cartProduct,
  },
  actions: {
    // get all carts by customer
    async getCarts({ commit }) {
      try {
        const customer = this.getters["customer/customer"];
        const response = await CartService.index(customer.id);
        commit("SET_CARTS", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async getCart({ commit }, cartId) {
      try {
        const response = await CartService.show(cartId);
        commit("SET_CART", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async addProductToCart({ commit }) {
      try {
        const customer = this.getters["auth/customer"];
        const product = this.getters["product/product"];
        const cartProduct = {
          productId: product.id,
          quantity: 1,
        };
        const response = await CartService.post(customer.id, cartProduct);
        commit("ADD_PRODUCT_TO_CART", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    // async addProductToCart({ commit }, product) {
    //   try {
    //     // const customer = this.getters["customer/customer"];
    //     const cartProduct = this.getters["cart/cartProduct"];
    //     if (cartProduct) {
    //       const response = await CartService.put(cartProduct);
    //       commit("UPDATE_CART_PRODUCT", response.data);
    //     } else {
    //       const response = await CartService.post(product);
    //       commit("ADD_CART_PRODUCT", response.data);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

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

    async checkout({ commit }) {
      try {
        const response = await CartService.checkout();
        commit("CHECKOUT", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    SET_CARTS: (state, carts) => (state.carts = carts),
    SET_CART: (state, cart) => (state.cart = cart),
    ADD_PRODUCT_TO_CART: (state, cartProduct) => {
      // state.cart.push(cartProduct);
      state.cartProduct = cartProduct;
    },
    REMOVE_PRODUCT_FROM_CART: (state, productId) =>
      (state.cart = state.cart.filter((product) => product.id !== productId)),
    // REMOVE_FROM_CART(state, product) {
    //   state.cart = state.cart.filter((p) => p.id !== product.id);
    // },
    CLEAR_CART: (state) => (state.cart = []),
    CHECKOUT: (state) => (state.cart = []),
  },
};
