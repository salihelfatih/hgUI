import CustomerService from "../../services/CustomerService";
import AuthService from "../../services/AuthService";

export default {
  namespaced: true,
  state: {
    customers: [],
    customer: null,
  },
  getters: {
    customers: (state) => state.customers,
    customer: (state) => state.customer,
  },
  actions: {
    getCustomers({ commit }) {
      CustomerService.index().then((response) => {
        commit("SET_CUSTOMERS", response.data);
      });
    },
    getCustomer({ commit }, customerId) {
      CustomerService.show(customerId).then((response) => {
        commit("SET_CUSTOMER", response.data);
      });
    },
    addCustomer({ commit }, customer) {
      CustomerService.post(customer).then((response) => {
        commit("ADD_CUSTOMER", response.data);
      });
    },
    updateCustomer({ commit }, customer) {
      CustomerService.put(customer).then((response) => {
        commit("UPDATE_CUSTOMER", response.data);
      });
    },
    deleteCustomer({ commit }, customerId) {
      CustomerService.delete(customerId).then((response) => {
        commit("DELETE_CUSTOMER", response.data);
      });
    },
    login({ commit }, user) {
      AuthService.loginCustomer(user).then((response) => {
        commit("SET_LOGIN", response.data);
      });
    },
    logout({ commit }) {
      AuthService.logout().then((response) => {
        commit("SET_LOGOUT", response.data);
      });
    },
    register({ commit }, user) {
      AuthService.registerCustomer(user).then((response) => {
        commit("SET_REGISTER", response.data);
      });
    },
  },
  mutations: {
    SET_CUSTOMERS(state, customers) {
      state.customers = customers;
    },
    SET_CUSTOMER(state, customer) {
      state.customer = customer;
    },
    ADD_CUSTOMER(state, customer) {
      state.customers.push(customer);
    },
    UPDATE_CUSTOMER(state, customer) {
      state.customers = state.customers.map((c) => {
        if (c.id === customer.id) {
          return customer;
        }
        return c;
      });
    },
    DELETE_CUSTOMER(state, customerId) {
      state.customers = state.customers.filter((c) => c.id !== customerId);
    },
    SET_LOGIN(state, data) {
      state.status = data.status;
      state.token = data.token;
      state.user = data.user;
      state.isUserLoggedIn = true;
    },
    SET_LOGOUT(state, data) {
      state.status = data.status;
      state.token = null;
      state.user = null;
      state.isUserLoggedIn = false;
    },
    SET_REGISTER(state, data) {
      state.status = data.status;
    },
  },
};
