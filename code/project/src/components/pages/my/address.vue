<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="index" v-if="show">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"Address",
    data(){
      return{
        list:['苦','15652650891','北京市东城区'],
        show:""
      }
    },
    methods:{
      checkAddress(){
        let address = localStorage.address?JSON.parse(localStorage.address):[];
        if(address.length===0){
          return this.show=false
        }
        var arr = address.filter((item,index)=>{
          return item.defalt
        });
        if(arr.length===0){
          return this.show=false
        }
        this.list = [arr[0].name,arr[0].phone,arr[0].sheng+"省"+arr[0].shi+"市"+arr[0].qu+"区"+arr[0].road]
        return this.show=true
      }
    },
    mounted(){
      this.checkAddress();
    }
  }
</script>

<style lang="less" scoped>
@import url(../../../style/mixin);
div{
  width: 100%;
  overflow: hidden;
  background-color: white;
  .m_b(20);
}
  ul{
    .m_t(-1);
    padding-left: unit(32/37.5,rem);
    width: 100%;
    li{
      .fz(28);
      color: #7e7e7e;
      .h(99);
      .lh(99);
      border-top: 1px solid #e7e7e7;
    }
  }
</style>
