<template>
  <div>
    <Header tit="零食商城"></Header>
    <Banner :banners="banners"></Banner>
    <!--<Title title="精选主题"></Title>-->
    <!--<div class="box">
      <div v-for="(item,index) in three" :key="index" @click="goPage(item)" :class="index===2?'big':'small'" >
        <img :src="item" alt="">
      </div>
    </div>-->
    <Title title="最近新品"></Title>
    <Product></Product>
    <Tagbar></Tagbar>
  </div>
</template>

<script>
  import Header from '../../common/header.vue'
  import Banner from './banner.vue'
  import Title from './title.vue'
  import Tagbar from '../../common/tagbar.vue'
  import Product from '../../common/products.vue'
export default {
  name:"Home",
  data () {
    return {
      them:[],
      banners:[],
      three:['../../../../static/img/1@theme.png','../../../../static/img/2@theme.png','../../../../static/img/3@theme.png']
    }
  },
  components:{
    Banner,
    Header,
    Title,
    Tagbar,
    Product
  },
  methods:{
    initData(){
      this.$axios.get(this.baseUrl+'/banners/getBanners')
        .then(data => {
          this.banners=data.data.data
        })
      /*this.$axios.get('/teacher/api/getHome')
        .then((data)=>{
          this.three=data.data.data.themes;
        })
        .catch((err)=>{

        })*/
    }/*,
    goPage(item){
      this.$router.push({name:"them",params:{themId:item._Id,name:item.name,img:item.imgPath}})
    },
    skipThem(index){

    }*/
  },
  created(){
    this.initData()
  }
}
</script>

<style scoped lang="less">
@import url(../../../style/mixin.less);
  .box{
    .h(823);
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    .small{
      width: 49.5%;
      .h(410)
    }
    .big{
      width: 100%;
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
