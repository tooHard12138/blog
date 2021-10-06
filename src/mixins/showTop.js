// 给需要滚动的区域一个ref mainContainer
export default {
  methods: {
    handleMainContainerTop() {
      this.$bus.$emit("showTop", this.$refs.mainContainer);
    },
    handleMainContainerToTop() {
      this.$refs.mainContainer.scrollTop = 0;
    },
  },
  mounted() {
    this.$refs.mainContainer.addEventListener("scroll", this.handleMainContainerTop);
    this.$bus.$on("toTop", this.handleMainContainerToTop);
  },
  beforeDestroy() {
    this.$bus.$emit("showTop", undefined);
    this.$refs.mainContainer.removeEventListener("scroll", this.handleMainContainerTop);
    this.$bus.$off("toTop", this.handleMainContainerToTop);
  },
};
