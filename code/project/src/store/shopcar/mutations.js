import Vue from 'vue'
export default {
  changeCar(state,params){
    state.cars=params;
    /*Vue.set(state,'select',params)*/
  },
  getSelect(state,params){
    state.select=params;
  },
  changeState(state,params){
    console.log(123)
    state.cars[params].flag=!state.cars[params].flag;
    console.log(state.cars)
  },
  add(state,params){
    state.cars[params].selNum++
  },
  del(state,params){
    state.cars[params].selNum--
  },
  delItemMutations(state,params){
    state.cars.splice(params,1);
    console.log(state.cars)
  },
  resetState(state){
    state.cars = [];
  },
  payed(state,params){
    for(var i = 0; i<params.length; i++){
      state.payed.push(params[i])
    }
  }
}
