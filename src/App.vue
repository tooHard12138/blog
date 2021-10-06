<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="siteAside">
          <SiteAside />
        </div>
      </template>
      <div class="main">
        <RouterView />
      </div>
    </Layout>
    <ToTop/>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
import ToTop from "@/components/ToTop";
export default {
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.app-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  .siteAside {
    width: 250px;
    height: 100%;
  }
}
</style>
