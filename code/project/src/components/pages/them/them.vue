<template>
  <div>
    <Header back='true' :tit="title"></Header>
    <div>
      <img :src="img" alt="">
    </div>
  </div>
</template>

<script>
  import Header from '../../common/header.vue'
  export default {
    name:"Them",
    data(){
      return{
        title:"",
        img:""
      }
    },
    components:{
      Header
    },
    created(){
      this.title=this.$route.params.name;
      this.img=this.$route.params.img;
    }
  }
</script>

<style scoped lang="less">
img{
  width: 100%;
}
</style>
