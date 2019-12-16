<template>
    <div class="itemInfo">
      <p>{{GoodsHeader.title}}</p>
      <div class="itemPrice">
        <div class="Price">
          <span class="new">{{GoodsHeader.price}}</span>
          <span class="old">{{GoodsHeader.oldPrice}}</span>
          <span class="desc">{{GoodsHeader.discountDesc}}</span>
          <Counter ></Counter>
        </div>

      </div>
      <div class="columns" >
        <div v-for="item in GoodsHeader.columns" class="columns-item">{{item}}</div>
      </div>

      <div class="services">
        <div v-for="item in GoodsHeader.services" class="services-item">
          <img src="//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png" alt="">
          {{item.name}}
      </div>

      </div>
    </div>
</template>

<script>
import Counter from 'components/common/Counter/Counter.vue';
    export default {
        name: "DetailItemInfo",
      components:{
        Counter,
      },
      props:{
        GoodsHeader:Object,
      }

    }
</script>

<style scoped>
.itemInfo{

}
  .itemInfo p{
    font-size: 16px;
    padding: 0 10px;
  }
  .itemPrice{

  }
  .Price{
    display: flex;

    margin:5px 10px 15px 20px;
  }
  .Price .new{
    font-size: 19px;
    color: #ff5777;
    font-weight: bold;
  }
.Price .old{
  margin: 0 10px 0 14px;
  text-decoration: line-through;
  font-size: 13px;
  font-weight: bold;
}
.Price .desc{
  background-color: #fd5f7c;
  color: white;
  border-radius: 8px;
  position: relative;
  bottom: 6px;
  font-size: 12px;
  border: 4px solid #fd5f7c;
}
.columns{
  display: flex;
  justify-content: space-between;
  padding: 0 7px 10px 7px;
  border-bottom: 2px solid rgb(226, 225, 225);
}
.columns-item{

  color:rgb(156, 151, 151);
  font-size: 14px;

}
.services{
  width: 100%;
  height: 40px;
  font-size: 12px;
  display: flex;

  justify-content: space-between;
  padding-top: 25px;
  border-bottom: 6px solid #eee;
}
.services-item{
  display: inline;
  z-index: 10;
}
.services-item img{
  width: 12px;
  height: 12px;
}

</style>
