export default {
  addNewAddress({commit},params){
    let address=localStorage.address?JSON.parse(localStorage.address):[];
    if(address.length===0) address = [];
    address.push(params);
    localStorage.address=JSON.stringify(address);
    commit("changeAddressState",params)
  },
  initAddress({commit},params){
    let address=localStorage.address?JSON.parse(localStorage.address):[];
    commit("changeAddressState",address)
  }
}
