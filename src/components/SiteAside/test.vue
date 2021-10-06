<template>
  <div id="app">
    <SiteAside/>
  </div>
</template>

<script>
import SiteAside from "./";
import "@/styles/global.less";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
#app{
  width: 250px;
  height: 100vh;
}
</style>
