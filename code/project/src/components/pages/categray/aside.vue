<template>
  <div>
    <ul>
      <li @click="change(item)" v-for="(item,index) in list" :key="index" :class="now===item.title?'sel':''">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"Aside",
    data(){
      return{
        now:"果味",
        list:[
            {title:'果味',component:"Fruit",pz:'pz1'},
            {title:'蔬菜',component:"Vg",pz:'pz2'},
            {title:'炒货',component:"Ch",pz:'pz3'},
            {title:'点心',component:"Dian",pz:'pz4'},
            {title:'粗茶',component:"Tee",pz:'pz5'},
            {title:'淡饭',component:"Food",pz:'pz6'}
          ]
      }
    },
    methods:{
      change(item){
        this.now=item.title;
        this.$emit('test',item.pz)
      }
    }
  }
</script>

<style lang="less" scoped>
@import url(../../../style/mixin);
  ul{
    .w(147);
    position:fixed;
    height: 100%-unit(96/37.5,rem);
    left: 0;
    .top(96);
    bottom: 0;
    border-right: 1px solid #d3d3d3;
    li{
      .fz(32);
      .h(96);
      .lh(96);
      text-align: center;
      .sel{
        color: red;
      }
    }
  }
  .sel{
    color: #9a9788;
  }
</style>
