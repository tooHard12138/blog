<template>
  <div class="blog-comment-container">
    <MessageArea
      :title="'评论列表'"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import { getComments, postComment } from "@/api/blog";
import fetchData from "@/mixins/fetchData";
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  components: {
    MessageArea,
  },
  computed:{
    hasMore() {
      return this.data.rows.length < this.data.total;
    }
  },
  methods: {
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        ...formData,
        blogId: this.$route.params.id,
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功");
    },
    async fetchMore() {
      if (!this.hasMore) {
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    handleScroll(dom) {
      if (dom.scrollHeight - (dom.clientHeight + dom.scrollTop) < 100 && this.isLoading === false) {
        this.fetchMore();
      }
    },
  },
  mounted() {
    this.$bus.$on("scroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("scroll", this.handleScroll);
  },
};
</script>

<style lang="less" scoped>
</style>