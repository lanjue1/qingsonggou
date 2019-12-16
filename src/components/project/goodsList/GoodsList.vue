<template>
    <div class="goodsList">

      <GoodsListItem v-for="(item,index) in goodsList" :goodsItem="item" class="goodsCom"></GoodsListItem>
    </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem';
    export default {
      name: "GoodsList",
      components:{
        GoodsListItem,
      },
      props:{
        goodsList:Array,
      },
      mounted(){
       // console.log(this.goodsList);
      },
      /*watch:{
        goodsList(newValue){
          console.log(newValue);
        }
      }*/
    }
</script>

<style scoped>
  /*.goodsList{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0 2.5px;

  }*/

 .goodsList{
    column-count: 2;
    column-gap: 0px;
    align-items: stretch;
    padding:0px 0 50px 0;

  }

</style>
