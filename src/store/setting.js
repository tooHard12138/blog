import { getSetting } from "@/api/setting";
import {setTitle} from "@/utils";

export default {
  namespaced: true,
  state: {
    loading: false,
    data: null,
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async fetchSetting(ctx) {
      ctx.commit("setLoading", true);
      const resp = await getSetting();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
      // <link rel="shortcut icon" type="image/x-icon" href="图片地址">
      if (resp.favicon) {
        let link = document.querySelector("link[rel='shortcut icon']");
        if (!link) {
          link = document.createElement("link");
          link.rel = "shortcut icon";
          link.type = "image/x-icon";
          link.href = resp.favicon;
          document.head.appendChild(link);
        }
      }
      if(resp.siteTitle) {
        setTitle.setWebTitle(resp.siteTitle);
      }
    },
  },
};
