<template>
    <div class="box">
      <Header tit="新建收货地址" back="true"></Header>
      <div class="content">
        <div>
          <label for="name">收货人</label><input v-model="name" id="name" type="text">
        </div>
        <div>
          <label for="phone">手机号</label><input v-model="phone" id="phone" type="text">
        </div>
        <div>
          <label for="sheng">省</label><input v-model="sheng" id="sheng" type="text">
        </div>
        <div>
          <label for="shi">市</label><input v-model="shi" id="shi" type="text">
        </div>
        <div>
          <label for="qu">区</label><input v-model="qu" id="qu" type="text">
        </div>
        <div>
          <label for="road">详细地址</label><input v-model="road" id="road" type="text">
        </div>
      </div>
      <div class="save" @click="save">
        保存
      </div>
    </div>
</template>
<script>
  import Header from '../../common/header.vue'
  import {Toast} from 'mint-ui'
  import vue from 'vue'
    export default {
    name:"GoToAddNewAddress",
      data(){
        return{
          name:"",
          phone:"",
          sheng:"",
          shi:"",
          qu:"",
          road:"",
          changeIndex:""
        }
      },
      methods:{
        save(){
          let obj = {
            phone:this.phone,
            name:this.name,
            sheng:this.sheng,
            shi:this.shi,
            qu:this.qu,
            road:this.road,
            defalt:false
          };
          this.$store.dispatch("addNewAddress",obj);
          Toast('添加成功');
          setTimeout(()=>{
            this.$router.go(-1)
          },1000)
        }
      },
      components:{
        Header
      }
    }
</script>
<style scoped lang="less">
  @import url(../../../style/mixin);
  .box{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .h(1334);
    .content{
      flex: 1;
      display: flex;
      flex-direction: column;
      .m_t(96);
      input{
        border: none;
        outline: none;
        flex: 1;
        .m_l(10)
      }
      label{
        .w(120);
        text-align: center;
      }
      div{
        border-bottom: 1px solid gray;
        .w(750);
        display: flex;
        .h(100);
        align-items: center;
      }
    }
  }
  .save{
    text-align: center;
    .h(60);
    .w(490);
    .lh(60);
    color: white;
    font-size: 18px;
    border-radius: 30px;
    background-color: red;
  }
</style>
