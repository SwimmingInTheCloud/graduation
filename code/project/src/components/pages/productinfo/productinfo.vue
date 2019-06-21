<template>
  <div class="box" >
    <Header tit="商品详情" back="true"></Header>
    <div class="imgbox">
      <img :src="img" alt="">
    </div>
    <div class="num">
      <div>
        <span>数量</span>
      <span class="steNum">
          <button @click="changeNum">-</button>
          <input type="text" v-model="num" disabled>
          <button @click="changeNum">+</button>
        </span>
      </div>
      <div>
        <span @click="addCar(proInfo)">加入购物车</span>
      </div>
    </div>
    <div class="info">
      <p>有货</p>
      <p>{{name}}</p>
      <p>{{price}}</p>
    </div>
    <div>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">商品详情</mt-tab-item>
        <mt-tab-item id="3">售后保障</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container class="imgcon" v-model="selected">
        <mt-tab-container-item id="1">
          <img :src="proInfoImg" alt="">
          <!--<mt-cell v-for="(item,index) in info" :title="'内容 ' + n" />-->
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          {{ensure}}
          <!--<mt-cell v-for="n in 6" :title="'选项 ' + n" />-->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
  import Header from '../../common/header.vue'
  import {mapActions} from 'vuex'
  import {Toast} from 'mint-ui'
  /*import Vue from 'vue'*/
  /*import MtPicker from "../../../../node_modules/mint-ui/packages/picker/src/picker.vue";*/
  export default {
    name:"Proinfo",
    data(){
      return{
        rootPath:'http://10.9.48.136:8080/static/img/',
        img:"",
        price:"",
        name:"",
        now:"商品详情",
        selected:"1",
        info:['detail-1@1-dryfruit.png','detail-2@1-dryfruit.png','detail-3@1-dryfruit.png','detail-4@1-dryfruit.png','detail-5@1-dryfruit.png','detail-6@1-dryfruit.png','detail-7@1-dryfruit.png','detail-8@1-dryfruit.png','detail-9@1-dryfruit.png','detail-10@1-dryfruit.png','detail-11@1-dryfruit.png','detail-12@1-dryfruit.png','detail-13@1-dryfruit.png'],
        proInfo:[],
        proInfoImg:"",
        ensure:"",
        num:1,
        allNum:""
      }
    },
    components:{
      Header
    },
    created(){
      this.img=this.$route.params.data.imgPath;
      this.price=this.$route.params.data.price;
      this.name=this.$route.params.data.tit;
      this.allNum = this.$route.params.data.allNum;
      this.proInfoImg = this.$route.params.data.proImgPath;
      this.ensure = this.$route.params.data.ensure;
      let id=this.$route.params.data._id;
      this.$axios.post(this.baseUrl+`/category/getprobyid`,{_id:id})
        .then((res)=>{
        this.proInfo=res.data.data[0];
        })
    },
    methods:{
      addCar(data){
        data.selNum=this.num;
        data.payed = false;
        this.$store.dispatch('addCar',data);
        Toast("加入购物车成功")
      },
      changeNum(e){
        if(e.target.textContent=="+"){
          if(this.num>=this.allNum){
            return
          }
          this.num++
        }else if(e.target.textContent=="-"){
          if(this.num<=1){
            return
          }
          this.num--
        }
      }
    },
  }
</script>

<style lang="less" scoped>
@import url(../../../style/mixin);
.box{
  background-color: #f8f8f8;
}
img{
  width: 100%;
  outline: none;
  vertical-align: top;
}
.imgcon{
  .m_t(5)
}
  .imgbox{
    background-color: white;
    .m_t(96);
    .h(512);
    width: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .num{
    .w(728);
    .h(110);
    .lh(110);
    border-radius: unit(50/37.5,rem);
    margin: 0 auto;
    background-color: #62707F;
    display: flex;
    color: white;
    .fz(26);
    div:first-of-type{
      display: flex;
      width: 50%;
      justify-content: space-around;
    }
    div:last-of-type{
      width: 50%;
      display: flex;
      justify-content: space-around;
    }
  }
  .info{
    background-color: white;
    .m_b(32);
    .h(312);
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    p{
      .lh(66)
    }
    p:first-of-type{
      .fz(26)
    }
    p:nth-of-type(2){
      .fz(44)
    }
  }
  ul{
    display: flex;
    background-color: white;
    width: 100%;
    .h(98);
    justify-content: space-around;
    .lh(98);
    border-bottom: 1px solid #d2d2d2;
    color: #c5c5c5;
    .fz(28);
    li{
      width: 100%;
      text-align: center;
    }
    .m_b(16)
  }
  .sel{
    border-bottom: 4px solid #b0af7f;
  }
  .steNum{
    display: flex;
    justify-content:center;
    align-items: center;
    input,button{
      .w(50);
      .h(40);
      border: none;
      outline: none;
      color: white;
      background-color: transparent;
      text-align: center;
    }
  }
</style>
