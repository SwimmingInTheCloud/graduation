<template>
  <div>
    <p>{{title}}</p>
  </div>
</template>

<script>
  export default {
    name:"Title",
    data(){
      return{
        msg:"精选主题"
      }
    },
    props:['title']
  }
</script>

<style lang="less" scoped>
  @import url(../../../style/mixin.less);
div{
  .h(110);
  .lh(110);
  text-align: center;
  .fz(34);
  color: #96907a;
}
</style>
