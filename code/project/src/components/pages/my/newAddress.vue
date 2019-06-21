<template>
    <div class="newAddress">
      <div class="head">
        <span @click="goBack"><</span><i>地址管理</i>
      </div>

      <div class="content">
        <div v-if="address.length" class="box">
          <div v-for="(item,index) in address" class="info">
            <div class="left">
              <div class="user">
                <p>{{item.name}}</p>
                <b class="phone">{{item.phone}}</b>
              </div>
              <div class="addressInfo">
                <span>{{item.sheng}}省{{item.shi}}市{{item.qu}}区{{item.road}}</span>
              </div>
            </div>
            <div class="right">
              <div class="circleBox" @click="changeDefault(index)">
                <span class="bigCircle">
                  <b v-show="item.defalt" class="smallCircle"></b>
                </span>
                默认
              </div>
              <span @click="del(index)">删除</span>
            </div>
          </div>
        </div>
      </div>
      <div class="addNew" @click="addNew">
        +&nbsp;新建地址
      </div>
    </div>
</template>
<script>
  import Header from '../../common/header.vue'
  import {mapState,mapActions} from 'vuex'
    export default {
    name:"AllAddress",
      data(){
        return{
          address:"",
          delAddress:"",

        }
      },
      components:{
        Header,
      },
      mounted(){
        /*this.$store.dispatch("initAddress")*/
        this.address=localStorage.address?JSON.parse(localStorage.address):[];
      },
      computed:{
        ...mapActions(
          ["initAddress"]
        ),
        /*...mapState({
          address:state=>state.address.allAddress
        })*/
      },
      methods:{
        goBack(){
          this.$router.go(-1)
        },
        addNew(){
          this.$router.push('/gotoaddnew')
        },
        del(index){
          /*this.delAddress = JSON.parse(localStorage.address);
          this.delAddress.splice(index,1);*/
          this.address.splice(index,1);
          localStorage.address=JSON.stringify(this.address);
        },
        changeDefault(index){
          for(var i=0;i<this.address.length;i++){
            if(this.address[i].defalt){
              this.address[i].defalt=false
            }
            this.address[index].defalt=true;
          }
          localStorage.address = JSON.stringify(this.address)
        }
      }
    }
</script>
<style scoped lang="less">
  @import url(../../../style/mixin);
  .head{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    width: 100%;
    .h(96);
    .fz(40);
    background-color: #62707F;
    .lh(96);
    color: white;
    text-align: left;
    font-weight: inherit;
  }
  .newAddress{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .h(1334);
    .content{
      flex: 1;
      .m_t(96);
      width: 100%;
    }
    .addNew{
      text-align: center;
      .h(60);
      .w(490);
      .lh(60);
      color: white;
      font-size: 18px;
      border-radius: 30px;
      background-color: red;
    }
  }
  .content{
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .box{
      width: 100%;
      display: flex;
      flex-direction: column;
      .user{
        .m_l(10);
        .m_t(20);
        display: flex;
        .m_b(10);
        .phone{
          .m_l(90)
        }
      }
      .addressInfo{
        .m_b(20);
        .m_l(10);
      }
    }
  }
  .info{
    border-bottom: 1px solid #62707F;
    display: flex;
    .left{
      width: 75%;
      span{
        width: 100%;
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
    .right{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    .bigCircle{
      .w(40);
      .h(40);
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid gray;
      border-radius: 50%;
    }
    .smallCircle{
      .w(20);
      .h(20);
      border-radius: 50%;
      background-color: green;
    }
    .circleBox{
      display: flex;
      .lh(40)
    }
  }
</style>
