<template>
  <div class="top">
      <div class="box">

          <div class="left">
            <div class="imgcon" @click="changeInfo">
              <img :src="userImg()" alt="">
            </div>
            <p @click="goLogin" v-if="checkUserInfo()">登录/注册</p>
            <p v-if="!checkUserInfo()">{{userName}}</p>
          </div>

      <span>关于我们</span>
    </div>
    <div class="address" @click="newAddress">地址管理<span>></span></div>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  export default {
    name:"Top",
    data(){
      return{
        userName:""
      }
    },/*
    mounted(){
      this.userName=JSON.parse(localStorage.userName)
    },*/
    methods:{
      newAddress(){
        let userName = localStorage.userName?JSON.parse(localStorage.userName):[];
        if(!userName.length){
          return Toast("请先登录")
        }
        this.$router.push('/newaddress')
      },
      userImg(){
        return "../../../../static/img/timg.jpg"
      },
      goLogin(){
        this.$router.push('/login')
      },
      checkUserInfo(){
        let userInfo = localStorage.userName?JSON.parse(localStorage.userName):[];
        if(userInfo.length===0){
          return true
        }
          this.userName = userInfo;
        return false
      },
      changeInfo(){
        this.$router.push('/changeinfo')
      }
    }
  }
</script>

<style scoped lang="less">
  @import url(../../../style/mixin);
  .box{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .m_t(96);
    .h(173);
    .lh(173);
    .fz(30);
    width: 100%;
    background-color: #62707F;
    color: white;
    .imgcon{
      overflow: hidden;
      background-color: gold;
      .m_l(32);
      .m_r(23);
      .w(128);
      .h(128);
      border-radius: 50%;
      float: left;
      img{
        width: 100%;
      }
    }
    p{
      float: left;
    }
    span{
      float: right;
      .m_r(34)
    }
  }
  .left{
    display: flex;
    align-items: center;
  }
  .address{
    border-bottom: 1px solid #ececec;
    background-color: white;
    .h(96);
    .fz(30);
    color: #979797;
    .lh(96);
    text-align: center;
    span{
      float: right;
      .m_r(29)
    }
  }
  .top{
    background-color: #ededed;
  }
</style>
