<template>
  <div>
    <Header tit="购物车"></Header>
    <div class="box">
      <div class="item" v-if="cars.length" v-for="(item,index) in cars" :key="item._id">
        <input type="checkbox" :checked="item.flag" :value="item" @change="change(item,index)">
        <img :src=item.imgPath alt="">
        <div class="info">
          <span>{{item.tit}}</span><span>{{item.price}}*{{item.selNum}}</span>
        </div>
        <div class="right">
          <div class="numBox">
            <button @click="delNum(item,index)">-</button>
            <input type="text" v-model="item.selNum">
            <button @click="addNum(item,index)">+</button>
          </div>
          <div @click="delItem(index)">
            删除
          </div>
        </div>

      </div>
    </div>
    <div class="all">
      <div>
        <span>已选{{all.num}}件</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>共计{{all.price.toFixed(2)}}元</span>
      </div>
      <button @click="pay">去结账</button>
    </div>
    <Tagbar></Tagbar>
  </div>
</template>

<script>
  import Tagbar from '../../common/tagbar.vue'
  import Header from '../../common/header.vue'
  import {Toast} from 'mint-ui'
  import {mapState,mapActions,mapGetters} from 'vuex'
  export default {
    name:"ShopCar",
    data(){
      return{
        rootPath:"http://47.95.207.1:8080",
        select:[]
      }
    },
    components:{
      Tagbar,
      Header
    },
    computed:{
      ...mapState({
        cars:state=>state.shopcar.cars
      }),
      ...mapGetters(['all']),
    },
    watch:{

    },
    methods:{
      change(item,index){

        this.$store.dispatch('addSelect',[item,index])
      },
      delNum(data,index){
        if(data.selNum<=1){
          return
        }
        this.$store.dispatch('delNum',index)
      },
      addNum(data,index){
        if(data.selNum>=data.allNum){
          return
        }
        this.$store.dispatch('addNum',index)
      },
      pay(){
        let userName = localStorage.userName?JSON.parse(localStorage.userName):[];
        if(userName.length<=0){
          return Toast("请先登录")
        }
        this.$router.push('/order')
      },
      delItem(index){
        this.$store.dispatch('delItem',index)
      }
    }
  }
</script>

<style scoped lang="less">
@import url('../../../style/mixin');
  img{
    .w(250);
    vertical-align: middle;
  }
  .box{
    .m_t(96);
    .m_b(154);
  }
  .info{
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  .item{
    display: flex;
    .h(200);
    align-items: center;
    background-color: beige;
    .m_b(10)
  }
  .info>span:last-of-type{
    /*.m_r(50)*/
  }
  .all{
    background-color: white;
    position: fixed;
    .bottom(108);
    width: 100%;
    .fz(40);
    display: flex;
    justify-content: space-between;
    button{
      color: white;
      background-color: red;
      border: none;
      text-align: center;
    }
  }
  .numBox{
    display: flex;
    .w(100);
    .m_r(15);
    .m_l(15);
    input{
      .w(50);
      border: none;
      outline: none;
      text-align: center;
    }
    button{
      background-color: white;
      border: none;
      .w(25);
      text-align: center;
      padding: 0;
      outline: none;
    }
  }
  .right{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    align-items: center;
  }
</style>
