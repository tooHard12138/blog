<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.common {
  overflow: hidden;
  height: 100%;
}
.layout-container {
  .sizeInherit();
  display: flex;
  .left {
    .common();
    flex: 0 0 auto;
  }
  .main {
    .common();
    flex: 1 1 auto;
  }
  .right {
    .common();
    flex: 0 0 auto;
  }
}
</style>