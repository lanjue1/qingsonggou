<template>
    <div>
      <Navbar>
        <div slot="left" class="backImg" @click="backClick">
          <img src="~assets/img/common/back.png" alt="">
        </div>
        <div class="goodsNav" slot="middle">
          <div  v-for="(item,index) in goodsNavbar" @click="goodsBNavClick(index)"
                :class="{active:currentIndex===index}" >
         <span> {{item}}</span>
        </div>
        </div>
      </Navbar>
    </div>
</template>

<script>
  import Navbar from 'components/common/Navbar/Navbar.vue';
    export default {
        name: "DetailNavbar",
      components:{
        Navbar,
      },
      data:function () {
        return{
          goodsNavbar:['宝贝','评价','详情','推荐'],
          currentIndex:0
        }
      },
      methods:{
        backClick(){
          this.$router.back()
        },
        goodsBNavClick(index){
          this.currentIndex=index;
          this.$emit('navbarClick',index)
        }
      }
    }
</script>

<style scoped>
  .goodsNav{
    display: flex;
  flex-direction: row;
    justify-content: space-evenly;

}
  .goodsNavbar span{
    flex: 1;
    text-align: center;
  }
  .backImg{
    padding-top: 7px;
  }
  .backImg img{
    width: 20px;
    height: 20px;
  }
  .active{
    color: #ff5777;
    /*//line-height: 22px;*/

  }
  .active span{
    padding-bottom: 2px;
    border-bottom: 2px solid #ff5777;
  }
</style>
