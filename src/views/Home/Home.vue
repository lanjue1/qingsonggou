<template>
  <div class="home">
    <div class="home-navbar">
      <NavBar><div slot="middle">轻松购</div></NavBar>
    </div>
    <TabControl :tabList="['流行','新款','精选']" class="TabControl1"
                @IndexClick="indexClick"
                v-show="isShowTabControl1"
                ref="TabControl1"></TabControl>
    <BScroll class="content" ref="Bscroll"
             :probeType="3" @scrollY="scrollY"
             :pullUpLoad="true" @pullingUpLoad="pullingUpLoad">

      <Swipe :banners="banner" @swipeLoad="afterSwipeLoad"></Swipe>
      <HomeRecommend  :recommend="recommend"></HomeRecommend>
      <HomeMidImg></HomeMidImg>
      <div class="goodsStyle">
        <TabControl :tabList="['流行','新款','精选']" class="TabControl2"
                    @IndexClick="indexClick"
                    ref="TabControl2"
                    v-show="!isShowTabControl1"></TabControl>
        <GoodsList :goodsList="goods[currentIndex].list"></GoodsList>
      </div>

    </BScroll>
    <BackToTop @click.native="backToTop" v-show="isShowBacktop"/>

  </div>


</template>

<script>
// @ is an alias to /src
import NavBar from 'components/common/Navbar/Navbar.vue'
import TabControl from 'components/project/TabControl.vue';
import Swipe from 'components/project/Swipe.vue'
import GoodsList from 'components/project/goodsList/GoodsList.vue';
import BScroll from 'components/common/ThirdComponents/Scroll.vue';
//import BackToTop from 'components/common/BackToTop/BackToTop.vue';


import {BackToTopMixin} from 'components/utils/mixin';
import {Debounce} from 'components/utils/Debounce.js';
import HomeRecommend from 'views/Home/HomeRecommend.vue';
import HomeMidImg from 'views/Home/HomeMidImg.vue';


import {getHomeRequest,getHomeGoods} from "network/home";


export default {
  name: 'home',
  components: {
    NavBar,
    Swipe,
    TabControl,
    GoodsList,
    BScroll,
   // BackToTop,

    HomeRecommend,
    HomeMidImg,

  },
  mixins:[BackToTopMixin],
  data:function(){
    return{
      getHomeInfo:{},
      banner:[],
      recommend:[],
      goods:{
        'pop':{ page:0 , list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      currentIndex:'pop',

      //isShowBacktop:false,
      isShowTabControl1:false,
      TabContrToTop:0,

      saveY :0,

    }
  },
    activated(){
      // 点出页面再点进页面后，保存原来的位置：即让BScroll 页面滚动到保存的y的位置
      this.$refs.Bscroll.scrollTo(0,this.saveY,0)
     console.log(this.saveY);
    },
  deactivated(){
    //console.log(this.$refs.Bscroll.B.y)
    //原子组件BScroll let B=new BScroll ,即原B中有x和y值，分别表示滚动了的距离
    //this.saveY=-1000
    this.saveY=this.$refs.Bscroll.B.y

  },
   created(){
      //1.请求首页数据
     this.getHomeRequest();
     //2.请求商品数据
     this.getHomeGoods('pop');
     this.getHomeGoods('new');
     this.getHomeGoods('sell');
   },
  mounted(){
    //因为下面方法直接调用 图片加载完成时调用刷新，有多少张图片就刷新多少次，对服务器的性能调用压力过大，需要进行防抖函数
    /*this.$bus.$on('afterImgLoad',()=>{
      this.$refs.Bscroll.B.refresh()
    })*/
    const Refresh=Debounce(this.$refs.Bscroll.refresh,100)
    this.$bus.$on('afterImgLoad',()=>{
      Refresh();

    })
  },
  destroyed(){
    //console.log('destroyed');
  },
  methods:{


    //1.请求首页数据-函数
    getHomeRequest(){
      getHomeRequest().then(res=>{
        // console.log(res);
        this.getHomeInfo=res;
        this.banner=res.data.banner.list;
        this.recommend=res.data.recommend.list;
        //console.log(this.recommend);

      });
    },
    //2.请求商品数据-函数
    getHomeGoods(type){
      const page=this.goods[type].page+1
      /**
      getHomeGoods('pop',1),getHomeGoods(type,page)其中type是对应的样式，根据样式拿到对应样式的第几页
      page和type存在一一映射关系，故只用传进去一个参数即type即可，page=this.goods[type].page+1

      */
      getHomeGoods(type,page).then(res=>{
        //console.log(res);
        //拿到data.list数据数组 后赋给goods 中对应 type 的list,使用展开运算符展开list中数据并push到goods 中
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
       // console.log(this.goods[type].list);

        //注意： better-scroll里的下拉加载有个设定，必须要终止前一个下拉，才能继续下一个下拉刷新
        this.$refs.Bscroll.B.finishPullUp()

      })
    },

    /*-----------事件监听-----------*/
    // 1. 将组件TabControl传过来的Index 即e 同goods[type]关联起来
    indexClick(e){
      //console.log(e);
      /* 将组件TabControl传过来的Index 即e 同goods[type]关联起来，
         第一种方法：

      switch (e) {
        case 0:
        this.currentIndex='pop'
              break
        case 1:
          this.currentIndex='new'
              break
        case 2:
          this.currentIndex='sell'
              break
      }*/
      //  第二种方法
      const A=['pop','new','sell']
      this.currentIndex=A[e]
      //console.log(this.currentIndex);
      // 注意： 下面是为了实现TabControl1和TabControl2中的index相统一，使得两个组件被选中的type是一致，直接使用
      // $refs.TabControl1即可拿到对应的组件，组件的data中有currentIndex的值，让两个组件中的currentIndex相等即可实现需求；
      this.$refs.TabControl1.currentIndex=e;
      this.$refs.TabControl2.currentIndex=e;

    },

    //2.点击backTo图标，回到顶部
   /* backToTop(){
      this.$refs.Bscroll.scrollTo(0,0)
    },*/
    //3.拿到监听到的滚动的距离y，对backTop图标设置滚动到1000的距离才显示的设定
    scrollY(y){
      //console.log(y);
      //this.isShowBacktop=(-y) > 1000
      this.listenShowBackToTop(y)
      this.isShowTabControl1= (-y) >=this.TabContrToTop
    },
    //4.拿到上拉加载更多的功能事件，并加载page+1的数据
    pullingUpLoad(){
      //console.log('上拉加载');
      this.getHomeGoods(this.currentIndex);

      this.$refs.Bscroll.B.refresh() //调用子组件scroll的刷新方法
     // console.log(this.goods[this.currentIndex].page);

    },
    //5.轮播图加载完成后@load 后，才能拿到具体真实的TabControl2距离顶部的距离,并赋值给TabContrToTop
    afterSwipeLoad(){
      /*let Interval=setInterval(()=>{
        console.log('setTime');
        this.$refs.Bscroll.refresh()},500)

     // console.log(this.TabContrToTop);
      setTimeout(()=>{
        clearInterval(Interval)
        console.log('clear');
      },5000)*/
      this.TabContrToTop=this.$refs.TabControl2.$el.offsetTop;
    }

  }

}
</script>
<style scoped>
  .home{
    position: relative;
    height: 100vh;
  }

  .home-navbar{
    background-color: #ff5776;
    font-size: 16px;
    color: white;
    font-weight: bold;
  }
  .TabControl1{
    position: relative;
    z-index: 10;
  }
  /*.TabControl{
    !* 粘性布局，当组件被滑动到顶部时固定在顶部相对位置
    *!
    position: sticky;
    top: 44px;
  }*/
  .goodsStyle{
    padding-top: 8px;
  }
  .content{
    /* 定位scroll的两种方法
    margin-top: 44px;
    height: calc(100% - 93px);
    overflow: hidden;*/

    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
