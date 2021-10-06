<template>
  <div
    class="home-container"
    @wheel="handleWheel"
    ref="container"
    v-loading="loading"
  >
    <ul
      class="rotation"
      @transitionend="handleTransitionend"
      :style="{ top: top }"
    >
      <li class="item" v-for="item in data" :key="item.id">
        <RotationItem :rotationData="item" />
      </li>
    </ul>
    <div class="icon icon-up" v-show="index > 0" @click="jumpTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon icon-down"
      v-show="index < data.length - 1"
      @click="jumpTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="page">
      <li
        class="dot"
        :class="{ active: index === i }"
        v-for="(item, i) in data"
        :key="item.id"
        @click="jumpTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import RotationItem from "./RotationItem";
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  components: {
    RotationItem,
    Icon,
  },
  data() {
    return {
      index: 0,
      containerHeight: 0,
      wheelKey: true,
    };
  },
  computed: {
    top() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner", ["loading", "data"]),
  },
  methods: {
    handleWheel(e) {
      if (this.wheelKey) {
        this.wheelKey = false;
        if (e.deltaY > 0 && this.index < this.data.length - 1) {
          this.index++;
          return;
        } else if (e.deltaY < 0 && this.index > 0) {
          this.index--;
          return;
        }
        this.wheelKey = true;
      }
    },
    handleTransitionend() {
      this.wheelKey = true;
    },
    jumpTo(i) {
      this.index = i;
    },
    setContainerHeight() {
      this.containerHeight = this.$refs.container.offsetHeight;
    },
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  mounted() {
    this.setContainerHeight();
    window.addEventListener("resize", this.setContainerHeight);
  },
  destroyed() {
    window.removeEventListener("resize", this.setContainerHeight);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  .sizeInherit();
  position: relative;
  .rotation {
    .sizeInherit();
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s;
    .item {
      .sizeInherit();
      overflow: hidden;
    }
  }
  .page {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    @size: 7px;
    .dot {
      width: @size;
      height: @size;
      border: 1px solid #fff;
      border-radius: 50%;
      margin: 10px 0;
      box-sizing: border-box;
      background: @words;
      cursor: pointer;
      &.active {
        background: #fff;
      }
    }
  }
  .icon {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 30px;
    color: @gray;
    cursor: pointer;
    @distance: 25px;
    @keyframes iconmove-up {
      0% {
        transform: translate(-50%, 15%);
      }
      100% {
        transform: translate(-50%, -15%);
      }
    }
    @keyframes iconmove-down {
      0% {
        transform: translate(-50%, -15%);
      }
      100% {
        transform: translate(-50%, 15%);
      }
    }
    &.icon-up {
      top: @distance;
      animation: iconmove-up 1s linear infinite alternate;
    }
    &.icon-down {
      bottom: @distance;
      animation: iconmove-down 1s linear infinite alternate;
    }
  }
}
</style>