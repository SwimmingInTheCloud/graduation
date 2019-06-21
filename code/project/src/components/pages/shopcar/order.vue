<template>
    <div class="box">
      <Header tit="确认订单" back="true"></Header>
      <div class="address" >
        <div v-if="show" class="addressBox" v-for="(item,index) in arr" :key="index">
          <div class="left">
            <div class="top">
              <div class="name">
                {{item.name}}
              </div>
              <div class="phone">
                {{item.phone}}
              </div>
            </div>
            <div class="bottom">
              <span>{{item.sheng}}省{{item.shi}}市{{item.qu}}区{{item.road}}</span>
            </div>
          </div>
          <div class="right" @click="selectAddress">
            >
          </div>
        </div>
        <div v-if="!show" class="checkAddress" @click="selectAddress">
          点击选择收货地址
        </div>
      </div>
      <div>
        <div class="item" v-if="cars.length" v-for="(item,index) in cars" :key="item._id">
          <img :src=item.imgPath alt="">
          <div class="info">
            <span>{{item.tit}}</span><span>{{item.price}}*{{item.selNum}}</span>
          </div>

        </div>
      </div>
      <div class="all">
        <div class="price">
          <div>
            共计：{{all.price.toFixed(2)}}元
          </div>
        </div>
        <div class="pay" @click="pay">
          付款
        </div>
      </div>
    </div>
</template>
<script>
  import Header from '../../common/header.vue'
  import {mapState,mapGetters,mapMutations} from 'vuex'
  import {Toast} from 'mint-ui'
    export default {
      name:"Order",
      data(){
        return{
          list:[],
          show:"",
          defaltAddress:"",
          arr:""
        }
      },
      methods:{
        checkAddress(){
          let address = localStorage.address?JSON.parse(localStorage.address):[];
          if(address.length===0){
            return this.show=false
          }
          this.arr = address.filter((item,index)=>{
            return item.defalt
          });
          if(this.arr.length===0){
            return this.show=false
          }
/*
          this.list = [arr[0].name,arr[0].phone,arr[0].sheng+"省"+arr[0].shi+"市"+arr[0].qu+"区"+arr[0].road]
*/
          return this.show=true
        },
        selectAddress(){
          this.$router.push('/newaddress')
        },
        pay(){
          if(!this.show){
            return Toast("请选择收货地址")
          }
          this.cars.map((item,index)=>{
            return item.payed=true;
          });
          this.$store.commit('payed',this.cars)
          Toast('付款成功');
          this.$axios.post(this.baseUrl+'/order/addorder',{userName:JSON.parse(localStorage.userName),order:this.cars})
            .then(data =>{

            })
            .catch(err =>{

            });
          setTimeout(()=>{
            this.$router.push('/address')
          },2000)
        }
      },
      computed:{
        ...mapState({
          cars:state=>{
            return state.shopcar.cars.filter((item,index)=>{
              return item.flag
            })
          }
        }),
          ...mapGetters(['all'])
      },
      components:{
        Header
      },
      mounted(){
        this.checkAddress()
      }
    }
</script>
<style lang="less" scoped>
  @import url('../../../style/mixin');
  img{
    .w(250);
    vertical-align: middle;
  }
  .box{
    .m_t(96);
    .m_b(96);
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
    .h(96);
    .lh(96);
    border-top: 1px solid goldenrod;
    background-color: white;
    position: fixed;
    .bottom(0);
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
  .addressBox{
    display: flex;
    height: 100%;
    .left{
      display: flex;
      flex: 5;
      flex-direction: column;
      .top{
        display: flex;
        justify-content: space-around;
      }
    }
    .right{
      flex: 1;
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  }
  .address{
    .h(96)
  }
  .pay{
    flex: 1;
    background-color: coral;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .price{
    flex: 3;
    div{
      .m_l(40)
    }
  }
  .checkAddress{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 18px;
  }
</style>
