<template>



      <!--<BScroll class="content" >-->
  <div class="category">
    <NavBar class="NavBar">
      <div slot="middle">商品分类</div>
    </NavBar>
    <div class="category-content">

      <BScroll class="content" >
        <CategoryTitle :list="list" class="title" @getMaitKey="getMaitKey"></CategoryTitle>

      </BScroll>
      <BScroll class="content right" >
        <CategoryDetail class="detail"
                        :detailRecommend="detailRecommend"
                        :detailList="detailList"
        ></CategoryDetail>
      </BScroll>

    </div>
  </div>




</template>

<script>
  import CategoryTitle from './CategoryTitle';
  import CategoryDetail from './CategoryDetail';
  import BScroll from 'components/common/ThirdComponents/Scroll.vue';
  import NavBar from 'components/common/Navbar/Navbar.vue'

  import {
    getCategory,
    CategorySub,
    CategoryRecommend,} from 'network/category.js';

    export default {
        name: "Category",
      components:{
        CategoryTitle,
        CategoryDetail,
        BScroll,
        NavBar,
      },
      data:function(){
          return{

            list:null,
            maitKey:3627,
            detailList: [],
            miniWallkey:10062603, //这里的maitKey、miniWallkey初始值都是从 getCategory 中返回的list中查看到的
            detailRecommend:[],
          }
      },
    created(){

       this._getCategory();
        this.getCategorySub(this.maitKey);
        this.getCategoryRecommend(this.miniWallkey,'pop')
      },
      methods:{
        _getCategory(){
          getCategory().then(e=> {
            //console.log(e);
            this.list = e.data.category.list
            //console.log(this.list);
          })
        },
        /*2. 拿到title 中的参数并赋值*/
        getMaitKey(a){
          this.maitKey=a[0]
         // console.log(this.maitKey);
          this.getCategorySub(a[0]);

          this.miniWallkey=a[1]
          console.log(this.miniWallkey);
          this.getCategoryRecommend(a[1])
        },
        /*3.获得Category 分类子页面数据*/
        getCategorySub(key){
          CategorySub(key).then(res=>{
            this.detailList=res.data.list
          })
        },
        /*4.获得recommend*/
        getCategoryRecommend(minikey){
          CategoryRecommend(minikey,'pop').then(res=>{

            //console.log(res);
           this.detailRecommend=res

          })
        }
      }

    }
</script>

<style scoped>
  .NavBar{
    background-color: #ff5777;
    font-size: 16px;
    color: white;
    font-weight: bold;
  }
  .category{
    position: relative;
    height: 100vh;

  }
  .category-content{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    text-align: center;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;

    left: 0;
    right: 0;
  }
  .right{
    left:30%;
    /*width: 100%;*/
  }
  /*.title{
    width: 30%;
  }
  .detail{
    width: 70%;
  }*/
</style>
