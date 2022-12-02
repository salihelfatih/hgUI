import Api from "@/services/Api";

export default {
  index() {
    return Api().get("customer");
  },
  show(customerId) {
    return Api().get(`customers/${customerId}`);
  },
  post(customer) {
    return Api().post("customer", customer);
  },
  put(customer) {
    return Api().put(`customers/${customer.id}`, customer);
  },
  delete(customerId) {
    return Api().delete(`customers/${customerId}`);
  },
};
