<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="left">left</div>
      </template>
      <div class="main">
        mainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmain
      </div>
      <template #right>
        <div class="right">right</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
import "@/styles/global.less";
export default {
  components: {
    Layout,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
#app {
  width: 100vw;
  height: 100vh;
  .left {
    background: lightblue;
    width: 200px;
  }
  .main {
    background: lightcoral;
  }
  .right {
    background: lightgreen;
    width: 200px;
  }
}
</style>
