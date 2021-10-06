<template>
  <div class="menu-container">
    <RouterLink
      active-class="active"
      exact-active-class=""
      :exact="item.exact"
      :to="{ name: item.name }"
      class="item"
      v-for="(item, i) in item"
      :key="i"
    >
      <Icon :type="item.type" />
      {{ item.text }}
    </RouterLink>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  data() {
    return {
      active: 0,
      item: [
        { name: "Home", exact: true, type: "home", text: "首页" },
        { name: "Blog", exact: false, type: "blog", text: "文章" },
        { name: "About", exact: true, type: "about", text: "关于我" },
        { name: "Project", exact: true, type: "code", text: "项目&效果" },
        { name: "Message", exact: true, type: "chat", text: "留言板" },
      ],
    };
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.menu-container {
  .sizeInherit();
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: @lightWords;
  font-size: 14px;
  .item {
    height: 100%;
    display: flex;
    align-items: center;
    word-break: break-word;
    position: relative;
    box-sizing: border-box;
    cursor: pointer;
    padding: 0 50px;
    &:hover {
      color: #fff;
    }
    &.active {
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
    }
  }
  .icon-container {
    font-size: 15px;
    width: 24px;
  }
}
</style>