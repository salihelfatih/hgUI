import ProductService from "../../services/ProductService";

export default {
  namespaced: true,
  state: {
    products: [],
    product: null,
  },
  getters: {
    products: (state) => state.products,
    product: (state) => state.product,
  },
  actions: {
    async getAllProducts({ commit }) {
      const response = await ProductService.findAllProducts();
      commit("SET_PRODUCTS", response.data);
    },

    // get all products by vendor
    async getProducts({ commit }, search) {
      try {
        const vendor = this.getters["vendor/vendor"];
        const response = await ProductService.index(vendor.id, search);
        commit("SET_PRODUCTS", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    // get a single product
    async getProduct({ commit }, productId) {
      try {
        const response = await ProductService.show(productId);
        commit("SET_PRODUCT", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    // create a new product
    async createProduct({ commit }, product) {
      try {
        const response = await ProductService.post(product);
        commit("ADD_PRODUCT", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    // update a product
    async updateProduct({ commit }, product) {
      try {
        const response = await ProductService.put(product);
        commit("UPDATE_PRODUCT", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    // delete a product
    async deleteProduct({ commit }, productId) {
      try {
        await ProductService.delete(productId);
        commit("DELETE_PRODUCT", productId);
      } catch (error) {
        console.log(error);
      }
    },

    // delete all products
    async deleteAllProducts({ commit }) {
      try {
        await ProductService.deleteAll();
        commit("DELETE_ALL_PRODUCTS");
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, product) {
      state.product = product;
    },
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    },
    UPDATE_PRODUCT(state, product) {
      const index = state.products.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        state.products.splice(index, 1, product);
      }
    },
    DELETE_PRODUCT(state, productId) {
      state.products = state.products.filter((p) => p.id !== productId);
    },
    DELETE_ALL_PRODUCTS(state) {
      state.products = [];
    },
  },
};
