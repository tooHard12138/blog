<template>
  <div id="app">
    <Menu/>
  </div>
</template>

<script>
import Menu from "./";
import "@/styles/global.less";
export default {
  components: {
    Menu,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
#app{
  width: 250px;
  height: 300px;
  border: 1px solid;
  margin: 30px auto;
  background: @dark;
}
</style>