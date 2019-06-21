<template>
  <div>
    <Header tit="我的"></Header>
    <Top></Top>
    <Address></Address>
    <div class="dd">我的订单</div>
    <Dd></Dd>
    <Tagbar></Tagbar>
  </div>
</template>

<script>
  import Tagbar from '../../common/tagbar.vue'
  import Header from '../../common/header.vue'
  import Top from '../../pages/my/top.vue'
  import Address from '../../pages/my/address.vue'
  import Dd from '../../pages/my/dd.vue'
  export default {
    name:"My",
    data(){
      return{

      }
    },
    components:{
      Tagbar,
      Header,
      Top,
      Address,
      Dd
    }
  }
</script>

<style scoped lang="less">
@import url(../../../style/mixin);
  .dd{
    .h(96);
    .fz(29);
    color: #989898;
    .lh(96);
    text-align: center;
    border-bottom: 1px solid #ececec;
  }
</style>
