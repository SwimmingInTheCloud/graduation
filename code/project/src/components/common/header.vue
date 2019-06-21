<template>
  <div>
    <button v-if="back" @click="goBack"><</button>
    <span>{{tit}}</span>
  </div>
</template>

<script>
  export default {
    name:"Header",
    data(){
      return{

      }
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      }
    },
    props:['tit','back']
  }
</script>

<style lang="less" scoped>
  @import url(../../style/mixin.less);
  @bg:#62707F;
  @color:white;
  .fz(@fz){
    font-size: unit(@fz/37.5,rem);
  }
  @lh:unit(96/37.5,rem);
div{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  width: 100%;
  .h(96);
  .fz(40);
  line-height: @lh;
  background-color: @bg;
  color: @color;
  text-align: left;
  font-weight: inherit;
  span{
    .m_l(60)
  }
}
  button{
    background-color: transparent;
    border: none;
    outline: none;
    .fz(40);
    color: white;
    left: unit(10/37.5,rem);
    top:unit(25/37.5,rem);
    position: absolute;
  }
</style>
