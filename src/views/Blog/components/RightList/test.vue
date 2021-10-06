<template>
  <div class="test-container">
    <RightList :list="list" @activeChange="handleActiveChange" />
  </div>
</template>

<script>
import RightList from "./"
import "@/styles/global.less"
export default {
  components:{
    RightList
  },
  data() {
    return {
      list:[
        {name:"标题1", amount: 121, isActive:false},
        {name:"标题2", amount: 121, isActive:true, children:[
          {name:'标题2-1', isActive:false},
          {name:'标题2-2', isActive:false, children:[
            {name:"标题2-2-1", isActive:false},
            {name:"标题2-2-2", isActive:false},
            {name:"标题2-2-3", isActive:false}
          ]},
          {name:'标题2-3', isActive:false}
        ]},
        {name:"标题3", amount: 121, isActive:false},
        {name:"标题4", amount: 121, isActive:false},
      ]
    }
  },
  methods: {
    handleActiveChange(item) {
      console.log(item)
      item.isActive = true
    }
  },
};
</script>

<style lang="less" scoped>
</style>