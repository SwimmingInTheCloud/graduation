<template>
    <div class="reg">
      <Header tit="用户注册" back="true"></Header>
      <div class="box">
        <div class="userNameBox">
          <input v-model="userName" class="userName" placeholder="请输入用户名" type="text" @blur="blur">
        </div>
        <div class="passWordBox">
          <input v-model="passWord" placeholder="请输入密码" class="passWord" type="password">
        </div>
        <div class="emailBox">
          <input v-model="email" placeholder="请输入邮箱" class="email" type="text">
          <p @click="getCode">获取验证码</p>
        </div>
        <div class="codeBox">
          <input v-model="code" type="text" placeholder="请输入邮箱验证码">
        </div>
        <div class="bn">
          <p @click="goLogin">前往登陆</p>
          <p @click="reg">立即注册</p>
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
          passWord:"",
          email:"",
          code:""
        }
      },
      components:{
        Header
      },
      methods:{
        goLogin(){
          this.$router.push('/login')
        },
        getCode(){
          if(!this.email){
            return Toast('邮箱不能为空')
          }
          this.$axios.post(this.baseUrl+'/user/getcode',{email:this.email})
            .then(data =>{
              console.log(data)
              if(data.data.err===0){
                Toast("验证码已发送，请注意查收")
              }else if(data.data.err===3){
                Toast("邮箱已存在")
              }else if(data.data.err===-1){
                Toast("邮箱检测失败")
              }
            })
            .catch(err =>{
                Toast("服务器错误")
            })
        },
        blur(){
          if(this.userName.length===0){
            return Toast("用户名不能为空")
          }
          this.$axios.post(this.baseUrl+'/user/checkusername',{userName:this.userName})
            .then(data =>{
              console.log(data)
              if(data.data.err===1){
                Toast("用户名已存在")
              }else if(data.data.err===-1){
                Toast("用户名检测出错")
              }else if(data.data.err===0){
                Toast('用户名可用')
              }
            })
            .catch(err =>{
              console.log(err)
            })
        },
        reg(){
          if(this.passWord.length<=0){
            return Toast("密码不能为空")
          }
          this.$axios.post(this.baseUrl+'/user/reg',{userName:this.userName,passWord:this.passWord,code:this.code,email:this.email})
            .then(data=>{
              console.log(data)
              if(data.data.err===0){
                Toast("恭喜注册成功，即将前往登录页面");
                setTimeout(()=>{
                  this.$router.push('/login')
                },1000)
              }else if(data.data.err===2){
                Toast('验证码错误，请重新输入')
              }else if(data.data.err===-1){
                Toast("注册失败")
              }else if(data.data.err===4){
                Toast("用户名已存在，请重新输入")
              }
            })
            .catch(err=>{
              Toast("服务器错误")
            })
        }
      }
    }
</script>
<style scoped lang="less">
  @import url(../../../style/mixin);
  .reg{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
.box{
  font-size: 18px;
  .m_t(150);
  display: flex;
  flex-direction: column;
  .w(600);
  .userNameBox,.passWordBox,.emailBox,.codeBox{
    .m_t(40);
    .lh(80);
    color: #DDE2ED;
    border: 1px solid #E5E5E5;
    text-align: center;
    display: flex;
    input{
      flex: 1;
      .h(80);
      border: none;
      outline: none;
      .p_l(10);
    }
    .email{
      border-right: 1px solid #E5E5E5;
      .m_r(5)
    }
  }
  .bn{
    display: flex;
    justify-content: space-between;
    .m_t(60);
    color: #0087D1;
  }
}
</style>
