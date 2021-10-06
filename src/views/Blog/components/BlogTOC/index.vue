<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <div class="right-list">
      <RightList :list="tocWithActive" @activeChange="handleActiveChange" />
    </div>
  </div>
</template>

<script>
import RightList from "../RightList";
import { debounce } from "@/utils";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      anchorActive: "",
    };
  },
  props: {
    toc: {
      type: Array,
      required: true,
    },
  },
  computed: {
    tocWithActive() {
      const getToc = (toc = []) => {
        return toc.map((item) => {
          return {
            ...item,
            isActive: this.anchorActive === item.anchor,
            children: getToc(item.children),
          };
        });
      };
      return getToc(this.toc);
    },
    doms() {
      const doms = [];
      const getDom = (toc) => {
        for (const item of toc) {
          doms.push(document.getElementById(item.anchor));
          if (item.children && item.children.length) {
            getDom(item.children);
          }
        }
      };
      getDom(this.toc);
      return doms;
    },
  },
  methods: {
    handleActiveChange(item) {
      location.hash = item.anchor;
    },
    setActive() {
      this.anchorActive = "";
      const distance = 100;
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= distance) {
          this.anchorActive = dom.id;
          return;
        } else if (top < 0) {
          this.anchorActive = dom.id;
        } else {
          return;
        }
      }
    },
  },

  mounted() {
    this.debounceSetActive = debounce(this.setActive);
    this.$bus.$on("scroll", this.debounceSetActive);
  },
  destroyed() {
    this.$bus.$off("scroll", this.debounceSetActive);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.blog-toc-container {
  .sizeInherit();
}
h2 {
  font-size: 1em;
  letter-spacing: 2px;
}
.right-list {
  margin: 16px 0;
}
</style>