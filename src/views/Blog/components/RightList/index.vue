<template>
  <ul class="right-list-container">
    <li class="item" v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ active: item.isActive }">{{
        item.name
      }}</span>
      <span @click="handleClick(item)" v-if="item.articleCount" class="extra" :class="{ active: item.isActive }"
        >{{ item.articleCount }}篇</span
      >
      <RightList :list="item.children" @activeChange="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      // [{name:xxx, amount:322, isActive:true, children:[{name:xxx, isActive:false}]}, ...]
      default: () => [],
    },
  },
  name: "RightList",
  methods: {
    handleClick(item) {
      this.$emit("activeChange", item);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-list-container {
  .item {
    font-size: 14px;
    min-height: 40px;
    line-height: 40px;
    span {
      cursor: pointer;
    }
    .extra {
      font-size: 12px;
      margin-left: 1em;
      color: @gray;
    }
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
  .right-list-container {
    margin-left: 1em;
  }
}
</style>