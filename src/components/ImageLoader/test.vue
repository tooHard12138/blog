<template>
  <div id="app">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=50"
      :duration="2000"
      @load="handleLoad"
    />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    handleLoad() {
      console.log('ImageLoader原图切换完成')
    }
  },
};
</script>

<style scoped>
#app{
  width: 900px;
  height: 500px;
  border: 1px solid;
  margin: 30px auto;
}
</style>