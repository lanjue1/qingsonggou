<template>
    <div class="shop">
      <div class="shopName"  >
        <img :src="ShopInfo.shopLogo" alt="">
        <span>{{ShopInfo.name}}</span>
      </div>
      <div class="store-center">

        <div class="center-left">
          <div class="cSells">
            <span>{{ShopInfo.cSells}}</span>
            <p>总销量</p>
          </div>

          <div class="cGoods">
            <span>{{ShopInfo.cGoods}}</span>
            <p>全部宝贝</p>
          </div>
        </div>

        <div class="center-right">
          <div class="score-item" v-for="item in ShopInfo.score">
            <span class="name">{{item.name}}</span>
            <span class="score" :class="{red:item.isBetter}">{{item.score}}</span>
            <span class="better" :class="{red:item.isBetter}">{{item.isBetter ?'高':'低'}}</span>
          </div>
        </div>
      </div>

      <div  class="Button"><button  class="button">进店逛逛</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailShop",
      props:{
        ShopInfo:Object,
      },
      data:function () {
        return{

        }
      },

    }
</script>

<style scoped>
.shop{

  padding: 25px 10px;

}
.shopName{
  position: relative;
}
.shopName img{
  width: 50px;
  height: 50px;

  border: 2px solid #eee;
  border-radius: 100%;
}
.shopName span{
  font-size:20px;
  color: #555;
  text-align: center;
  position: absolute;
  bottom: 20px;
  padding-left: 10px;
}
.store-center{
  display: flex;
  margin: 15px 0;
}

.store-center{
  color: #777;
  height: 65px;
  font-size: 15px;
  padding-bottom: 15px;
}
.center-left{
  flex: 1;
  text-align: center;
  border-right: 1px solid #eee;
  display: flex;

}
.center-left span{
  font-size: 20px;
  text-align: center;

}
.center-left div{
  margin-top: 10px;
}
.cSells,.cGoods{
  flex: 1;
  font-size: 16px;

}
.center-right{
  width: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}
.score-item{
  flex: 1;
  align-items:center;
  display: flex;

}
.score-item .name{
  width: 100px;

}
.score,.better{
  flex: 1;
}
  .red{
    color: red;
  }
  .green{
    color:yellowgreen;
  }
.Button{
  text-align: center;
}
.button{
  ;
  width: 120px;
  background-color:rgba(248, 248, 248, .2);
  font-size: 14px;
  border: 1px solid #ff5777;
  height: 30px;
  border-radius: 10px;
}
</style>
