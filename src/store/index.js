import Vue from 'vue'
import Vuex from 'vuex'
//import mutations from './mutitions.js'
//import actions from './actions.js'
//import getters from './getters.js'

Vue.use(Vuex)

const state= {
  carList:[],

}

export default  new Vuex.Store({
  state,
  mutations:{
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

  },
  actions:{
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
      return new Promise((resolve)=>{
        let isHaveGoods=context.state.carList.find(item=>{

          return item.iid===payload.iid

        })
        console.log(isHaveGoods);
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
  },
  getters:{
    addCarList(state){
      return state.carList

    },
    addCarListLength(state){
      return state.carList.length
    }
  },
  modules: {
  }
})
