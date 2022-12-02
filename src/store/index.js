import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import product from "./modules/product";
import cart from "./modules/cart";
import notification from "./modules/notification";
import fave from "./modules/fave";
import vendor from "./modules/vendor";
import customer from "./modules/customer";
import auth from "./modules/auth";
import order from "./modules/order";
import report from "./modules/report";
// import user from "./modules/user";
// import order from "./modules/order";
// import auth from "./modules/auth";

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  modules: {
    report,
    order,
    auth,
    vendor,
    customer,
    product,
    fave,
    cart,
    notification,
  },
});
