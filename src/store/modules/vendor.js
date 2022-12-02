import VendorService from "../../services/VendorService";

export default {
  namespaced: true,
  state: {
    vendors: [],
    vendor: null,
  },
  getters: {
    vendors: (state) => state.vendors,
    vendor: (state) => state.vendor,
  },
  actions: {
    async getVendors({ commit }, search) {
      const response = await VendorService.index(search);
      commit("SET_VENDORS", response.data);
    },

    getVendor({ commit }, vendorId) {
      VendorService.show(vendorId).then((response) => {
        commit("SET_VENDOR", response.data);
      });
    },

    createVendor({ commit }, vendor) {
      VendorService.post(vendor).then((response) => {
        commit("ADD_VENDOR", response.data);
      });
    },

    updateVendor({ commit }, vendor) {
      VendorService.put(vendor).then((response) => {
        commit("UPDATE_VENDOR", response.data);
      });
    },

    deleteVendor({ commit }, vendorId) {
      VendorService.delete(vendorId).then(() => {
        commit("DELETE_VENDOR", vendorId);
      });
    },

    deleteAllVendors({ commit }) {
      VendorService.deleteAll().then(() => {
        commit("DELETE_ALL_VENDORS");
      });
    },
  },

  mutations: {
    SET_VENDORS(state, vendors) {
      state.vendors = vendors;
    },
    SET_VENDOR(state, vendor) {
      state.vendor = vendor;
    },
    // SET_VENDOR_PRODUCTS(state, vendorProducts) {
    //   state.vendorProducts = vendorProducts;
    // },
  },
};
