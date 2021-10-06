<template>
  <ul class="contact-container" v-if="data">
    <li class="item" v-for="(item, i) in item" :key="i">
      <a target="_blank" :href="item.href">
        <Icon :class="item.type" :type="item.type" />
        {{ item.text }}
      </a>
      <ContactCode v-if="i === 2 || i === 3" :type="item.type" />
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
import Icon from "@/components/Icon";
import ContactCode from "./ContactCode";
export default {
  components: {
    Icon,
    ContactCode,
  },
  computed: {
    ...mapState("setting", ["data"]),
    item() {
      return [
        { href: this.data.github, type: "github", text: this.data.githubName },
        {
          href: `mailto:${this.data.mail}`,
          type: "mail",
          text: this.data.mail,
        },
        {
          href: `tencent://message/?Menu=yes&uin=${this.data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`,
          type: "qq",
          text: this.data.qq,
        },
        { href: "#", type: "weixin", text: this.data.weixin },
      ];
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.contact-container {
  .sizeInherit();
  background: transparent;
  color: @lightWords;
  font-size: 14px;
  padding: 20px 0;
  box-sizing: border-box;
  .item {
    position: relative;
    a {
      padding: 15px 20px;
      display: flex;
      align-items: center;
      word-break: break-word;
      cursor: pointer;
      &:hover {
        color: @primary;
      }
    }
    &:hover {
      .contact-code-container {
        transform: scaleY(1);
      }
    }
  }
  .icon-container {
    font-size: 26px;
    width: 36px;
    &.weixin {
      font-size: 30px;
      margin-left: -1px;
    }
  }
}
</style>