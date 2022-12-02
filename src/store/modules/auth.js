import AuthService from "../../services/AuthService";

export default {
  namespaced: true,
  state: {
    token: null,
    customer: null,
    vendor: null,
  },
  getters: {
    loggedIn(state) {
      return (state.token && state.customer) || state.vendor;
    },
    customer: (state) => state.customer,
    vendor: (state) => state.vendor,
    token: (state) => state.token,
  },
  actions: {
    async loginCustomer({ commit }, credentials) {
      try {
        const response = await AuthService.loginCustomer(credentials);
        commit("setToken", response.data.token);
        commit("setCustomer", response.data.customer);
        // console.log("loginCustomer response.data: ", response.data);
        return response;
      } catch (error) {
        console.log(error);
        commit("setToken", null);
        commit("setCustomer", null);
      }
    },
    async registerCustomer({ commit }, credentials) {
      try {
        const response = await AuthService.registerCustomer(credentials);
        commit("setToken", response.data.token);
        commit("setCustomer", response.data.customer);
        // console.log("registerCustomer response.data: ", response.data);
        return response;
      } catch (error) {
        console.log(error);
        commit("setToken", null);
        commit("setCustomer", null);
      }
    },
    async logoutCustomer({ commit }) {
      try {
        const response = await AuthService.logout();
        commit("setToken", null);
        commit("setCustomer", null);
        // console.log("logoutCustomer response.data: ", response.data);
        return response;
      } catch (error) {
        console.log(error);
        commit("setToken", null);
        commit("setCustomer", null);
      }
    },

    async loginVendor({ commit }, credentials) {
      try {
        const response = await AuthService.loginVendor(credentials);
        commit("setToken", response.data.token);
        commit("setVendor", response.data.vendor);
        // console.log("loginVendor response.data: ", response.data);
        return response;
      } catch (error) {
        console.log(error);
        commit("setToken", null);
        commit("setVendor", null);
      }
    },

    async registerVendor({ commit }, credentials) {
      try {
        const response = await AuthService.registerVendor(credentials);
        commit("setToken", response.data.token);
        commit("setVendor", response.data.vendor);
        // console.log("registerVendor response.data: ", response.data);
        return response;
      } catch (error) {
        console.log(error);
        commit("setToken", null);
        commit("setVendor", null);
      }
    },

    async logoutVendor({ commit }) {
      try {
        const response = await AuthService.logout();
        commit("setToken", null);
        commit("setVendor", null);
        // console.log("logoutVendor response.data: ", response.data);
        return response;
      } catch (error) {
        console.log(error);
        commit("setToken", null);
        commit("setVendor", null);
      }
    },
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setCustomer(state, customer) {
      state.customer = customer;
    },
    setVendor(state, vendor) {
      state.vendor = vendor;
    },
  },
};

// async registerVendor({ commit }, credentials) {
//   try {
//     const response = await AuthService.registerVendor(credentials);
//     commit("setCustomer", response.data.customer);
//     commit("setToken", response.data.token);
//     return response.data;
//   } catch (error) {
//     console.log("There was an error:", error.response);
//   }
// },

// async registerCustomer({ commit }, credentials) {
//   try {
//     const response = await AuthService.registerCustomer(credentials);
//     commit("setCustomer", response.data.customer);
//     commit("setToken", response.data.token);
//     return response.data;
//   } catch (error) {
//     console.log("There was an error:", error.response);
//   }
// },

//   async registerVendor({ commit }, credentials) {
//   try {
//     const response = await AuthService.registerVendor(credentials);
//     commit("setCustomer", response.data.customer);
//     commit("setToken", response.data.token);
//     return response.data;
//   } catch (error) {
//     console.log("There was an error:", error.response);
//   }
// },

//     },
//     async registerCustomer({ commit }, { email, password }) {
//       const { data } = await AuthService.registerCustomer(email, password);
//       commit("setCustomer", data.customer);
//       commit("setToken", data.token);
//     },

//     },
//     async registerVendor(
//       { commit },
//       {
//         email,
//         password,
//         firstName,
//         lastName,
//         customername,
//         phoneNumber,
//         address,
//         zipCode,
//         profilePic,
//         kitchenName,
//         kitchenCategory,
//         kitchenDescription,
//       }
//     ) {
//       const { data } = await AuthService.registerVendor({
//         email,
//         password,
//         firstName,
//         lastName,
//         customername,
//         phoneNumber,
//         address,
//         zipCode,
//         profilePic,
//         kitchenName,
//         kitchenCategory,
//         kitchenDescription,
//       });
//       commit("setCustomer", data.customer);
//       commit("setToken", data.token);
//     },
