import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import shopcar from './shopcar'
import address from './address'
const store=new Vuex.Store({
  modules:{
    shopcar:shopcar,
    address:address
  }
})
export default store
