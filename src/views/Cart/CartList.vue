<template>
  <div class="count-goods">
    <div class="goods-icon">
      <checkIcon @click.native="checkClick"  :checked="checked"
                  ></checkIcon>

    </div>

    <div class="goods-image">
      <img :src="GoodsCar.img"  class="image" @load="CarImgLoad">
    </div>

    <div class="goods-info">
      <div class="title">{{GoodsCar.title}}</div>
      <div class="desc">{{GoodsCar.desc}}</div>
      <div class="price-count">
        <div class="price">￥{{GoodsCar.price}}</div>
        <div>{{GoodsCar.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import checkIcon from 'components/project/checkIcon/checkIcon.vue'
    export default {
      name: "CartList",

      components:{
        checkIcon
      },
      props:{
        GoodsCar:Array,
      },
      data:function(){
        return{
          checked:this.GoodsCar.checked
        }
      },
      methods:{
        CarImgLoad(){
          this.$emit('CarImgLoad')
        },
        checkClick(){
          //this.GoodsCar.checked= !this.GoodsCar.checked
          this.checked= this.GoodsCar.checked=!this.checked;

         // console.log(this.checked);
          //console.log(this.GoodsCar.checked);
          this.$emit('checkC',this.checked)
        }
      }


    }
</script>

<style scoped>

  .count-goods{
    display: flex;
    padding: 10px;
    align-items: center;
    border: 1px solid #eee;
  }
  .goods-icon{
    width: 30px;
  }
  .goods-image{
    width: 100px;
  }
  .goods-image .image{

    width: 90px;
    height: 120px;
    border-radius: 8px;
  }

  .goods-info{
    flex: 1;
    width:150px;
  }
  .goods-info .title{
    font-size: 14px;
    font-weight: bold;
    color: #777;

    overflow: hidden;
    white-space: wrap;

  }
  .goods-info .desc{
    font-size: 14px;
    margin-top:10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .price-count{
    display: flex;
    margin-top: 20px;
    padding:0 10px 5px 8px;
    justify-content: space-between;
    font-size: 16px;
  }
  .price {
    color: #FA8752;
    font-size: 18px;
  }
</style>
