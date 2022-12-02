import Api from "@/services/Api";

export default {
  registerCustomer(credentials) {
    return Api().post("customers", credentials);
  },
  loginCustomer(credentials) {
    return Api().post("customers/login", credentials);
  },
  logout() {
    return Api().post("logout");
  },
  registerVendor(credentials) {
    return Api().post("vendors", credentials);
  },
  loginVendor(credentials) {
    return Api().post("vendors/login", credentials);
  },
};
