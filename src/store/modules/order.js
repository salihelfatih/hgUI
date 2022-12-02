import OrderService from "../../services/OrderService";

export default {
  namespaced: true,
  state: {
    orders: [],
    order: null,
  },
  getters: {
    orders: (state) => state.orders,
  },
  actions: {
    async getOrders({ commit }) {
      const response = await OrderService.index();
      commit("SET_ORDERS", response.data);
    },
    async getOrder({ commit }, orderId) {
      const response = await OrderService.show(orderId);
      commit("SET_ORDER", response.data);
    },
    async filteredOrders({ commit }, filter) {
      const response = await OrderService.filter(filter);
      commit("SET_ORDERS", response.data);
    },
    async createOrder({ commit }, order) {
      const response = await OrderService.post(order);
      commit("SET_ORDER", response.data);
    },
    async updateOrder({ commit }, order) {
      const response = await OrderService.put(order);
      commit("SET_ORDER", response.data);
    },
    async deleteOrder({ commit }, orderId) {
      await OrderService.delete(orderId);
      commit("DELETE_ORDER", orderId);
    },
  },
  mutations: {
    SET_ORDERS(state, orders) {
      state.orders = orders;
    },
    SET_ORDER(state, order) {
      state.order = order;
    },
    DELETE_ORDER(state, orderId) {
      state.orders = state.orders.filter((order) => order.id !== orderId);
    },
  },
};
