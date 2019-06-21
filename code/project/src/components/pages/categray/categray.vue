<template>
  <div>
    <Header tit="分类"></Header>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><Fruit></Fruit></div>
        <div class="swiper-slide"><Vg></Vg></div>
        <div class="swiper-slide"><Chao></Chao></div>
        <div class="swiper-slide"><Dianxin></Dianxin></div>
        <div class="swiper-slide"><Tee></Tee></div>
        <div class="swiper-slide"><Food></Food></div>
      </div>

      <div class="swiper-pagination"></div>
    </div>
    <Tagbar></Tagbar>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import Tagbar from '../../common/tagbar.vue'
  import Header from '../../common/header.vue'
  import Aside from '../../pages/categray/aside.vue'
  import Right from '../../pages/categray/right.vue'
  import Chao from './chao.vue'
  import Dianxin from './dianxin.vue'
  import Food from './food.vue'
  import Fruit from './fruit.vue'
  import Tee from './tee.vue'
  import Vg from './vegetable.vue'
  export default {
    name:"Categray",
    data(){
      return{
        now:"Fruit",
        menuList:["果味","蔬菜","炒货","点心","粗茶","淡饭"],
        pagination:"",
        mySwiper:""
      }
    },
    components:{
      Tagbar,
      Header,
      Aside,
      Right,
      Tee,
      Vg,
      Fruit,
      Dianxin,
      Food,
      Chao
    },
    methods:{
      test(val){
        this.now=val;
      },
      clickHandler(e){
        let index = this.menuList.indexOf(e.target.textContent);
          this.mySwiper.slideTo(index,200,true)
          document.getElementsByClassName("swiperPag")[0].addEventListener('click',this.clickHandler)
      }
    },
    mounted(){
      /*this.$nextTick(function(){*/
        this.mySwiper = new Swiper('.swiper-container', {
          direction:'vertical',
          //分页器
          pagination: {
            el: '.swiper-pagination',
            type:"custom",
            clickable :true,
            bulletElement : 'div',
            renderCustom: function(swiper, current, total) {
              var customPaginationHtml="";
              var arr=["果味","蔬菜","炒货","点心","粗茶","淡饭"]
              for(var i = 0; i < total; i++){
                if (i == current - 1) {
                  customPaginationHtml +=
                    '<span class="swiper-pagination-customs swiper-pagination-customs-active" style="color: gold;display: block;width: 100%;border-left: 2px solid gold;box-sizing: border-box;height: 48px;line-height: 48px" >'+arr[i]+'</span>';
                } else {
                  customPaginationHtml +=
                    '<span class="swiper-pagination-customs" style="color: black;display: block;height:48px;line-height: 48px">'+arr[i]+'</span>';
                }
              }
              return '<span class="swiperPag">'+customPaginationHtml+'</span>';
            }
          },
        })
       document.getElementsByClassName("swiperPag")[0].addEventListener('click',this.clickHandler)
    /*  })*/

    },
  }
</script>

<style  lang="less" scoped>
@import url(../../../style/mixin);
  .swiper-pagination{
    .w(147);
    .h(1130);
    border-right: 1px solid #d3d3d3;
    position: fixed;
    .left(0);
    .top(96);
  }
  .swiper-container{
    .h(1130);
    .m_t(96);
    .m_l(147)
  }
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom:0.27rem;
}
.swiper-pagination-customs {
  width: 100%;
  .h(96);
  .lh(96);
  display: block;
  float: left;
  box-sizing: border-box;
}
/*自定义分页器激活时的样式表现*/
.swiper-pagination-customs-active {
  width: 100%;
  .h(96);
  display: block;
  border-radius: 0.07rem;
  border-left: 2px solid gold;
  color: gold;
}
</style>
