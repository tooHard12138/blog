<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期: {{ formatDate(blog.createDate) }}</span>
      <span>浏览: {{ blog.scanNumber }}</span>
      <span
        ><a href="#data-form-container">评论: {{ blog.commentNumber }}</a></span
      >
      <span
        ><RouterLink
          :to="{ name: 'CategoryBlog', params: { categoryId: blog.category.id } }"
          >{{ blog.category.name }}</RouterLink
        ></span
      >
    </div>
    <div class="blog-main markdown-body" v-html="blog.htmlContent"></div>
  </div>
</template>

<script>
import { formatDate } from "@/utils";
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.blog-detail-container {
  // .sizeInherit();
  h1 {
    margin-top: 20px;
  }
  .aside {
    color: @gray;
    font-size: 12px;
    margin: 20px 0 30px 0;
    span {
      margin-right: 15px;
    }
  }
}
</style>