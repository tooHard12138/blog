<template>
  <div class="about-container" v-loading="loading || !iframeLoad">
    <iframe
      class="iframe-container"
      v-if="data"
      :src="data"
      @load="handleLoad"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      iframeLoad: false,
    };
  },
  computed: {
    ...mapState("about", ["data", "loading"]),
  },
  methods: {
    handleLoad() {
      this.iframeLoad = true;
    },
  },
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.about-container {
  .sizeInherit();
  overflow: hidden;
  position: relative;
}
.iframe-container {
  .sizeInherit();
  display: block;
  box-sizing: border-box;
}
</style>