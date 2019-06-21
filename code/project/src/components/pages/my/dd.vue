<template>
  <div class="box">
    <div v-for="(item,index) in orderList" :key="index" class="order">
      <div class="orderId">订单编号:{{item.orderId}}</div>
      <div class="products">
        <div class="product" v-for="(e,i) in item.order">
          <div class="imgCorn">
            <img :src="e.imgPath" alt="">
          </div>
          <div>
            <span>
              {{e.tit}}
            </span>
            <i>
              {{e.selNum}}件*{{e.price}}元
            </i>
          </div>
        </div>
      </div>
      <div class="price">
        <span>
          共计：{{asd(item.order)}}元
        </span>
        <button disabled>
          {{item.send?"已发货":"已付款"}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name:"Dd",
    data(){
      return{
        orderId:"",
        orderList:""
      }
    },
    computed:{
      ...mapState({
        list:(state)=>{return state.shopcar.payed}
      })
    },
    mounted(){
      let userName = localStorage.userName?JSON.parse(localStorage.userName):"";
      this.$axios.post(this.baseUrl+'/order/getorderbyusername',{userName:userName})
        .then(data =>{
          this.orderList = data.data.data;
        })
        .catch(err =>{

        })
    },
    methods:{
      asd(item){
        let price=0;
        item.map((e,i)=>{
          price+=e.price*e.selNum
        })
        return price.toFixed(2)
      }
    }
  }
</script>

<style scoped lang="less">
@import url(../../../style/mixin);
.box{
  .m_b(108);
  background-color: #ececec;
  width: 100%;
  overflow: hidden;
  .order{
    .m_b(20);
    background-color: white;
    .orderId{
      .h(50);
      .lh(50);
    }
  }
  .product{
    border-bottom: 1px solid gainsboro;
    display: flex;
    align-items: center;
    .h(150);
    .imgCorn{
      .w(140);
      .h(140);
      img{
        width: 100%;
      }
    }
  }
  .price{
    .h(60);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .padding(0,20,0,20);
    button{
      border: none;
    }
  }
}
</style>
