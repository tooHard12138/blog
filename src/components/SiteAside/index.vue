<template>
  <div class="site-aside-container">
    <div class="avatar">
      <Avatar :imgUrl="data.avatar" v-if="data"/>
    </div>
    <h1 class="title" v-if="data">{{data.siteTitle}}</h1>
    <div class="menu">
      <Menu />
    </div>
    <div class="contact">
      <Contact />
    </div>
    <p class="text" v-if="data">{{data.icp}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";
export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.site-aside-container {
  .avatar {
    margin-bottom: 20px;
  }
  .title {
    font-size: 20px;
    color: #fff;
    text-align: center;
  }
  .sizeInherit();
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow: auto;
  .menu {
    height: 250px;
    margin: 50px 0 30px 0;
  }
  .contact {
    height: 300px;
  }
  .text {
    text-align: center;
    font-size: 13px;
  }
}
</style>