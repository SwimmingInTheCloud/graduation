export default {
  initCars({commit}){
    let cars=localStorage.cars?JSON.parse(localStorage.cars):[];
    let sel=localStorage.sel?JSON.parse(localStorage.sel):[];
    cars.forEach(function (item,index) {
      sel.forEach(function (item2,index2) {
        if(item._id===item2._id){
          item.select=true
        }else {
          item.select=false
        }
      })
    })
    commit('changeCar',cars)
  },
  addCar({commit},params){
    setTimeout(()=>{
      let cars=localStorage.cars?JSON.parse(localStorage.cars):[];
      let sel=localStorage.sel?JSON.parse(localStorage.sel):[];
      let index=0;
      let isHas=cars.some((item)=>{
        index++;
        if(params._id===item._id){
          return true;
        }
      });
      if(isHas){
        cars[index-1].selNum++
      }else {
        params.num=1;
        params.flag=true;
        cars.push(params);
      }
      localStorage.cars=JSON.stringify(cars);
      commit('changeCar',cars)
    },500)
  },
  addSelect({commit},params){
    commit('changeState',params[1])
    /*console.log(params);


    let sel=localStorage.sel?JSON.parse(localStorage.sel):[];
    sel.map((item,index) =>{
      params.map((e,i)=>{
        if(item._id==e._id){

        }
      })
    })

    sel=params;

    localStorage.sel=JSON.stringify(sel)

    commit('getSelect',sel)*/
  },
  addNum({commit},params){
  /*  let {_id} = params;
    let cars=localStorage.cars?JSON.parse(localStorage.cars):[];
    for(var i=0;i<cars.length;i++){
      if(cars[i]._id==_id){
        cars[i].num++
      }
    }
    localStorage.cars=JSON.stringify(cars);*/
    commit('add',params)
  },
  delNum({commit},params){
    /*let {_id} = params;
    let cars=localStorage.cars?JSON.parse(localStorage.cars):[];
    for(var i=0;i<cars.length;i++){
      if(cars[i]._id==_id){
        cars[i].num--
      }
    }
    localStorage.cars=JSON.stringify(cars);*/
    console.log(123)
    commit('del',params)
  },
  delItem({commit},params){
    let cars=localStorage.cars?JSON.parse(localStorage.cars):[];
    cars.splice(params,1);
    localStorage.cars=JSON.stringify(cars);
    commit('delItemMutations',params)
  },
  reset({commit},params){
    commit("resetState")
  }
}
