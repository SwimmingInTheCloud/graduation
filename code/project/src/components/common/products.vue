<template>
  <div class="product">
    <div class="box">
      <div class="items" v-for="(item,index) in list" :key="index" @click="info(item)">
        <img :src="item.imgPath" alt="">
        <span>{{item.tit}} {{item.num}}</span>
        <span>￥{{item.price}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"Products",
    data(){
      return{
        list:[]
      }
    },
    methods:{
      info(item){
        this.$router.push({name:"proinfo",params:{data:item}})
      },
      init(){

      }
    },
    created(){
      this.$axios.post(this.baseUrl+'/category/getnewpro')
        .then((data)=>{
          this.list=data.data.data;
        })
        .catch((err)=>{

        })
    }
  }
</script>

<style scoped lang="less">
@import url(../../style/mixin);
  .product{
    .fz(34);
    .m_b(98);
    img{
      .w(240);
    }
    padding: 0 unit(30/37.5,rem);
    .box{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .items{
        border-radius: 10px;
        background-color: #f6f6f6;
        width: 48%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        .m_b(25);
        text-align: center;
      }
    }
  }
</style>
