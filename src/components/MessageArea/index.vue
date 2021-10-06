<template>
  <div class="message-area-container">
    <DataForm @submit="handleSubmit" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import DataList from "./DataList";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DataForm,
    DataList,
  },
  methods: {
    handleSubmit(formData, callback) {
      this.$emit("submit", formData, callback);
    },
  },
};
</script>

<style lang="less" scoped>
.message-area-container {
  margin: 30px 0;
  h3 {
    margin: 30px 0;
  }
  .loading{
    height: 100px;
    position: relative;
  }
}
</style>