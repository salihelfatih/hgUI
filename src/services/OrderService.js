import Api from "@/services/Api";

export default {
  index() {
    return Api().get("orders");
  },
  show(orderId) {
    return Api().get(`orders/${orderId}`);
  },
  post(order) {
    return Api().post("orders", order);
  },
  put(order) {
    return Api().put(`orders/${order.id}`, order);
  },
  delete(orderId) {
    return Api().delete(`orders/${orderId}`);
  },
};
