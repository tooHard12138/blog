<template>
  <div
    class="rotation-item-container"
    ref="container"
    @mousemove="handleMove"
    @mouseleave="handleLeave"
  >
    <div class="img" ref="img" :style="imgPosition">
      <ImageLoader
        :src="rotationData.bigImg"
        :placeholder="rotationData.midImg"
        @load="showWords"
      />
    </div>
    <p class="title" ref="title">{{ rotationData.title }}</p>
    <p class="description" ref="description">{{ rotationData.description }}</p>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["rotationData"],
  data() {
    return {
      titleWidth: 0,
      descriptionWidth: 0,

      containerSize: {
        width: 0,
        height: 0,
      },
      imgSize: {
        width: 0,
        height: 0,
      },
      mouse: {
        X: 0,
        Y: 0,
      },
    };
  },
  computed: {
    distance() {
      return {
        width: this.imgSize.width - this.containerSize.width,
        height: this.imgSize.height - this.containerSize.height,
      };
    },
    center() {
      return {
        X: this.containerSize.width / 2,
        Y: this.containerSize.height / 2,
      };
    },
    imgPosition() {
      const top =
        (-this.mouse.Y / this.containerSize.height) * this.distance.height;
      const left =
        (-this.mouse.X / this.containerSize.width) * this.distance.width;
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
  },
  components: {
    ImageLoader,
  },
  methods: {
    set() {
      this.containerSize = {
        width: this.$refs.container.offsetWidth,
        height: this.$refs.container.offsetHeight,
      };

      this.imgSize = {
        width: this.$refs.img.offsetWidth,
        height: this.$refs.img.offsetHeight,
      };
    },
    handleLeave() {
      this.mouse = {
        X: this.center.X,
        Y: this.center.Y,
      };
    },
    handleMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouse = {
        X: e.pageX - rect.left,
        Y: e.pageY - rect.top,
      };
    },
    showWords() {
      const title = this.$refs.title;
      const description = this.$refs.description;
      title.style.width = 0 + "px";
      title.style.opacity = 1;
      description.style.width = 0 + "px";
      description.style.opacity = 1;
      title.offsetWidth;
      title.style.transition = "1s";
      title.style.width = this.titleWidth + "px";
      description.style.transition = "2s 1s";
      description.style.width = this.descriptionWidth + "px";
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.offsetWidth;
    this.descriptionWidth = this.$refs.description.offsetWidth;

    this.set();

    this.mouse = {
      X: this.center.X,
      Y: this.center.Y,
    };

    window.addEventListener("resize", this.set);
  },
  destroyed() {
    window.removeEventListener("resize", this.set);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.rotation-item-container {
  .sizeInherit();
  user-select: none;
  position: relative;
  .img {
    width: 110%;
    height: 110%;
    position: absolute;
    transition: 0.2s linear;
    top: 0;
    left: 0;
  }
  .title,
  .description {
    position: absolute;
    top: 50%;
    left: 30px;
    letter-spacing: 3px;
    text-shadow: 1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000;
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
  }
  .title {
    transform: translateY(-100%);
    font-size: 2em;
    color: #fff;
  }
  .description {
    transform: translateY(100%);
    font-size: 1.2em;
    color: lighten(@gray, 20%);
  }
}
</style>