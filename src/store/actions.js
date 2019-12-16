export default {
  addToShopcar(context,payload){

    // 可行方法一：
    /*let Goods=null;
    for(let item of context.state.carList){
      if(item.iid===payload.iid){
        //item.Count+=1 不能直接这样写，会报错
        Goods=item;
      }
    }
    if(Goods){
      Goods.count+=payload.count
    }else {

      context.state.carList.push(payload)
    }
    console.log(state.carList);
    */

    //方法二：
    return new Promise((resolve,reject)=>{
      let isHaveGoods=context.state.carList.find(item=>item.iid===payload.iid)
      // console.log(isHaveGoods);
      if(isHaveGoods){
        // isHaveGoods.count+=payload.count  为了尽可能符合项目需求，应该让mutation来修改数据
        context.commit('addCount',[isHaveGoods,payload])
        resolve('当前添加的商品数+1')
      }else {
        context.commit('addGoods',payload)
        // context.state.carList.push(payload)
        resolve('成功添加当前商品')
      }
      // console.log(typeof context.state.carList);
    })

  }
}
