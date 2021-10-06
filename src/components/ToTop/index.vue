<template>
  <div @click="handleClick" class="to-top-container" v-show="show">Top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleShowTop(dom) {
      if (!dom) {
        this.show = false;
        return;
      }
      this.show = dom.scrollTop >= 500;
    },
    handleClick() {
      this.$bus.$emit("toTop");
    },
  },
  mounted() {
    this.$bus.$on("showTop", this.handleShowTop);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.to-top-container {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  background: @primary;
  border-radius: 50%;
  cursor: pointer;
  z-index: 99;
}
</style>