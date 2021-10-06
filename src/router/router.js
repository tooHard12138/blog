import { start, done, configure } from "nprogress";
import "nprogress/nprogress.css";
import NotFound from "@/views/NotFound.vue";

configure({
  trickleSpeed: 20,
  showSpinner: false,
});

function delay(interval) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, interval);
  });
}

function getComponent(compResolver) {
  return async () => {
    start();
    if (process.env.NODE_ENV === "development") {
      await delay(2000);
    }
    const resp = await compResolver();
    done();
    return resp;
  };
}

export default [
  {
    name: "Home",
    path: "/",
    component: getComponent(() => import("@/views/Home")),
    meta: { title: "首页" },
  },
  {
    name: "Index",
    path: "/index.html",
    redirect: "/",
    component: getComponent(() => import("@/views/Home")),
    meta: { title: "首页" },
  },
  {
    name: "About",
    path: "/about",
    component: getComponent(() => import("@/views/About")),
    meta: { title: "关于我" },
  },
  {
    name: "Blog",
    path: "/blog",
    component: getComponent(() => import("@/views/Blog")),
    meta: { title: "文章" },
  },
  {
    name: "CategoryBlog",
    path: "/blog/cate/:categoryId",
    component: getComponent(() => import("@/views/Blog")),
    meta: { title: "文章" },
  },
  {
    name: "DetailBlog",
    path: "/blog/:id",
    component: getComponent(() => import("@/views/Blog/Detail")),
    meta: { title: "文章详情" },
  },
  {
    name: "Message",
    path: "/message",
    component: getComponent(() => import("@/views/Message")),
    meta: { title: "留言板" },
  },
  {
    name: "Project",
    path: "/project",
    component: getComponent(() => import("@/views/Project")),
    meta: { title: "项目&效果" },
  },
  {
    name: "NotFound",
    path: "*",
    component: NotFound,
    meta: { title: "未找到页面" },
  },
];
