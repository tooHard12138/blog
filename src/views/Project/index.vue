<template>
  <div class="project-container" v-loading="loading" ref="mainContainer">
    <div class="project-item" v-for="item in data" :key="item.id">
      <a
        :target="item.url ? '_blank' : '_self'"
        :href="
          item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
        "
      >
        <img class="thumb" v-lazy="item.thumb" />
      </a>
      <div class="info">
        <h2>
          <a
            :target="item.url ? '_blank' : '_self'"
            :href="
              item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
            "
          >
            {{ item.name }}
          </a>
        </h2>
        <a class="github" target="_blank" :href="item.github" v-if="item.github"
          >github</a
        >
        <p v-for="(description, i) in item.description" :key="i">
          {{ description }}
        </p>
      </div>
    </div>
    <Empty v-if="!data.length && !loading"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import lazy from "@/directives/lazy";
import showTop from "@/mixins/showTop";
import lazyScroll from "@/mixins/lazyScroll";
import Empty from "@/components/Empty";

export default {
  components: {
    Empty,
  },
  directives: {
    lazy,
  },
  mixins: [showTop, lazyScroll],
  computed: {
    ...mapState("project", ["data", "loading"]),
  },
  created() {
    this.$store.dispatch("project/fetchProject");
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.project-container {
  .sizeInherit();
  position: relative;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 20px;
  scroll-behavior: smooth;
}
.project-item {
  display: flex;
  padding: 20px;
  margin-bottom: 20px;
  transition: 0.5s;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
}
.thumb {
  width: 250px;
  min-height: 150px;
  flex: 0 0 auto;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 15px;
}
.info {
  flex: 1 1 auto;
  line-height: 1.7;
  p {
    margin: 15px 0;
  }
}
.github {
  font-size: 14px;
  color: @primary;
}
</style>