<template>
  <div>
    <ul class="tagbar">
      <router-link active-class='sel'
                   v-for='(item,index) in list'
                   :to='item.path'
                   :key='index'
                   tag="li">{{item.title}}</router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"Tagbar",
    data(){
      return{
        list:[
          {title:"主页",path:"/home",icon:""},
          {title:"分类",path:"/categray",icon:""},
          {title:"购物车",path:"/shopcar",icon:""},
          {title:"我的",path:"/address",icon:""},
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  @import url(../../style/mixin);
ul{
  .fz(20);
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f6f6f6;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-content: center;
  .h(108);
  .lh(108);
  .sel{
    color: gray;
  }
}
</style>
