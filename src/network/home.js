import {base} from "./baseRequest";

export function getHomeRequest() {
  return base({
    url:'/home/multidata',

  })
}

export function getHomeGoods(type,page) {
  return base({
    url:'/home/data',
    params:{
      type,
      page,
    }
  })
}
