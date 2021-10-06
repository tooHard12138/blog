<template>
  <div id="app">
      <Icon class="home" type="home"/>
      <Icon class="success" type="success"/>
  </div>
</template>

<script>
import Icon from "./";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
.home{
    font-size: 30px;
    font-weight: bold;
    color: lightcoral;
}
.success{
    font-size: 50px;
    font-weight: bold;
    color: #008c8c;
    margin-left: 20px;
}
</style>