<template>
  <div class="bottomBar">
    <div class="bar-left bar-item">
      <div class="store left ">
        <img src="~/assets/img/detail/shop.png"></img>
        <div>店铺</div>
      </div>
      <div class="customer left">
        <img src="~/assets/img/detail/service.png"></img>
        <div>客服</div>
      </div>
      <div class="collection left">
        <img src="~/assets/img/detail/collect.png"></img>
        <div>收藏</div>
      </div>
    </div>

    <div class="bar-right bar-item">
      <div class="shopcar  right" @click="addGoodsTo">加入购物车 </div>
      <div class="buying  right">立即购买</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailTabbar",
      methods:{
        addGoodsTo(){

          this.$emit('addToShopcar')
        }
      }
    }
</script>

<style scoped>
  /* components/06-detail/my-bottom-bar/my-bottom-bar.wxss */
  .bottomBar{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 49px;
    font-size: 15px;
    color: #777777;
    display: flex;
    background-color: white;
    z-index: 20;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);

  }
  .bar-left img{
    width: 20px;
    height:20px;
  }
  .bar-item{
    flex: 1;
    display: flex;
  }
  .bar-left,bar-right{
    flex: 1;
    text-align: center
  }
  .left,.right{
    flex: 1
  }
  .left{
     padding: 5px;
   }
  .right{
    line-height: 49px;
    text-align: center;
    font-size: 17px;
  }
  .shopcar{
    background-color: yellow
  }
  .buying{
    background-color: #ff5777;
    color: white;
  }
</style>
