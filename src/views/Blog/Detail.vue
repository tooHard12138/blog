<template>
  <div class="detail-container">
    <Layout>
      <div ref="mainContainer" class="main-container" v-loading="isLoading">
        <BlogDetail :blog="data" v-if="data" />
        <BlogComment v-if="!isLoading" />
      </div>
      <template #right>
        <div class="right-container" v-loading="isLoading">
          <BlogTOC :toc="data.toc" v-if="data" />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import { getBlog } from "@/api/blog";
import fetchData from "@/mixins/fetchData";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import BlogComment from "./components/BlogComment";
import showTop from "@/mixins/showTop";
import { setTitle } from "@/utils";

export default {
  mixins: [fetchData(), showTop],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  methods: {
    async fetchData() {
      const resp = await getBlog(this.$route.params.id);
      if (!resp) {
        this.$router.push("/404");
        return;
      }
      setTitle.setRouteTitle(resp.title);
      return resp;
    },
    handleScroll() {
      this.$bus.$emit("scroll", this.$refs.mainContainer);
    },
  },
  mounted() {
    this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.detail-container {
  .sizeInherit();
}
.main-container {
  .sizeInherit();
  position: relative;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 20px;
  scroll-behavior: smooth;
}
.right-container {
  overflow-y: auto;
  .sizeInherit();
  width: 300px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
}
</style>