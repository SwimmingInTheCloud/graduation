<template>
  <div class="animated" :class="state">
    <Fruit></Fruit>
    <Vg></Vg>
    <Ch></Ch>
    <Dian></Dian>
    <Tee></Tee>
    <Food></Food>
  </div>
</template>

<script>
  import Fruit from '../../pages/categray/fruit.vue'
  import Vg from '../../pages/categray/vegetable.vue'
  import Ch from '../../pages/categray/chao.vue'
  import Dian from '../../pages/categray/dianxin.vue'
  import Tee from '../../pages/categray/tee.vue'
  import Food from '../../pages/categray/food.vue'
  export default {
    name:"Right",
    data(){
      return{

      }
    },
    props:['state'],
    components:{
      Fruit,
      Vg,
      Ch,
      Dian,
      Tee,
      Food
    }
  }
</script>

<style lang="less" scoped>
  @import url('../../../style/mixin');
div{
  height: 100%;
}
  .animated{
    transition: all 500ms ease-in-out;
  }
  .pz1{
    transform:translate(0,0%);
  }
  .pz2{
    transform:translate(0,-30rem);
  }
  .pz3{
    transform:translate(0,-60rem);
  }
  .pz4{
    transform:translate(0,-90rem);
  }
  .pz5{
    transform:translate(0,-120rem);
  }
  .pz6{
    transform:translate(0,-150rem);
  }
</style>
