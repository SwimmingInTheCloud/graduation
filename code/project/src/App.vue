<template>
  <div id="app">
    <keep-alive exclude="Proinfo,AllAddress,Top,My,Address,GoToAddNewAddress,Order">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Home from './components/pages/home/home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="less" scoped>

</style>
