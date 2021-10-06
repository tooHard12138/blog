<template>
  <div class="message-container" ref="mainContainer">
    <MessageArea
      title="留言板"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import { postMessage, getMessages } from "@/api/message";
import showTop from "@/mixins/showTop";

export default {
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  mixins: [fetchData({ total: 0, rows: [] }), showTop],
  components: {
    MessageArea,
  },
  methods: {
    async fetchData() {
      return await getMessages(this.page, this.limit);
    },
    async handleSubmit(formData, callback) {
      const resp = await postMessage(formData);
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("感谢您的留言");
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
    handleScroll(e) {
      const dom = e.target;
      if (dom.scrollHeight - (dom.clientHeight + dom.scrollTop) < 100 && this.isLoading === false) {
        this.fetchMore();
      }
    },
  },
  mounted() {
    this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.message-container {
  .sizeInherit();
  position: relative;
  scroll-behavior: smooth;
  box-sizing: border-box;
  padding: 25px 0;
  overflow-y: auto;
  .message-area-container {
    width: 700px;
    margin: 0 auto;
  }
}
</style>