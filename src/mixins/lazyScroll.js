// 给需要滚动的区域一个ref mainContainer
export default {
  methods: {
    handleLazy() {
      this.$bus.$emit("scroll");
    },
  },
  mounted() {
    this.$refs.mainContainer.addEventListener("scroll", this.handleLazy);
  },
  beforeDestroy() {
    this.$refs.mainContainer.removeEventListener("scroll", this.handleLazy);
  },
};
