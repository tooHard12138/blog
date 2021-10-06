import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router";
import {setTitle} from "@/utils";

if(!window.VueRouter) {
  Vue.use(VueRouter);
}

const router = new VueRouter({
  routes,
  mode: "history",
});

router.afterEach((to, from) => {
  setTitle.setRouteTitle(to.meta.title);
})

export default router;
