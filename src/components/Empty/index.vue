<template>
  <div class="empty-container">
    <Icon type="empty" />
    {{ text }}
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.empty-container {
  color: @lightWords;
  user-select: none;
  word-break: break-word;
  font-weight: bold;

  .sizeInherit();
  .flexCenter();
}
.icon-container {
  margin-bottom: 10px;
  font-size: 72px;
}
</style>
