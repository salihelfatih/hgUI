import Api from "@/services/Api";

export default {
  index(search, category, address) {
    return Api().get("vendors", {
      params: {
        search: search,
        category: category,
        address: address,
      },
    });
  },
  show(vendorId) {
    return Api().get(`vendors/${vendorId}`);
  },
  post(vendor) {
    return Api().post("vendors", vendor);
  },
  put(vendor) {
    return Api().put(`vendors/${vendor.id}`, vendor);
  },
  delete(vendorId) {
    return Api().delete(`vendors/${vendorId}`);
  },
  filterByCategory(category) {
    return Api().get(`vendors/category/${category}`);
  },
  filterByAddress(address) {
    return Api().get(`vendors/address/${address}`);
  },
};
