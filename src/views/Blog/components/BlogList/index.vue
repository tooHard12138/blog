<template>
  <div class="blog-list-container" ref="mainContainer" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink
            :to="{
              name: 'DetailBlog',
              params: {
                id: item.id,
              },
            }"
          >
            <img v-lazy="item.thumb" />
          </RouterLink>
        </div>
        <div class="main">
          <h2>
            <RouterLink
              :to="{
                name: 'DetailBlog',
                params: {
                  id: item.id,
                },
              }"
            >
              {{ item.title }}
            </RouterLink>
          </h2>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <span>
              <RouterLink
                :to="{
                  name: 'CategoryBlog',
                  params: { categoryId: item.category.id },
                }"
              >
                {{ item.category.name }}
              </RouterLink>
            </span>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Pager
      v-if="data.total"
      :total="data.total"
      :current="routeInfo.page"
      :limit="routeInfo.limit"
      @changePager="handlePageChange"
    />
    <Empty v-if="!data.total && !isLoading" />
  </div>
</template>

<script>
import { getBlogs } from "@/api/blog";
import fetchData from "@/mixins/fetchData";
import Pager from "@/components/Pager";
import { formatDate } from "@/utils";
import showTop from "@/mixins/showTop";
import lazy from "@/directives/lazy";
import lazyScroll from "@/mixins/lazyScroll";
import Empty from "@/components/Empty";

export default {
  watch: {
    async $route() {
      this.isLoading = true;
      this.$refs.mainContainer.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
  directives: {
    lazy,
  },
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
  },
  components: {
    Pager,
    Empty,
  },
  mixins: [fetchData({ total: 0, rows: [] }), showTop, lazyScroll],
  methods: {
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      if (this.routeInfo.categoryId === -1) {
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
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
    formatDate,
    async fetchData() {
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.blog-list-container {
  .sizeInherit();
  line-height: 1.7;
  position: relative;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 20px;
  scroll-behavior: smooth;
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    margin-right: 15px;
    img {
      display: block;
      width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    .aside {
      font-size: 12px;
      color: @gray;
      span {
        margin-right: 15px;
      }
    }
  }
  .desc {
    font-size: 14px;
    margin-top: 15px;
  }
}
</style>