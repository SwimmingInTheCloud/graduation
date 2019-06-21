export default {
  all(state){
    let num=0;
    let price=0;
    /*let checked="";
    for(var i=0;i<state.select.length;i++){
      num = num+=Number(state.select[i].num);
      price = price+=Number(state.select[i].price*num);
    }*/
    for(var i=0;i<state.cars.length;i++){
      if(state.cars[i].flag){
        num+=state.cars[i].selNum;
        price+=Number(state.cars[i].price*state.cars[i].selNum)
      }
    }
    return {num,price}
  }
}
