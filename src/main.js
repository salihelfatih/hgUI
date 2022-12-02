import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "vuetify/dist/vuetify.min.css";
import routes from "./routes";
import store from "./store";
import VueRouter from "vue-router";
import Axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes,
  mode: "history",
});

Vue.use(VueAxios, Axios);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
