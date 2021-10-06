<template>
  <div class="image-loader-container">
    <img class="placeholder" :src="placeholder" v-if="retainPlaceholder" />
    <img
      :src="src"
      :style="{ opacity: opacity, transition: `opacity ${duration}ms` }"
      @load="imgLoad"
      @transitionend="switchLoad"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      opacity: 0, 
      retainPlaceholder: true, //是否保留占位图
    };
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  methods: {
    switchLoad() {
      this.retainPlaceholder = false;
      this.$emit("load");
    },
    imgLoad() {
      this.opacity = 1;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.image-loader-container {
  .sizeInherit();
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(0.3vw);
  }
}
</style>
