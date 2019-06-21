<template>
    <div class="box">
      <Header tit="个人资料" back="true"></Header>
      <div class="content">
        <div class="imgCorn">
          <img src="" alt="">
        </div>
        <div class="userName">
          <label for="userName">用户名</label><input disabled v-model="userName" type="text" id="userName">
        </div>
        <div class="email">
          <label for="email">邮箱</label><input type="text" disabled id="email" v-model="email">
        </div>
      </div>
      <div class="exit" @click="move">
        退出当前账户
      </div>
    </div>
</template>
<script>
  import Header from '../../common/header.vue'
    export default {
      data(){
        return{
          userName:"",
          email:""
        }
      },
      components:{
        Header
      },
      methods:{
        move(){
          localStorage.clear();
          this.$store.dispatch("reset");
          this.$router.push('/address')
        }
      },
      mounted(){
        this.$axios.post(this.baseUrl+'/user/getinfobyusername',{userName:localStorage.getItem('userName')})
          .then(data =>{
            this.userName = data.data.data[0].userName;
            this.email = data.data.data[0].email;
          })
          .catch(err =>{

          })
      }
    }
</script>
<style scoped lang="less">
  @import url(../../../style/mixin);
  .box{
    font-size: 18px;
    display: flex;
    flex-direction: column;
    .h(1334);
    .content{
      flex: 1;
      .m_t(96);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .exit{
      text-align: center;
      .h(96);
      background-color: cornflowerblue;
      .lh(96);
      color: white;
      border-radius: 96px;
    }
    .userName,.email{
      .m_t(20);
      input{
        border: none;
        border-bottom: 1px solid gray;
      }
    }
  }
</style>
