<template>

    <div class="recommend">
      <div v-for="(item,index) in recommend" class="recommendItem">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "HomeRecommend",
      props:{
        recommend:Array,
      },
    }
</script>

<style scoped>
.recommend{
  display: flex;
  border-bottom: 8px solid #eee;
  padding : 11px  0 ;
}
  .recommendItem{
    flex: 1;
    text-align: center;
  }
  .recommendItem img{
    height: 70rpx;
    width: 70px;
    margin-bottom: 5px;
  }
</style>
