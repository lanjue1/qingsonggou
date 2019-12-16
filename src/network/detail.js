import {base} from './baseRequest'

export function getDetailInfor(iid) {
  return base({
    url:'/detail',
    params:{
      iid:iid,
    }
  })
}
export function getRecommend() {
  return base({
    url:'/recommend',
  })
}
export class GoodsHeader {
  constructor(itemInfo,columns,shopInfo){
    this.topImages=itemInfo.topImages; //轮播图
    this.title=itemInfo.title; //标题
    this.desc=itemInfo.desc;// 描述
    this.price=itemInfo.price  //价格
    this.oldPrice=itemInfo.oldPrice; //老价格
    this.lowNowPrice=itemInfo.lowNowPrice//不带$的价格数字
    this.discountDesc=itemInfo.discountDesc;//折扣语描述
    this.columns=columns; // 销量 、收藏
    this.services=shopInfo.services; //{icon,name} ，售后服务和图标
  }
}

export class ShopInfo {
  constructor(shopInfo){

    this.name=shopInfo.name; //店铺名
    this.shopLogo=shopInfo.shopLogo;//店铺图标

    this.cSells=shopInfo.cSells; //总销量
    this.cGoods=shopInfo.cGoods;//总产品
    this.score=shopInfo.score; // 店铺相关 { isBetter": false,"name": "描述相符","score": 4.58},
  }
}
export class Comment {
  constructor(rate){
   this.content=rate.list[0].content; //具体评论
   this.cUser=rate.list[0].user; // 评论人信息 {"avatar","uname"}
    this.avatar=rate.list[0].user.avatar;
    this.uname=rate.list[0].user.uname;
    this.style=rate.list[0].style;  //购买产品的样式
  }
}
export class Params {
  constructor(itemParams){
    this.tables=itemParams.rule.tables[0]; // 尺码：[[[尺码，s,m,l]]] 需要遍历2次
    this.set=itemParams.info.set; //goods材质 遍历 {key,value}

  }
}
export class DetailInfo {
  constructor(detailInfo){
    this.desc=detailInfo.desc; //详情描述
    this.detailImage=detailInfo.detailImage[0].list;//详情图片，需要遍历
  }
}
