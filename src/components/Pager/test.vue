<template>
  <div id="app">
    <Pager
      class="test"
      @changePager="handleChangePager"
      :total="201"
      :current="current"
    />
    <Pager @changePager="handleChangePager1" :total="101" :current="current1" />
  </div>
</template>

<script>
import Pager from "./";
export default {
  data() {
    return {
      current: 1,
      current1: 10,
    };
  },
  components: {
    Pager,
  },
  methods: {
    handleChangePager(e) {
      this.current = e;
    },
    handleChangePager1(e) {
      this.current1 = e;
    },
  },
};
</script>

<style scoped>
</style>
