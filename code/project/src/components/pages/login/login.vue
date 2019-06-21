<template>
    <div class="login">
      <Header tit="用户登录" back="true"></Header>
      <div class="box">
        <div class="imgCorn">
          <img src="../../../../static/img/timg.jpg" alt="">
        </div>
        <div class="userName">
          <label for="userName">用户名：</label><input v-model="userName" placeholder="请输入用户名" id="userName" type="text"><br>
        </div>
        <div class="passWord">
          <label for="passWord">密&nbsp;&nbsp;&nbsp;码：</label><input v-model="passWord" placeholder="请输入密码" id="passWord" type="password">
        </div>
        <div class="bn">
          <p class="loginNow" @click="login">立即登录</p>
          <p class="goReg" @click="goReg">还没有账号？立即注册</p>
        </div>
      </div>
     </div>
</template>
<script>
  import Header from "../../common/header.vue"
  import {Toast} from 'mint-ui'
    export default {
      data(){
        return{
          userName:"",
          passWord:""
        }
      },
      methods:{
        goReg(){
          this.$router.push('/reg')
        },
        login(){
          this.$axios.post(this.baseUrl+'/user/login',{email:this.userName,passWord:this.passWord})
            .then(data =>{
              if(data.data.err===1){
                Toast('用户名或密码错误')
              }else if(data.data.err===-1){
                Toast("登录失败，请联系管理员")
              }else if(data.data.err===0){
                console.log(data.data.data)
                localStorage.userName=JSON.stringify(data.data.data);
                Toast("登陆成功")
                setTimeout(()=> {
                  this.$router.push('/address')
                },2000)
              }
            })
            .catch(err =>{
              Toast("服务器错误")
            })
        }
      },
      components:{
        Header
      }
    }
</script>
<style lang="less" scoped>
  @import url(../../../style/mixin);
  label{
    font-size: 18px
  }
#userName,#passWord{
  .p_l(20);
  border: none;
  border-bottom: 2px solid gold;
  .m_b(50);
  font-size: 18px;
}
  .login{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .box{
      .p_t(150);
      display: flex;
      flex-direction: column;
    }
  }
  .imgCorn{
    .w(100);
    .h(100);
    border-radius: 50%;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
  .bn{
    display: flex;
    justify-content: space-between;
    font-size: 16px;
  }
</style>
