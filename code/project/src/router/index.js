import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/pages/home/home.vue'
import Categray from '../components/pages/categray/categray.vue'
import My from '../components/pages/my/my.vue'
import ShopCar from '../components/pages/shopcar/shopcar.vue'
import Err from '../components/common/err.vue'
import Them from '../components/pages/them/them.vue'
import Proinfo from '../components/pages/productinfo/productinfo.vue'
import NewAddress from '../components/pages/my/newAddress.vue'
import Login from '../components/pages/login/login.vue'
import Reg from '../components/pages/reg/reg.vue'
import GoToAddNew from '../components/pages/my/goToAddNew.vue'
import ChangeInfo from '../components/pages/my/changeInfo.vue'
import Order from '../components/pages/shopcar/order.vue'

Vue.use(VueRouter);
let router=new VueRouter({
  routes:[
    {path:"/",redirect:"/home"},
    {path:"/home",component:Home},
    {path:"/categray",component:Categray},
    {path:"/shopcar",component:ShopCar},
    {name:"proinfo",path:"/proinfo/:id",component:Proinfo},
    {path:"/address",component:My},
    {path:"/login",component:Login},
    {path:"/reg",component:Reg},
    {path:"/gotoaddnew",name:"Gotoaddnew",component:GoToAddNew},
    {path:"/changeinfo",component:ChangeInfo},
    {path:"/order",component:Order},
    {path:"/undefind",component:Err},
    {name:"them",path:"/them/:themId",component:Them},
    {name:"newaddress",path:"/newaddress",component:NewAddress},
    {path:"/**",redirect:'/undefind'},
  ]
});
export default router;
