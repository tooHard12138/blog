<template>
  <div
    class="contact-code-container"
    :style="{ width: size + 'px', height: size + 'px' }"
    v-if="data"
  >
    <img :src="url[type]" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 150,
    },
  },
  computed: {
    ...mapState("setting", ["data"]),
    url() {
      return {
        qq: this.data.qqQrCode,
        weixin: this.data.weixinQrCode,
      };
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.contact-code-container {
  transition: 0.5s;
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  position: absolute;
  left: 20px;
  bottom: 85%;
  transform-origin: 50% bottom;
  transform: scaleY(0);
  &::after {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    left: 50%;
    bottom: -5px;
    transform: translate(-50%) rotate(45deg);
    background: #fff;
  }
  img {
    .sizeInherit();
  }
}
</style>