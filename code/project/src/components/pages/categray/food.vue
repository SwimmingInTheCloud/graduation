<template>
  <div class="box">
    <div class="top">
      <img src="/static/img/category-rice.png" alt="">
    </div>
    <div class="title">
      <p>——&nbsp;&nbsp;淡饭&nbsp;&nbsp;——</p>
    </div>
    <ul>
      <li v-for="(item,index) in list" @click="skip(item)">
        <img :src="item.imgPath" alt="">
        <span>{{item.tit}}</span>
        <i>{{item.num}}</i>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"Food",
    data(){
      return{
        list:[]
      }
    },
    methods:{
      skip(item){
        this.$router.push({name:"proinfo",params:{data:item}})
      }
    },
    mounted(){
      this.$axios.post(this.baseUrl+'/category/getcategoryproduct',{category:"rice"})
        .then(data => {
          this.list=data.data.data
        })
    }
  }
</script>

<style lang="less" scoped>
  @import url(../../../style/mixin);
  img{
    width: 100%;
  }
  .box{
    overflow: hidden;
    .h(1130);
    .w(517);
    .p_l(45);
    .p_t(40);
    .p_r(44);
    .m_b(208)
  }
  .title{
    .h(102);
    .lh(102);
    text-align: center;
    .fz(28);
    color: #938f6c;
  }
  li{
    .fz(26);
    color: #3f3e44;
    img{
      .w(144);
      .h(144);
    }
    .h(227);
    width: 33.33%;
    float: left;
  }
</style>
