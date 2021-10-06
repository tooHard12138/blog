<template>
<!-- 需要传 imgUrl(图片地址)  size(图片大小)默认150px -->
  <img class="avatar-container" :src="imgUrl" :style="{ width: size + 'px', height: size + 'px' }" />
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 150
    },
  },
};
</script>

<style scoped>
.avatar-container{
    border-radius: 50%;
    display: block;
    object-fit: cover;
    margin: 0 auto;
}
</style>
