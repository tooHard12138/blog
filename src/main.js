import "@/mock";
import Vue from "vue";
import App from "./App.vue";
import "@/styles/global.less";
import router from "@/router";
import "./eventBus";
import store from "@/store";

store.dispatch("setting/fetchSetting");

import showMessage from "@/utils/showMessage";
Vue.prototype.$showMessage = showMessage;

import vLoading from "@/directives/loading/index";
Vue.directive("loading", vLoading);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
