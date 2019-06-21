// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Axios from 'axios'
import 'swiper/dist/css/swiper.css';
import reset from './style/reset.less'
import router from './router'
import store from './store'


import { Navbar, TabItem, TabContainer, TabContainerItem, Cell, Picker, /*InfiniteScroll*/} from 'mint-ui';

/*Vue.component(Picker.name, Picker);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);*/
// Vue.component(InfiniteScroll.name, InfiniteScroll);
Vue.config.productionTip = false;
Vue.use(MintUI)
Vue.prototype.$axios=Axios;
Vue.prototype.baseUrl='http://localhost:3001'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created(){
    this.$store.dispatch('initCars')
  },
  components: { App },
  template: '<App/>'
})
