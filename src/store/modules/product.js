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
    // async getProducts({ commit }) {
    //   const response = await ProductService.index();
    //   commit("SET_PRODUCTS", response.data);
    // },

    // get all products for a vendor using the vendor id from the vendor module
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

    // get a single product for a vendor by vendorId and productId
    // async getProduct({ commit }, vendorId, productId) {
    //   try {
    //     const response = await ProductService.show(vendorId, productId);
    //     commit("SET_PRODUCT", response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

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

    // find products by name
    async findProductsByName({ commit }, productName) {
      try {
        const response = await ProductService.findByName(productName);
        commit("SET_PRODUCTS", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    // find products by vendor
    async findProductsByVendor({ commit }, vendorId) {
      try {
        const response = await ProductService.findByVendor(vendorId);
        commit("SET_PRODUCTS", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    // find products by category
    async findProductsByCategory({ commit }, categoryId) {
      try {
        const response = await ProductService.findByCategory(categoryId);
        commit("SET_PRODUCTS", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    // find products by price
    async findProductsByPrice({ commit }, price) {
      try {
        const response = await ProductService.findByPrice(price);
        commit("SET_PRODUCTS", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    // find products by rating
    async findProductsByRating({ commit }, rating) {
      try {
        const response = await ProductService.findByRating(rating);
        commit("SET_PRODUCTS", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    // find products by availability
    async findProductsByAvailability({ commit }, availability) {
      try {
        const response = await ProductService.findByAvailability(availability);
        commit("SET_PRODUCTS", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    // get products by vendor
    async getProductsByVendor({ commit }, vendorId) {
      try {
        const response = await ProductService.getProductsByVendor(vendorId);
        commit("SET_PRODUCTS", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    // async getProducts({ commit }, vendorId) {
    //   // vendorId = await this.state.vendor.vendor.id;
    //   try {
    //     const response = await ProductService.index(vendorId);
    //     commit("SET_PRODUCTS", response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    // get a single product by id and vendor id
    // async getProduct({ commit }, { vendorId, productId }) {
    //   vendorId = this.state.vendor.vendor.id;
    // productId = this.state.product.product.id;
    //   try {
    //     const response = await ProductService.show(vendorId, productId);
    //     commit("SET_PRODUCT", response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    // filteredProducts({ commit }, filter) {
    //   ProductService.filter(filter).then((response) => {
    //     commit("SET_PRODUCTS", response.data);
    //   });
    // },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, product) {
      state.product = product;
    },
  },
};
