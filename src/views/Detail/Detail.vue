<template>
    <div class="detail">
      <DetailNavbar @navbarClick="navbarClick" ref="DetailNavbar"></DetailNavbar>
      <BScroll class="content" ref="Bscroll" @scrollY="scrollY" :probeType="3">

        <Swipe :banners="topImages"
               :autoPlay='true'
               :showIndicator='true'
               @swipeLoad="afterSwipeLoad"
               class="d-swipe"
        ></Swipe>

      <!--商品标题价格栏-->
        <DetailItemInfo :GoodsHeader="GoodsHeader"></DetailItemInfo>
      <!--店铺-->
        <DetailShop :ShopInfo="ShopInfo"></DetailShop>
      <!--评论-->
        <DetailComment :Comment="Comment" ref="comment"></DetailComment>
      <!--参数-->
        <DetailParams :tables="tables" :set="set" ></DetailParams>
      <!--详情图-->
        <DetailImgInfo :DetailInfo="DetailInfo"
                        @imgLoad="imgLoad" ref="imgInfo"
                        ></DetailImgInfo>
        <!--推荐-->
        <GoodsList :goodsList="Recommend" ref="recommend"></GoodsList>
        </BScroll>
      <BackToTop @click.native="backToTop" v-show="isShowBacktop"/>

      <DetailTabbar @addToShopcar="addToShopcar"></DetailTabbar>
    </div>
</template>

<script>
  import DetailNavbar from './DetailNavbar';
  import DetailItemInfo from './DetailItemInfo';
  import DetailShop from './DetailShop';
  import DetailParams from  './DetailParams';
  import DetailComment from './DetailComment';
  import DetailImgInfo from './DetailImgInfo';
  import DetailTabbar from './DetailTabbar';

  import GoodsList from 'components/project/goodsList/GoodsList.vue';
  import {Debounce} from 'components/utils/Debounce.js';
  import {BackToTopMixin} from 'components/utils/mixin';


  import BScroll from 'components/common/ThirdComponents/Scroll.vue';
  import Swipe from 'components/project/Swipe.vue';

  import {getDetailInfor,
          GoodsHeader,
          ShopInfo,
          Params,
          Comment,
          DetailInfo,
          getRecommend,} from 'network/detail.js';

    export default {
        name: "Detail",
      mixins:[BackToTopMixin],

      data:function(){
          return{
            iid:0,
            GoodsHeader:{},
            topImages:[],
            ShopInfo:{},
            Params:{},
            tables:[],
            set:[],
            Comment:{},
            DetailInfo:{},

            Recommend:[],
            themT:null,
            themTo:[],
            currentIndex:0, //detailNavbar 的currentIndex与本组件的currentIndex对应起来

            Count:1
          }
      },
      components:{
        DetailNavbar,
        BScroll,
        Swipe,
        DetailItemInfo,
        DetailShop,
        DetailParams,
        DetailComment,
        DetailImgInfo,
        DetailTabbar,

        GoodsList,
      },
      created() {
        this.iid=this.$route.params.iid

        //1.获取商品轮播图和标题价格相关信息
        this.getDetailInfor()
        //console.log(this.topImages);

        this.getRecommend();
      },
      mounted(){
        const Refresh=Debounce(this.$refs.Bscroll.refresh,300)
        this.$bus.$on('afterImgLoad',()=>{
          Refresh();

        });



      },
      methods:{
        getDetailInfor(){

          getDetailInfor(this.iid).then(e=>{
            //console.log(e);
            // 1. 轮播图

            //console.log(this.iid);
            this.topImages=e.result.itemInfo.topImages
            //console.log(this.topImages);
            //2. 商品标题+价格信息
            this.GoodsHeader=new GoodsHeader(e.result.itemInfo,e.result.columns,e.result.shopInfo)
            //console.log(this.GoodsHeader);
            // 3. 店铺信息
            this.ShopInfo=new ShopInfo(e.result.shopInfo)
            // 4.参数信息
            this.Params=new Params(e.result.itemParams)

            this.tables=this.Params.tables
            this.set=this.Params.set
            //console.log(this.Params.tables);
            // 5. 评论信息
            this.Comment=new Comment(e.result.rate)


           //console.log(this.Comment);
            // 6. 商品详情图片
              this.DetailInfo=new DetailInfo(e.result.detailInfo)


            //console.log(this.DetailInfo);

            // 7. 拿到详情，参数，推荐，等的top位置，并赋值给this.themTo;
            // ------为确保一定能拿到准备位置，如果使用下一帧 $nextTick()方法；虽然可以拿到距离，但退出重新打开新的
            // 子产品时，为因为图片没有加载完成，而拿到错误的数据,如果在获取图片的方法里调用，则一定会拿到准备的距离数据，缺点是调用太频繁
              /*this.$nextTick(()=>{
                this.themTo=[];
                this.themTo.push(0);
                this.themTo.push(this.$refs.comment.$el.offsetTop)
                this.themTo.push(this.$refs.Bscroll.$el.offsetTop)
                this.themTo.push(this.$refs.recommend.$el.offsetTop)
                console.log(this.themTo);
              })*/


          })
        },
        // 1.推荐商品
        getRecommend(){
          getRecommend().then(res=>{

            this.Recommend=res.data.list
            //console.log(res.data);
          })
        },

        // 主要是用于在各项组件加载完后，给themTo内添加Navbar的各标题的距离
        afterSwipeLoad(){
          //console.log('------');

          setTimeout(()=>{

              this.themTo=[];
              this.themTo.push(0);
              this.themTo.push(this.$refs.comment.$el.offsetTop)
              this.themTo.push(this.$refs.Bscroll.$el.offsetTop)
              this.themTo.push(this.$refs.recommend.$el.offsetTop)

          },100)
        },

        imgLoad(){
          this.$refs.Bscroll.refresh()

        },

        addToShopcar(){
          const DetailShopcar=[]
          DetailShopcar.img=this.topImages[0]
          DetailShopcar.title=this.GoodsHeader.title
          DetailShopcar.desc=this.GoodsHeader.desc
          DetailShopcar.price=this.GoodsHeader.lowNowPrice
          DetailShopcar.iid=this.iid
         // this.addToShopcar()
          this.$bus.$on('CountNumber',(e)=>{
            console.log(e);
            this.Count=e
          })

          DetailShopcar.count=this.Count
          /*console.log(this.Count);
          console.log(DetailShopcar.count);*/
          this.$store.dispatch('addToShopcar',DetailShopcar).then(res=>{
           // console.log(res);
            this.$toast.show('添加进购物车',2000)
          })



        },



        // 6. 抬头navbar的点击跳转到页面固定 components位置的函数
        navbarClick(e){
          //console.log(e);
          /*使用bscroll中的scrollTo方法跳转,将e和y值一一对应起来
          const themTo=[0,1000,2000,3000]
          this.$refs.Bscroll.scrollTo(0,-themTo[e],300)*/
          this.themTo=[];
          this.themTo.push(0);
          this.themTo.push(this.$refs.comment.$el.offsetTop)
          this.themTo.push(this.$refs.Bscroll.$el.offsetTop)
          this.themTo.push(this.$refs.recommend.$el.offsetTop)
          //console.log(this.themTo);

          this.$refs.Bscroll.scrollTo(0,-this.themTo[e],300)
          /*const themTo=[0,1000,2000,3000]
          this.$refs.Bscroll.scrollTo(0,-themTo[e],300)*/

        },
        // 7.滑动到一定位置，显示相对应的Navbar 标题
        scrollY(positionY){
          // 1. 用来显示BackToTop插件
          this.listenShowBackToTop(positionY)
         // console.log(positionY);
           // 在将y值和themTo[]数组中的数值对应起来，y在themTo的[0]-themTo[1]时显示宝贝，
          // 在themTo[1]-themTo[2]时显示评价...y大于在themTo[3]时显示推荐；
          const Y=-positionY

          //console.log(this.themTo);有多种方法，方法一：
          if(Y>0&&Y<this.themTo[1]){
            this.currentIndex=this.$refs.DetailNavbar.currentIndex=0;
            //console.log(this.$refs.DetailNavbar.currentIndex);
          }else if(Y>=this.themTo[1]&&Y<this.themTo[2]){
            this.currentIndex=this.$refs.DetailNavbar.currentIndex=1;


          }else if(Y>=this.themTo[2]&&Y<this.themTo[3]){
            this.currentIndex=this.$refs.DetailNavbar.currentIndex=2;


          }else{
            this.currentIndex=this.$refs.DetailNavbar.currentIndex=3;

          }

          // 方法二：

         /* for(let i=this.themTo.length-1;i>0;i--){
            i=parseInt(i);
            if(i=this.themTo.length-1&&Y>=this.themTo[this.themTo.length-1]){
              this.$refs.DetailNavbar.currentIndex=this.themTo.length-1
            }else if(Y>this.themTo[i]&&Y<this.themTo[i+1]){
              this.$refs.DetailNavbar.currentIndex=i
            }
          }*/

          // 方法三：
          /*for(let i=this.themTo.length-1;i>0;i--){
            i=parseInt(i);
            if((i<this.themTo.length-1&&Y>this.themTo[i]&&Y<this.themTo[i+1])||(i=this.themTo.length-1&&Y>=this.themTo[this.themTo.length-1])){
              console.log(i);
              this.$refs.DetailNavbar.currentIndex=i
            }
          }*/

          // 方法四：给末尾添加一个无穷大的值，避免i+1取不到数值的问题，this.themTo.push(Number.MAX_VALUE)和其他值在一处添加
          /*this.themTo.push(Number.MAX_VALUE)
          for(let i=this.themTo.length-1;i>0;i--){
            i=parseInt(i);
            if(Y>this.themTo[i]&&Y<this.themTo[i+1]){
              this.$refs.DetailNavbar.currentIndex=i
            }
          }*/

        }
      }
    }
</script>

<style scoped>
  .detail{
    position: relative;
    height: 100vh;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
.d-swipe{
  height: 60vh;
}

</style>
