<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for='item in list'>
        <img :src="item.imgPath">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>

  import Swiper from 'swiper'
  import Vue from 'vue'
  export default {
    name:"Banner",
    data(){
      return{
        list:[]
      }
    },
    props:['banners'],
    methods:{
      init(){
        this.list=this.banners;
        Vue.nextTick(()=>{
          var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            autoplay:true,
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })
      }
    },
    watch:{
      banners(){
        this.init()
      }
    },
    mounted(){
    }
  }
</script>
<style lang="less" scoped>
  @import url(../../../style/mixin);
  @h:unit(440/37.5,rem);
  img{
    width: 100%;
    height: 100%;
  }
  .swiper-slide{
    height: @h;
  }
  .swiper-container{
    .m_t(96)
  }
</style>

