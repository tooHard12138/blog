<template>
  <!-- 
    需要参数：
    current(当前页码) 默认值1
    total(总数据量)   默认值0
    limit(页容量)     默认值10
    visibleNumber(可见页码数) 默认值10
   -->

  <!-- 只有总页数大于1时才显示 -->
  <div class="pager-container" v-if="pageNumber > 1">
    <a :class="{ disabled: current === 1 }" @click="changePager(1)"
      >|&lt;&lt;</a
    >
    <a :class="{ disabled: current === 1 }" @click="changePager(current - 1)"
      >&lt;&lt;</a
    >
    <a
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: current === n }"
      @click="changePager(n)"
      >{{ n }}</a
    >
    <a
      :class="{ disabled: current === pageNumber }"
      @click="changePager(current + 1)"
      >&gt;&gt;</a
    >
    <a
      :class="{ disabled: current === pageNumber }"
      @click="changePager(pageNumber)"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    //当前页码
    current: {
      type: Number,
      default: 1,
    },
    // 总数据量
    total: {
      type: Number,
      default: 0,
    },
    // 页容量
    limit: {
      type: Number,
      default: 10,
    },
    // 可见页码数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    // 显示的最小页数
    visibleMin() {
      let min = Math.ceil(this.current - this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    // 显示的最大页数
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    // 要显示页数的数字
    numbers() {
      const arr = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  methods: {
    // 处理点击事件
    changePager(newPager) {
      if (newPager < 1) {
        newPager = 1;
        return;
      }
      if (newPager > this.pageNumber) {
        newPager = this.pageNumber;
        return;
      }
      if (newPager === this.current) {
        return;
      }
      // 向父组件传递信息
      this.$emit("changePager", newPager);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@contextMenu: context-menu;
.pager-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  user-select: none;
  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;
    &.active {
      cursor: @contextMenu;
      color: @words;
      font-weight: bold;
    }
    &.disabled {
      color: @lightWords;
      cursor: @contextMenu;
    }
  }
}
</style>