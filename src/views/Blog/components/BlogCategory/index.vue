<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <div class="right-list">
      <RightList :list="list" @activeChange="handleActiveChange" />
    </div>
  </div>
</template>

<script>
import { getBlogTypes } from "@/api/blog";
import fetchData from "@/mixins/fetchData";
import RightList from "../RightList";
export default {
  computed: {
    routeInfo() {
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      const categoryId = +this.$route.params.categoryId || -1;
      return {
        page,
        limit,
        categoryId,
      };
    },
    list() {
      const total = this.data.reduce((res, item) => res + item.articleCount, 0);
      const list = [
        { id: -1, name: "全部", articleCount: total },
        ...this.data,
      ];
      list.map((item) => {
        item.isActive = this.routeInfo.categoryId === item.id;
        return item;
      });
      return list;
    },
  },
  components: {
    RightList,
  },
  mixins: [fetchData([])],
  methods: {
    handleActiveChange(item) {
      if (this.routeInfo.categoryId !== item.id) {
        const query = {
          page: 1,
          limit: this.routeInfo.limit,
        };
        if (item.id === -1) {
          // 没有分类
          this.$router.push({
            name: "Blog",
            query,
          });
        } else {
          // 有分类
          this.$router.push({
            name: "CategoryBlog",
            query,
            params: {
              categoryId: +item.id,
            },
          });
        }
      }
    },
    async fetchData() {
      return await getBlogTypes();
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.blog-category-container {
  overflow-y: auto;
  .sizeInherit();
  width: 300px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  h2 {
    font-size: 1em;
    letter-spacing: 2px;
  }
  .right-list {
    margin: 16px 0;
  }
}
</style>