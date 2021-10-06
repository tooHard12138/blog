<template>
  <ul class="data-list-container">
    <li v-for="item in list" :key="item.id">
      <div class="img">
        <Avatar :imgUrl="item.avatar" :size="44" />
      </div>
      <div class="main">
        <div class="top">
          <span class="name">{{ item.nickname }}</span>
          <span class="date">{{ formatDate(item.createDate, true) }}</span>
        </div>
        <p class="comment">
          {{ item.content }}
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from "@/components/Avatar";
import formatDate from "@/utils/formatDate";
export default {
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  components: {
    Avatar,
  },
  methods: {
    formatDate,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.data-list-container {
  li {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid lighten(@gray, 20%);
    .img {
      margin-right: 15px;
      flex: 0 0 auto;
      display: flex;
      align-items: center;
    }
    .main {
      flex: 1 1 auto;
      .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        .name {
          color: darken(@success, 10%);
          font-size: 16px;
        }
        .date {
          font-size: 12px;
          color: @gray;
        }
      }
      .comment {
        font-size: 14px;
        word-break: break-word;
      }
    }
  }
}
</style>