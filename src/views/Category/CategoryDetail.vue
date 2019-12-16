<template>
    <div class="detail">
      <div class="detail-item" v-for="item in detailList">
        <img :src="item.image" alt="">
        <div class="title">{{item.title}}</div>
      </div>
     <GoodsList :goodsList="detailRecommend" class="GoodsList"></GoodsList>
    </div>
</template>

<script>
  import GoodsList from 'components/project/goodsList/GoodsList.vue'

    export default {
        name: "CategoryDetail",
      data:function(){
          return{
            maitKey:0,
           /* miniWallkey:10062603, //这里的maitKey、miniWallkey初始值都是从 getCategory 中返回的list中查看到的
            detailRecommend:[1,2,3],*/
          }
      },
      props:{
        detailList:Array,

        detailRecommend:Array,
      },

      components:{
        GoodsList,
      },
      data:function(){
          return{

          }
      },
      created(){



      },
      watch:{

      },
      methods:{
        /*getMaitKey(){
          this.$bus.$on('getMaitKey',(e)=>{
            this.maitKey=e
            console.log(this.maitKey);
            CategorySub(this.maitKey).then(res=>{
              console.log(res);
              this.detailList=res.data.list
            })
          })
        },*/

        /*getMaitKey(){
          new Promise({
            this.$bus.$on('getMaitKey',(e)=>{
              this.maitKey=e
              console.log(this.maitKey);

            })
          }).then(mkey=>{
            CategorySub(mkey).then(res=>{
              console.log(res);
            })
          })
        }*/
      }
    }
</script>

<style scoped>
.detail{
  width: 100%;
  display: flex;

  flex-wrap: wrap;
  color: #777;
}
.detail-item{
  text-align: center;
  width: 33.3%;
  padding: 10px 0px 5px 0;
}
  .detail-item img{
  width: 75%;
  }
  .title{
    padding: 8px 0;
  }
  .GoodsList{
    width: 100%;
  }
</style>
