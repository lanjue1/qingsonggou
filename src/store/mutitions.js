export default {
  //mutations的唯一目的就是修改state中的状态，且mutations中完成的事件尽可能比较单一
  //接收来自actions的addCount，修改已后GOODS中的数目
  addCount(state,[isHaveGoods,payload]){
    isHaveGoods.count+=payload.count
  },
  //接收来自actions的addGoods,给carList[]中增加新的商品和数目
  addGoods(state,payload){
    payload.checked=false
    console.log(payload.checked);
    state.carList.push(payload)
  }

}
