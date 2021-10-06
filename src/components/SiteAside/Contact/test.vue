<template>
  <div id="app">
    <Contact/>
  </div>
</template>

<script>
import "@/styles/global.less";
import Contact from "./";
export default {
  components: {
    Contact,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
#app{
  width: 250px;
  height: 500px;
  border: 1px solid;
  margin: 30px auto;
  background: @dark;
}
</style>