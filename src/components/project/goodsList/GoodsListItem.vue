<template>
    <div class="goodsItem" @click="imgClick">
      <img v-lazy="showImg" alt="" class="goodsItem-img" @load="afterImgLoad">

      <div class="itemPrice">
        <p class="goodsItem-title">{{goodsItem.title}}</p>
        <span class="price">￥{{goodsItem.price}}</span>
        <img src="~assets/img/common/favor.png" alt="">
        <span>{{goodsItem.cfav}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
      props:{
        goodsItem:Object,
      },
      computed:{
          showImg(){
            return this.goodsItem.image||this.goodsItem.img||this.goodsItem.show.img
        }
      },
      methods:{
        afterImgLoad(){
          /*if(this.$route.path.indexOf('/home')){
            this.$bus.$emit('afterImgLoad')
          }else if(this.$route.path.indexOf('/detail')){
            this.$bus.$emit('DetailImgLoad')
          }*/
          this.$bus.$emit('afterImgLoad')

        },
        imgClick(){
          console.log(this.goodsItem.iid);

          this.$router.push('/detail/'+this.goodsItem.iid)

        }
      }
    }
</script>

<style scoped>
  .goodsItem{

    padding: 0px 3px 16px 3px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: flex-start;
    -webkit-column-break-inside: avoid;
  }
 /* .goodsItem{
    flex: 1;

    padding: 8px 2.5px 20px 2.5px;
    text-align: center;

  }*/
  .goodsItem-img{
    width: 100%;
    border-radius: 5px;
  }
  .goodsItem-title{
    color: #333;
    position: relative;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

  }
  .itemPrice img{
    width: 15px;
    height: 15px;
    padding: 0 3px 0 8px;
    position: relative;
    top:3px;
  }
  .itemPrice{
    text-align: center;

  }
  .price{
    color: #ff5777;
  }
</style>
